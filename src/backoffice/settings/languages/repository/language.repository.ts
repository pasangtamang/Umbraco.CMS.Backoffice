import { UmbLanguageServerDataSource } from './sources/language.server.data';
import { UmbLanguageStore, UMB_LANGUAGE_STORE_CONTEXT_TOKEN } from './language.store';
import { UmbControllerHostInterface } from '@umbraco-cms/controller';
import { UmbContextConsumerController } from '@umbraco-cms/context-api';
import { UmbNotificationService, UMB_NOTIFICATION_SERVICE_CONTEXT_TOKEN } from '@umbraco-cms/notification';
import { LanguageModel, ProblemDetailsModel } from '@umbraco-cms/backend-api';

export class UmbLanguageRepository {
	#init!: Promise<unknown>;

	#host: UmbControllerHostInterface;

	#dataSource: UmbLanguageServerDataSource;
	#languageStore?: UmbLanguageStore;

	#notificationService?: UmbNotificationService;

	constructor(host: UmbControllerHostInterface) {
		this.#host = host;

		this.#dataSource = new UmbLanguageServerDataSource(this.#host);

		this.#init = Promise.all([
			new UmbContextConsumerController(this.#host, UMB_NOTIFICATION_SERVICE_CONTEXT_TOKEN, (instance) => {
				this.#notificationService = instance;
			}),

			new UmbContextConsumerController(this.#host, UMB_LANGUAGE_STORE_CONTEXT_TOKEN, (instance) => {
				this.#languageStore = instance;
			}),
		]);
	}

	// TODO: maybe this should be renamed to something more generic?
	async requestByIsoCode(isoCode: string) {
		await this.#init;

		if (!isoCode) {
			const error: ProblemDetailsModel = { title: 'Iso code is missing' };
			return { error };
		}

		return this.#dataSource.get(isoCode);
	}

	// TODO: maybe this should be renamed to something more generic.
	// Revisit when collection are in place
	async requestLanguages({ skip, take } = { skip: 0, take: 1000 }) {
		await this.#init;

		const { data, error } = await this.#dataSource.getCollection({ skip, take });

		if (data) {
			// TODO: allow to append an array of items to the store
			data.items.forEach((x) => this.#languageStore?.append(x));
		}

		return { data, error, asObservable: () => this.#languageStore!.data };
	}

	async requestItems(isoCodes: Array<string>) {
		// HACK: filter client side until we have a proper server side endpoint
		// TODO: we will get a different size model here, how do we handle that in the store?
		const { data, error } = await this.requestLanguages();

		let items = undefined;

		if (data) {
			// TODO: how do we best handle this? They might have a smaller data set than the details
			items = data.items = data.items.filter((x) => isoCodes.includes(x.isoCode!));
			data.items.forEach((x) => this.#languageStore?.append(x));
		}

		return { data: items, error, asObservable: () => this.#languageStore!.items(isoCodes) };
	}

	/**
	 * Creates a new Language scaffold
	 * @param
	 * @return {*}
	 * @memberof UmbLanguageRepository
	 */
	async createScaffold() {
		return this.#dataSource.createScaffold();
	}

	async create(language: LanguageModel) {
		await this.#init;

		const { error } = await this.#dataSource.insert(language);

		if (!error) {
			this.#languageStore?.append(language);
			const notification = { data: { message: `Language created` } };
			this.#notificationService?.peek('positive', notification);
		}

		return { error };
	}

	/**
	 * Saves a language
	 * @param {LanguageModel} language
	 * @return {*}
	 * @memberof UmbLanguageRepository
	 */
	async save(language: LanguageModel) {
		await this.#init;

		const { error } = await this.#dataSource.update(language);

		if (!error) {
			const notification = { data: { message: `Language saved` } };
			this.#notificationService?.peek('positive', notification);
			this.#languageStore?.append(language);
		}

		return { error };
	}

	/**
	 * Deletes a language
	 * @param {string} isoCode
	 * @return {*}
	 * @memberof UmbLanguageRepository
	 */
	async delete(isoCode: string) {
		await this.#init;

		if (!isoCode) {
			const error: ProblemDetailsModel = { title: 'Language iso code is missing' };
			return { error };
		}

		const { error } = await this.#dataSource.delete(isoCode);

		if (!error) {
			this.#languageStore?.remove([isoCode]);
			const notification = { data: { message: `Language deleted` } };
			this.#notificationService?.peek('positive', notification);
		}

		return { error };
	}
}