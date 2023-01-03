import { UUITextStyles } from '@umbraco-ui/uui-css/lib';
import { css, html, LitElement } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property, state } from 'lit/decorators.js';
import { EMPTY, of, switchMap } from 'rxjs';

import { UmbDataTypeStore } from '../../data-types/data-type.store';
import { UmbObserverMixin } from '@umbraco-cms/observable-api';
import type { ContentProperty, ManifestTypes } from '@umbraco-cms/models';
import { umbExtensionsRegistry } from '@umbraco-cms/extensions-registry';
import { UmbContextConsumerMixin } from '@umbraco-cms/context-api';

import '../entity-property/entity-property.element';

@customElement('umb-content-property')
export class UmbContentPropertyElement extends UmbContextConsumerMixin(UmbObserverMixin(LitElement)) {
	static styles = [
		UUITextStyles,
		css`
			:host {
				display: block;
			}
		`,
	];

	private _property?: ContentProperty;
	@property({ type: Object, attribute: false })
	public get property(): ContentProperty | undefined {
		return this._property;
	}
	public set property(value: ContentProperty | undefined) {
		this._property = value;
		this._observeDataType();
	}

	@property()
	value?: string;

	@state()
	private _propertyEditorUIAlias?: string;

	@state()
	private _dataTypeData?: any;

	private _dataTypeStore?: UmbDataTypeStore;

	constructor() {
		super();

		this.consumeContext('umbDataTypeStore', (instance) => {
			this._dataTypeStore = instance;
			this._observeDataType();
		});
	}

	private _observeDataType() {
		if (!this._dataTypeStore || !this._property) return;

		this.observe<ManifestTypes>(
			this._dataTypeStore.getByKey(this._property.dataTypeKey).pipe(
				switchMap((dataType) => {
					if (!dataType?.propertyEditorUIAlias) return EMPTY;
					this._dataTypeData = dataType.data;
					return umbExtensionsRegistry.getByAlias(dataType.propertyEditorUIAlias) ?? of(null);
				})
			),
			(manifest) => {
				if (manifest?.type === 'propertyEditorUI') {
					this._propertyEditorUIAlias = manifest.alias;
				}
			}
		);
	}

	render() {
		return html`<umb-entity-property
			label=${ifDefined(this.property?.label)}
			description=${ifDefined(this.property?.description)}
			alias="${ifDefined(this.property?.alias)}"
			property-editor-ui-alias="${ifDefined(this._propertyEditorUIAlias)}"
			.value="${this.value}"
			.config="${this._dataTypeData}"></umb-entity-property>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-content-property': UmbContentPropertyElement;
	}
}