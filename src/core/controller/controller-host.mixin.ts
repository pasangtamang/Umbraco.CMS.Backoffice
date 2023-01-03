import type { HTMLElementConstructor } from '../models';
import { UmbControllerInterface } from './controller.interface';

export declare class UmbControllerHostInterface extends HTMLElement {
    //#controllers:UmbController[];
	//#attached:boolean;
	addController(controller:UmbControllerInterface): void;
	removeController(controller:UmbControllerInterface): void;
}

/**
 * This mixin enables the component to host controllers.
 * This is done by calling the `consumeContext` method.
 *
 * @param {Object} superClass - superclass to be extended.
 * @mixin
 */
export const UmbControllerHostMixin = <T extends HTMLElementConstructor>(superClass: T) => {
	class UmbContextConsumerClass extends superClass {

		#controllers: UmbControllerInterface[] = [];

		#attached = false;

		/**
		 * Append a controller to this element.
		 * @param {UmbControllerInterface} ctrl
		 */
		addController(ctrl: UmbControllerInterface): void {
			this.#controllers.push(ctrl);
            if(this.#attached) {
                ctrl.hostConnected();
            }
		}

		/**
		 * Remove a controller from this element.
		 * @param {UmbControllerInterface} ctrl
		 */
		removeController(ctrl: UmbControllerInterface): void {
			const index = this.#controllers.indexOf(ctrl);
			if(index !== -1) {
				this.#controllers.splice(index, 1);
				if(this.#attached) {
					ctrl.hostDisconnected();
				}
			}
		}

		connectedCallback() {
			super.connectedCallback?.();
			this.#attached = true;
			this.#controllers.forEach((ctrl: UmbControllerInterface) => ctrl.hostConnected());
		}

		disconnectedCallback() {
			super.disconnectedCallback?.();
			this.#attached = false;
			this.#controllers.forEach((ctrl: UmbControllerInterface) => ctrl.hostDisconnected());
		}
	}

	return UmbContextConsumerClass as unknown as HTMLElementConstructor<UmbControllerHostInterface> & T;
};

declare global {
	interface HTMLElement {
		connectedCallback(): void;
		disconnectedCallback(): void;
	}
}