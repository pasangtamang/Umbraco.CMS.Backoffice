import { css, CSSResultGroup, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'rxjs';
import { UUITextStyles } from '@umbraco-ui/uui';
import { UmbPropertyActionMenuContext } from './property-action-menu.context';
import type { ManifestPropertyAction } from '@umbraco-cms/models';
import { umbExtensionsRegistry } from '@umbraco-cms/extensions-registry';

import '../property-action/property-action.element';
import { UmbLitElement } from '@umbraco-cms/element';

@customElement('umb-property-action-menu')
export class UmbPropertyActionMenuElement extends UmbLitElement {
	static styles: CSSResultGroup = [
		UUITextStyles,
		css`
			#popover {
				width: auto;
			}

			#more-symbol {
				font-size: 0.6em;
			}

			#popover-trigger {
				--uui-button-padding-top-factor: 0.5;
				--uui-button-padding-bottom-factor: 0.1;
			}

			#dropdown {
				background-color: white;
				border-radius: var(--uui-border-radius);
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				box-shadow: var(--uui-shadow-depth-3);
				min-width: 200px;
				color: black; /* Change to variable */
			}
		`,
	];

	@property()
	public propertyEditorUIAlias = '';

	// TODO: we need to investigate context api vs values props and events
	@property()
	public value?: string;

	@state()
	private _actions: Array<ManifestPropertyAction> = [];

	@state()
	private _open = false;

	private _propertyActionMenuContext = new UmbPropertyActionMenuContext();

	connectedCallback(): void {
		super.connectedCallback();

		this._observePropertyActions();
		this._observePropertyActionMenuOpenState();

		this.provideContext('umbPropertyActionMenu', this._propertyActionMenuContext);
	}

	private _observePropertyActions() {
		this.observe(
			umbExtensionsRegistry
				.extensionsOfType('propertyAction')
				.pipe(
					map((propertyActions) =>
						propertyActions.filter((propertyAction) =>
							propertyAction.meta.propertyEditors.includes(this.propertyEditorUIAlias)
						)
					)
				),
			(propertyActionManifests) => {
				this._actions = propertyActionManifests;
			}
		);
	}

	private _observePropertyActionMenuOpenState() {
		this.observe(this._propertyActionMenuContext.isOpen, (value) => {
			this._open = value;
		});
	}

	private _toggleMenu() {
		this._open ? this._propertyActionMenuContext.close() : this._propertyActionMenuContext.open();
	}

	private _handleClose(event: CustomEvent) {
		this._open = false;
		event.stopPropagation();
	}

	render() {
		return html`
			${this._actions.length > 0
				? html`
						<uui-popover id="popover" placement="bottom-start" .open=${this._open} @close="${this._handleClose}">
							<uui-button
								id="popover-trigger"
								slot="trigger"
								look="secondary"
								label="More"
								@click="${this._toggleMenu}"
								compact>
								<uui-symbol-more id="more-symbol"></uui-symbol-more>
							</uui-button>

							<div slot="popover" id="dropdown">
								${this._actions.map(
									(action) => html`
										<umb-property-action .propertyAction=${action} .value="${this.value}"></umb-property-action>
									`
								)}
							</div>
						</uui-popover>
				  `
				: ''}
		`;
	}
}