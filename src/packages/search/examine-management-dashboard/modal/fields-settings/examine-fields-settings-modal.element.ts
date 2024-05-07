import type {
	UmbExamineFieldsSettingsModalData,
	UmbExamineFieldsSettingsModalValue,
	FieldSettingsType,
} from './examine-fields-settings-modal.token.js';
import { html, css, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { UmbModalBaseElement } from '@umbraco-cms/backoffice/modal';

@customElement('umb-examine-fields-settings-modal')
export class UmbExamineFieldsSettingsModalElement extends UmbModalBaseElement<
	UmbExamineFieldsSettingsModalData,
	UmbExamineFieldsSettingsModalValue
> {
	render() {
		return html`<umb-body-layout headline=${this.localize.term('examineManagement_fields')}>
			<uui-scroll-container id="field-settings"> ${this.#renderFields()} </uui-scroll-container>
			<div slot="actions">
				<uui-button look="primary" label="Close sidebar" @click="${this._submitModal}">Close</uui-button>
			</div>
		</umb-body-layout>`;
	}

	#setExposed(fieldSetting: FieldSettingsType) {
		const newField: FieldSettingsType = { ...fieldSetting, exposed: !fieldSetting.exposed };

		const updatedFields =
			this.modalContext?.getValue().fields.map((field) => {
				if (field.name === fieldSetting.name) return newField;
				else return field;
			}) ?? [];

		this.modalContext?.updateValue({ fields: updatedFields });
	}

	#renderFields() {
		if (!this.value.fields.length) return;
		return html`<span>
			${Object.values(this.value.fields).map((field) => {
				return html`<uui-toggle
						name="${field.name}"
						label="${field.name}"
						.checked="${field.exposed}"
						@change="${() => this.#setExposed(field)}"></uui-toggle>
					<br />`;
			})}
		</span>`;
	}

	static styles = [
		UmbTextStyles,
		css`
			:host {
				display: relative;
			}

			uui-scroll-container {
				overflow-y: scroll;
				max-height: 100%;
				min-height: 0;
				flex: 1;
			}
		`,
	];
}

export default UmbExamineFieldsSettingsModalElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-examine-fields-settings-modal': UmbExamineFieldsSettingsModalElement;
	}
}
