import { UMB_DOCUMENT_BLUEPRINT_WORKSPACE_CONTEXT } from '../../document-blueprint-workspace.context-token.js';
import type { UmbDocumentBlueprintWorkspaceViewEditTabElement } from './document-blueprint-workspace-view-edit-tab.element.js';
import { css, html, customElement, state, repeat } from '@umbraco-cms/backoffice/external/lit';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import type { UmbPropertyTypeContainerModel } from '@umbraco-cms/backoffice/content-type';
import { UmbContentTypeContainerStructureHelper } from '@umbraco-cms/backoffice/content-type';
import type { UmbRoute, UmbRouterSlotChangeEvent, UmbRouterSlotInitEvent } from '@umbraco-cms/backoffice/router';
import { encodeFolderName } from '@umbraco-cms/backoffice/router';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import type { UmbWorkspaceViewElement } from '@umbraco-cms/backoffice/extension-registry';

@customElement('umb-document-blueprint-workspace-view-edit')
export class UmbDocumentBlueprintWorkspaceViewEditElement extends UmbLitElement implements UmbWorkspaceViewElement {
	//@state()
	//private _hasRootProperties = false;

	@state()
	private _hasRootGroups = false;

	@state()
	private _routes: UmbRoute[] = [];

	@state()
	private _tabs?: Array<UmbPropertyTypeContainerModel>;

	@state()
	private _routerPath?: string;

	@state()
	private _activePath = '';

	private _workspaceContext?: typeof UMB_DOCUMENT_BLUEPRINT_WORKSPACE_CONTEXT.TYPE;

	private _tabsStructureHelper = new UmbContentTypeContainerStructureHelper<any>(this);

	constructor() {
		super();

		this._tabsStructureHelper.setIsRoot(true);
		this._tabsStructureHelper.setContainerChildType('Tab');
		this.observe(
			this._tabsStructureHelper.mergedContainers,
			(tabs) => {
				this._tabs = tabs;
				this._createRoutes();
			},
			null,
		);

		// _hasRootProperties can be gotten via _tabsStructureHelper.hasProperties. But we do not support root properties currently.

		this.consumeContext(UMB_DOCUMENT_BLUEPRINT_WORKSPACE_CONTEXT, (workspaceContext) => {
			this._workspaceContext = workspaceContext;
			this._tabsStructureHelper.setStructureManager(workspaceContext.structure);
			this._observeRootGroups();
		});
	}

	private _observeRootGroups() {
		if (!this._workspaceContext) return;

		this.observe(
			this._workspaceContext.structure.hasRootContainers('Group'),
			(hasRootGroups) => {
				this._hasRootGroups = hasRootGroups;
				this._createRoutes();
			},
			'_observeGroups',
		);
	}

	private _createRoutes() {
		if (!this._tabs || !this._workspaceContext) return;
		const routes: UmbRoute[] = [];

		if (this._tabs.length > 0) {
			this._tabs?.forEach((tab) => {
				const tabName = tab.name ?? '';
				routes.push({
					path: `tab/${encodeFolderName(tabName).toString()}`,
					component: () => import('./document-blueprint-workspace-view-edit-tab.element.js'),
					setup: (component) => {
						(component as UmbDocumentBlueprintWorkspaceViewEditTabElement).containerId = tab.id;
					},
				});
			});
		}

		if (this._hasRootGroups) {
			routes.push({
				path: '',
				component: () => import('./document-blueprint-workspace-view-edit-tab.element.js'),
				setup: (component) => {
					(component as UmbDocumentBlueprintWorkspaceViewEditTabElement).containerId = null;
				},
			});
		}

		if (routes.length !== 0) {
			routes.push({
				path: '',
				redirectTo: routes[0]?.path,
			});
		}

		this._routes = routes;
	}

	render() {
		if (!this._routes || !this._tabs) return;
		return html`
			<umb-body-layout header-fit-height>
				${this._routerPath && (this._tabs.length > 1 || (this._tabs.length === 1 && this._hasRootGroups))
					? html` <uui-tab-group slot="header">
							${this._hasRootGroups && this._tabs.length > 0
								? html`
										<uui-tab
											label="Content"
											.active=${this._routerPath + '/' === this._activePath}
											href=${this._routerPath + '/'}
											>Content</uui-tab
										>
									`
								: ''}
							${repeat(
								this._tabs,
								(tab) => tab.name,
								(tab) => {
									const path = this._routerPath + '/tab/' + encodeFolderName(tab.name || '');
									return html`<uui-tab label=${tab.name ?? 'Unnamed'} .active=${path === this._activePath} href=${path}
										>${tab.name}</uui-tab
									>`;
								},
							)}
						</uui-tab-group>`
					: ''}

				<umb-router-slot
					.routes=${this._routes}
					@init=${(event: UmbRouterSlotInitEvent) => {
						this._routerPath = event.target.absoluteRouterPath;
					}}
					@change=${(event: UmbRouterSlotChangeEvent) => {
						this._activePath = event.target.absoluteActiveViewPath || '';
					}}>
				</umb-router-slot>
			</umb-body-layout>
		`;
	}

	static styles = [
		UmbTextStyles,
		css`
			:host {
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}
		`,
	];
}

export default UmbDocumentBlueprintWorkspaceViewEditElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-document-blueprint-workspace-view-edit': UmbDocumentBlueprintWorkspaceViewEditElement;
	}
}