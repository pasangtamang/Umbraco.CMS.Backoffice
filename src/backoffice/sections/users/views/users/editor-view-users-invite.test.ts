import { expect, fixture, html } from '@open-wc/testing';
//TODO: Test has been commented out while we figure out how to setup import maps for the test environment
// import UmbEditorViewUsersInviteElement from './editor-view-users-invite.element';
// import { defaultA11yConfig } from '@umbraco-cms/test-utils';

// describe('UmbEditorViewUsersInviteElement', () => {
// 	let element: UmbEditorViewUsersInviteElement;
// 	beforeEach(async () => {
// 		element = await fixture(html`<umb-editor-view-users-invite></umb-editor-view-users-invite>`);
// 	});

// 	it('is defined with its own instance', () => {
// 		expect(element).to.be.instanceOf(UmbEditorViewUsersInviteElement);
// 	});

// 	it('passes the a11y audit', async () => {
// 		await expect(element).shadowDom.to.be.accessible(defaultA11yConfig);
// 	});
// });