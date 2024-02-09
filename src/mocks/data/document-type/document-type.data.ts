import { CompositionTypeModel } from '@umbraco-cms/backoffice/external/backend-api';
import type {
	DocumentTypeItemResponseModel,
	DocumentTypeResponseModel,
	DocumentTypeTreeItemResponseModel,
} from '@umbraco-cms/backoffice/external/backend-api';

type UmbMockDocumentTypeModelHack = DocumentTypeResponseModel &
	DocumentTypeTreeItemResponseModel &
	DocumentTypeItemResponseModel;

export interface UmbMockDocumentTypeModel extends Omit<UmbMockDocumentTypeModelHack, 'type'> {}

export const data: Array<UmbMockDocumentTypeModel> = [
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'all-property-editors-document-type-id',
		alias: 'blogPost',
		name: 'All property editors document type',
		description: null,
		icon: 'icon-item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: '1',
				container: {
					id: 'all-properties-group-key',
				},
				alias: 'richTextEditor',
				name: 'Rich Text editor',
				description: 'Some description to test with a long description.',
				dataType: {
					id: 'dt-richTextEditor',
				},
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '2',
				container: {
					id: 'all-properties-group-key',
				},
				alias: 'colorPicker',
				name: 'Color Picker',
				description: '',
				dataType: {
					id: 'dt-colorPicker',
				},
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 1,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '3',
				container: {
					id: 'all-properties-group-key',
				},
				alias: 'contentPicker',
				name: 'Content Picker',
				description: '',
				dataType: {
					id: 'dt-contentPicker',
				},
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 2,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '4',
				container: { id: 'all-properties-group-key' },
				alias: 'eyeDropper',
				name: 'Eye Dropper',
				description: '',
				dataType: { id: 'dt-eyeDropper' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 3,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '5',
				container: { id: 'all-properties-group-key' },
				alias: 'multiUrlPicker',
				name: 'Multi URL Picker',
				description: '',
				dataType: { id: 'dt-multiUrlPicker' },
				variesByCulture: true,
				variesBySegment: false,
				sortOrder: 4,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '6',
				container: { id: 'all-properties-group-key' },
				alias: 'multiNodeTreePicker',
				name: 'Multi Node Tree Picker',
				description: '',
				dataType: { id: 'dt-multiNodeTreePicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 5,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '7',
				container: { id: 'all-properties-group-key' },
				alias: 'datePicker',
				name: 'Date Picker',
				description: '',
				dataType: { id: 'dt-datePicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 6,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '7b',
				container: { id: 'all-properties-group-key' },
				alias: 'datePicker-b',
				name: 'Date Picker With Time',
				description: '',
				dataType: { id: 'dt-datePicker-time' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 7,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '8',
				container: { id: 'all-properties-group-key' },
				alias: 'email',
				name: 'Email',
				description: '',
				dataType: { id: 'dt-email' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 9,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '9',
				container: { id: 'all-properties-group-key' },
				alias: 'textBox',
				name: 'Text Box',
				description: '',
				dataType: { id: 'dt-textBox' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 10,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '19',
				container: { id: 'all-properties-group-key' },
				alias: 'dropdown',
				name: 'Dropdown',
				description: '',
				dataType: { id: 'dt-dropdown' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 11,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '11',
				container: { id: 'all-properties-group-key' },
				alias: 'textArea',
				name: 'Text Area',
				description: '',
				dataType: { id: 'dt-textArea' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 12,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '12',
				container: { id: 'all-properties-group-key' },
				alias: 'slider',
				name: 'Slider',
				description: '',
				dataType: { id: 'dt-slider' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 13,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '13',
				container: { id: 'all-properties-group-key' },
				alias: 'toggle',
				name: 'Toggle',
				description: '',
				dataType: { id: 'dt-toggle' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 14,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '14',
				container: { id: 'all-properties-group-key' },
				alias: 'tags',
				name: 'Tags',
				description: '',
				dataType: { id: 'dt-tags' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 15,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '15',
				container: { id: 'all-properties-group-key' },
				alias: 'markdownEditor',
				name: 'MarkdownEditor',
				description: '',
				dataType: { id: 'dt-markdownEditor' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 16,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '16',
				container: { id: 'all-properties-group-key' },
				alias: 'radioButtonList',
				name: 'Radio Button List',
				description: '',
				dataType: { id: 'dt-radioButtonList' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 17,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '17',
				container: { id: 'all-properties-group-key' },
				alias: 'checkboxList',
				name: 'Checkbox List',
				description: '',
				dataType: { id: 'dt-checkboxList' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 18,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '18',
				container: { id: 'all-properties-group-key' },
				alias: 'blockList',
				name: 'Block List',
				description: '',
				dataType: { id: 'dt-blockList' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: -2,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '19',
				container: { id: 'all-properties-group-key' },
				alias: 'mediaPicker',
				name: 'Media Picker',
				description: '',
				dataType: { id: 'dt-mediaPicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 20,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '20',
				container: { id: 'all-properties-group-key' },
				alias: 'imageCropper',
				name: 'Image Cropper',
				description: '',
				dataType: { id: 'dt-imageCropper' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 21,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '21',
				container: { id: 'all-properties-group-key' },
				alias: 'uploadField',
				name: 'Upload Field',
				description: '',
				dataType: { id: 'dt-uploadField' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 22,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '22',
				container: { id: 'all-properties-group-key' },
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataType: { id: 'dt-blockGrid' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: -1,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '23',
				container: { id: 'all-properties-group-key' },
				alias: 'iconPicker',
				name: 'Icon Picker',
				description: '',
				dataType: { id: 'dt-iconPicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 24,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '27',
				container: { id: 'all-properties-group-key' },
				alias: 'label',
				name: 'Label',
				description: '',
				dataType: { id: 'dt-label' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 25,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '28',
				container: { id: 'all-properties-group-key' },
				alias: 'integer',
				name: 'Integer',
				description: '',
				dataType: { id: 'dt-integer' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 26,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '29',
				container: { id: 'all-properties-group-key' },
				alias: 'decimal',
				name: 'Decimal',
				description: '',
				dataType: { id: 'dt-decimal' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 27,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '30',
				container: { id: 'all-properties-group-key' },
				alias: 'memberPicker',
				name: 'Member Picker',
				description: '',
				dataType: { id: 'dt-memberPicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 29,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '31',
				container: { id: 'all-properties-group-key' },
				alias: 'memberGroupPicker',
				name: 'Member Group Picker',
				description: '',
				dataType: { id: 'dt-memberGroupPicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 30,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '32',
				container: { id: 'all-properties-group-key' },
				alias: 'userPicker',
				name: 'User Picker',
				description: '',
				dataType: { id: 'dt-userPicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 31,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '33',
				container: { id: 'all-properties-group-key' },
				alias: 'staticFilePicker',
				name: 'Static File Picker',
				description: '',
				dataType: { id: 'dt-staticFilePicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 32,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'all-properties-group-key',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'simple-document-type-id',
		alias: 'blogPost',
		name: 'All property editors document type',
		description: null,
		icon: 'umb:item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: '6',
				container: { id: 'all-properties-group-key' },
				alias: 'multiNodeTreePicker',
				name: 'Multi Node Tree Picker',
				description: '',
				dataType: { id: 'dt-multiNodeTreePicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'all-properties-group-key',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [{ documentType: { id: 'simple-document-type-id' }, sortOrder: 0 }],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},

	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: '29643452-cff9-47f2-98cd-7de4b6807681',
		alias: 'blogPost',
		name: 'Page Document Type',
		description: null,
		icon: 'icon-document',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: '5b4ca208-134e-4865-b423-06e5e97adf3c',
				container: { id: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75' },
				alias: 'blogPostText',
				name: 'Blog Post Text',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'ef7096b6-7c9e-49ba-8d49-395111e65ea2',
				container: { id: '227d6ed2-e118-4494-b8f2-deb69854a56a' },
				alias: 'blogTextStringUnderMasterTab',
				name: 'Blog text string under master tab',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: true,
				variesBySegment: false,
				sortOrder: 1,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'e010c429-b298-499a-9bfe-79687af8972a',
				container: { id: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb' },
				alias: 'blogTextStringUnderGroupUnderMasterTab',
				name: 'Blog text string under group under master tab',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: true,
				variesBySegment: false,
				sortOrder: 2,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '1a22749a-c7d2-44bb-b36b-c977c2ced6ef',
				container: { id: '2c943997-b685-432d-a6c5-601d8e7a298a' },
				alias: 'localBlogTabString',
				name: 'Local Blog Tab String',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 3,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: '^[0-9]*$',
					regExMessage: null,
				},
				appearance: {
					labelOnTop: true,
				},
			},
			{
				id: '22',
				container: { id: '2c943997-b685-432d-a6c5-601d8e7a298a' },
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataType: { id: 'dt-blockGrid' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 4,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				parent: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
			{
				id: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				parent: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
			{
				id: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				parent: { id: '227d6ed2-e118-4494-b8f2-deb69854a56a' },
				name: 'Blog Group under master tab',
				type: 'Group',
				sortOrder: 0,
			},
			{
				id: '2c943997-b685-432d-a6c5-601d8e7a298a',
				parent: null,
				name: 'Local blog tab',
				type: 'Tab',
				sortOrder: 1,
			},
		],
		allowedDocumentTypes: [
			{
				documentType: { id: '29643452-cff9-47f2-98cd-7de4b6807681' },
				sortOrder: 0,
			},
		],
		compositions: [
			{
				documentType: { id: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d' },
				compositionType: CompositionTypeModel.INHERITANCE,
			},
			{
				documentType: { id: '5035d7d9-0a63-415c-9e75-ee2cf931db92' },
				compositionType: CompositionTypeModel.COMPOSITION,
			},
		],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [{ id: '916cfecc-3295-490c-a16d-c41fa9f72980' }],
		defaultTemplate: {
			id: '916cfecc-3295-490c-a16d-c41fa9f72980',
		},
		id: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
		alias: 'masterPage',
		name: 'Master Page',
		description: null,
		icon: 'icon-document',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: '5e5f7456-c751-4846-9f2b-47965cc96ec6',
				container: { id: '6f281e5a-0242-4649-bd9e-d6bf87f92b41' },
				alias: 'masterText',
				name: 'Master text',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '6f281e5a-0242-4649-bd9e-d6bf87f92b41',
				parent: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
		alias: 'baseElementType',
		name: 'Base Element Type',
		description: null,
		icon: 'icon-lab',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: 'b92de6ac-1a22-4a45-a481-b6cae1cccbbf',
				container: { id: '1e845ca8-1e3e-4b03-be1d-0b4149ce2129' },
				alias: 'pageTitle',
				name: 'Page title',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '1e845ca8-1e3e-4b03-be1d-0b4149ce2129',
				parent: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: '4f68ba66-6fb2-4778-83b8-6ab4ca3a7c5c',
		alias: 'simpleElementType',
		name: 'Simple Element Type',
		description: null,
		icon: 'icon-lab',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: 'b92de6ac-1a22-4a45-a481-b6cae1cccbb0',
				container: { id: '1e845ca8-1e3e-4b03-be1d-0b4149ce2120' },
				alias: 'elementProperty',
				name: 'Element property',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '1e845ca8-1e3e-4b03-be1d-0b4149ce2120',
				parent: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [
			{
				id: '2bf464b6-3aca-4388-b043-4eb439cc2643',
			},
			{
				id: '9a84c0b3-03b4-4dd4-84ac-706740ac0f71',
			},
			{
				id: '9a84c0b3-03b4-4dd4-84ac-706740ac0f72',
			},
		],
		defaultTemplate: { id: '2bf464b6-3aca-4388-b043-4eb439cc2643' },
		id: 'simple-document-type-key',
		alias: 'simpleDocumentType',
		name: 'Simple Document Type',
		description: null,
		icon: 'icon-document',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: '1680d4d2-cda8-4ac2-affd-a69fc10382b1',
				container: { id: '341b8521-fd43-4333-ae7a-a10cbbc6f4b0' },
				alias: 'prop1',
				name: 'Prop 1',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '341b8521-fd43-4333-ae7a-a10cbbc6f4b0',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [
			{ documentType: { id: 'simple-document-type-key' }, sortOrder: 0 },
			{ documentType: { id: 'simple-document-type-2-key' }, sortOrder: 0 },
		],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'simple-document-type-2-key',
		alias: 'simpleDocumentType2',
		name: 'Simple Document Type 2',
		description: null,
		icon: 'icon-document',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		hasChildren: false,
		parent: null,
		isFolder: false,
		properties: [
			{
				id: '82d4b050-b128-42fe-ac8e-d5586e533592',
				container: { id: 'b275052a-1868-4901-bc8c-2b35b78a9ab2' },
				alias: 'prop1',
				name: 'Prop 1',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 0,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'beadc69a-d669-4d01-9919-98bafba31e57',
				container: { id: 'b275052a-1868-4901-bc8c-2b35b78a9ab2' },
				alias: 'prop2',
				name: 'Prop 2',
				description: null,
				dataType: { id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 1,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'b275052a-1868-4901-bc8c-2b35b78a9ab2',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedDocumentTypes: [{ documentType: { id: 'simple-document-type-key' }, sortOrder: 0 }],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'folder-umbraco-demo-blocks-id',
		alias: 'folderUmbracoDemoBlocks',
		name: 'Umbraco Demo Blocks',
		description: null,
		icon: 'icon-folder',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		hasChildren: true,
		parent: null,
		isFolder: true,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [],
		containers: [],
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'coffee-umbraco-demo-block-id',
		alias: 'coffeeUmbracoDemoBlock',
		name: 'Favorite Coffee',
		description: null,
		icon: 'icon-coffee',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: { id: 'folder-umbraco-demo-blocks-id' },
		isFolder: false,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [
			{
				id: 'coffee-name-id',
				container: { id: 'coffee-content-group-key' },
				alias: 'coffeeName',
				name: 'Name of Coffee',
				description: '',
				dataType: { id: 'dt-textBox' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 10,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'coffee-size-id',
				container: { id: 'coffee-content-group-key' },
				alias: 'coffeeSize',
				name: 'Amount (deciliter)',
				description: '',
				dataType: { id: 'dt-integer' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 10,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'coffee-content-group-key',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'headline-umbraco-demo-block-id',
		alias: 'headlineUmbracoDemoBlock',
		name: 'Headline',
		description: null,
		icon: 'icon-edit',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: { id: 'folder-umbraco-demo-blocks-id' },
		isFolder: false,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [
			{
				id: 'headline-id',
				container: { id: 'headline-content-group-key' },
				alias: 'headline',
				name: 'Headline',
				description: '',
				dataType: { id: 'dt-textBox' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 10,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'headline-content-group-key',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'image-umbraco-demo-block-id',
		alias: 'imageUmbracoDemoBlock',
		name: 'Image',
		description: null,
		icon: 'icon-picture',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: { id: 'folder-umbraco-demo-blocks-id' },
		isFolder: false,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [
			{
				id: 'image-id',
				container: { id: 'image-content-group-key' },
				alias: 'image',
				name: 'Image',
				description: '',
				dataType: { id: 'dt-mediaPicker' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 10,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'image-content-group-key',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'rich-text-umbraco-demo-block-id',
		alias: 'richTextUmbracoDemoBlock',
		name: 'Rich Text',
		description: null,
		icon: 'icon-diploma',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: { id: 'folder-umbraco-demo-blocks-id' },
		isFolder: false,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [
			{
				id: 'rich-text-id',
				container: { id: 'rich-text-content-group-key' },
				alias: 'richText',
				name: 'Text',
				description: '',
				dataType: { id: 'dt-richTextEditor' },
				variesByCulture: false,
				variesBySegment: false,
				sortOrder: 10,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'rich-text-content-group-key',
				parent: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'two-column-layout-umbraco-demo-block-id',
		alias: 'twoColumnLayoutUmbracoDemoBlock',
		name: 'Two Column Layout',
		description: null,
		icon: 'icon-book-alt',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: {
			id: 'folder-umbraco-demo-blocks-id',
		},
		isFolder: false,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [],
		containers: [],
	},
	{
		allowedTemplates: [],
		defaultTemplate: null,
		id: 'test-block-id',
		alias: 'testBlock',
		name: 'Test broken group key',
		description: null,
		icon: 'icon-war',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		hasChildren: false,
		parent: null,
		isFolder: false,
		allowedDocumentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
		properties: [],
		containers: [],
	},
];
