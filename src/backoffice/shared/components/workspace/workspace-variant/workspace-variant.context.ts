import {
	ActiveVariant,
	UmbDocumentWorkspaceContext,
} from '../../../../documents/documents/workspace/document-workspace.context';
import { UmbVariantId } from '../../../variants/variant-id.class';
import { UmbContextConsumerController, UmbContextProviderController } from '@umbraco-cms/context-api';
import { UmbControllerHostInterface } from '@umbraco-cms/controller';
import { ClassState, NumberState, ObjectState, UmbObserverController } from '@umbraco-cms/observable-api';
import { DocumentVariantModel } from '@umbraco-cms/backend-api';

//type EntityType = DocumentModel;

export class UmbWorkspaceVariantContext {
	#host: UmbControllerHostInterface;

	#workspaceContext?: UmbDocumentWorkspaceContext;

	#index = new NumberState(undefined);
	index = this.#index.asObservable();

	#currentVariant = new ObjectState<DocumentVariantModel | undefined>(undefined);
	currentVariant = this.#currentVariant.asObservable();

	name = this.#currentVariant.getObservablePart((x) => x?.name);
	culture = this.#currentVariant.getObservablePart((x) => x?.culture);
	segment = this.#currentVariant.getObservablePart((x) => x?.segment);

	#variantId = new ClassState<UmbVariantId | undefined>(undefined);
	variantId = this.#variantId.asObservable();

	private _currentVariantObserver?: UmbObserverController<ActiveVariant>;

	constructor(host: UmbControllerHostInterface) {
		this.#host = host;

		new UmbContextProviderController(host, 'umbWorkspaceVariantContext', this);

		// How do we ensure this connects to a document workspace context? and not just any other context? (We could start providing workspace contexts twice, under the general name and under a specific name)
		// TODO: Figure out if this is the best way to consume the context or if it can be strongly typed with an UmbContextToken
		new UmbContextConsumerController(host, 'umbWorkspaceContext', (context) => {
			this.#workspaceContext = context as UmbDocumentWorkspaceContext;
			this._observeVariant();
		});

		this.index.subscribe(() => {
			this._observeVariant();
		});
	}

	private _setVariantId(culture: string | null, segment: string | null) {
		const variantId = UmbVariantId.Create(culture, segment);
		this.#variantId.next(variantId);
		return variantId;
	}

	private _observeVariant() {
		if (!this.#workspaceContext) return;

		const index = this.#index.getValue();
		if (index === undefined) return;

		this._currentVariantObserver?.destroy();
		this._currentVariantObserver = new UmbObserverController(
			this.#host,
			this.#workspaceContext.activeVariantInfoByIndex(index),
			async (activeVariantInfo) => {
				if (!activeVariantInfo) return;
				const variantId = this._setVariantId(activeVariantInfo.culture, activeVariantInfo.segment);
				const currentVariant = await this.#workspaceContext?.getVariant(variantId);
				this.#currentVariant.next(currentVariant);
			},
			'_observeVariant'
		);
	}

	public changeVariant(culture: string | null, segment: string | null) {
		const index = this.#index.getValue();
		if (index === undefined) return;
		this.#workspaceContext?.setActiveVariant(index, culture, segment);
	}

	/*
	public getSplitViewIndex() {
		return this.#index.getValue();
	}
	*/
	public setSplitViewIndex(index: number) {
		this.#index.next(index);
	}

	public setName(newName: string) {
		const variantId = this.#variantId.getValue();
		if (!this.#workspaceContext || !variantId) return;
		this.#workspaceContext.setName(newName, variantId);
	}

	/**
	 *
	 * concept this class could have methods to set and get the culture and segment of the active variant? just by using the index.
	 */

	/*
	public destroy(): void {

	}
	*/
}