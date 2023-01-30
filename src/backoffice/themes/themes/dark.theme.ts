import { css } from 'lit';
import { UmbTheme } from '../theme.context';

// TODO: We should get this from UUI, and it should be served through an extension.
const name = 'Dark';
const cssResult = css`
	:root {
		--uui-color-selected: #316dca;
		--uui-color-selected-emphasis: #3e79d0;
		--uui-color-selected-standalone: #5b8dd7;
		--uui-color-selected-contrast: #eeeeef;
		--uui-color-current: #316dca;
		--uui-color-current-emphasis: #3e79d0;
		--uui-color-current-standalone: #5b8dd7;
		--uui-color-current-contrast: #f000;
		--uui-color-disabled: #434c56;
		--uui-color-disabled-standalone: #545d68;
		--uui-color-disabled-contrast: #fcfcfc4d;
		--uui-color-header-surface: #21262e;
		--uui-color-header-contrast: #eeeeef;
		--uui-color-header-contrast-emphasis: #eeeeef;
		--uui-color-focus: #316dca;
		--uui-color-surface: #2d333b;
		--uui-color-surface-alt: #373e47;
		--uui-color-surface-emphasis: #434c56;
		--uui-color-background: #21262e;
		--uui-color-text: #eeeeef;
		--uui-color-text-alt: #eeeeef;
		--uui-color-interactive: #eeeeef;
		--uui-color-interactive-emphasis: #eeeeef;
		--uui-color-border: #434c56;
		--uui-color-border-standalone: #545d68;
		--uui-color-border-emphasis: #626e7b;
		--uui-color-divider: #373e47;
		--uui-color-divider-standalone: #434c56;
		--uui-color-divider-emphasis: #545d68;
		--uui-color-default: #316dca;
		--uui-color-default-emphasis: #316dca;
		--uui-color-default-standalone: #316dca;
		--uui-color-default-contrast: #eeeeef;
		--uui-color-warning: #af7c12;
		--uui-color-warning-emphasis: #af7c12;
		--uui-color-warning-standalone: #af7c12;
		--uui-color-warning-contrast: #eeeeef;
		--uui-color-danger: #ca3b37;
		--uui-color-danger-emphasis: #ca3b37;
		--uui-color-danger-standalone: #ca3b37;
		--uui-color-danger-contrast: #eeeeef;
		--uui-color-positive: #347d39;
		--uui-color-positive-emphasis: #347d39;
		--uui-color-positive-standalone: #347d39;
		--uui-color-positive-contrast: #eeeeef;
	}
`;

export default cssResult.cssText;
