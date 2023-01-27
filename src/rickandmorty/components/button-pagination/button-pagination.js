import { LitElement, html } from 'lit';
import styles from './styles';


export class ButtonPagination extends LitElement {

    static get styles() {
        return styles
    }


    static get properties() {
        return {
            value: {},
            isSeleted: { type: Boolean },
            isSpecial: { type: Boolean }

        }
    }

    constructor() {
        super();
        this.value = 0;
    }


    onClick() {
        this.dispatchEvent(new CustomEvent('clickButton', {
            detail: this.value
        }));
    }


    render() {
        return html`<button class="button  ${this.isSpecial && 'special'} ${this.isSeleted && 'selected'}" @click=${this.onClick}>${this.value}</button>`;
    }

}