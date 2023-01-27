import { LitElement, html } from 'lit';

import { ButtonPagination } from '../button-pagination/button-pagination';
import styles from './styles';


export class PaginationComponent extends LitElement {

    static get styles() {
        return styles
    }


    static get properties() {
        return {
            pageNumber: { type: Number },
            seletedPage: { type: Number }
        }
    }

    constructor() {
        super();
        this.pageNumber = 1;
        this.seletedPage = 1;
    }


    buttonClicked(e) {
        this.dispatchEvent(new CustomEvent('change-character-page', {
            detail: e.detail,
        }))
    }

    renderPaginators() {
        const buttons = [];
        for (let i = 1; i < this.pageNumber + 1; i++) {
            buttons.push(html`<button-pagination .value=${i} @clickButton=${this.buttonClicked} .isSeleted=${i === this.seletedPage}  ></button-pagination>`)
        }
        return buttons;
    }


    render() {
        return html`
        <div class="pagination-wrapper">
            <button-pagination .value=${"<<"} @clickButton=${this.buttonClicked} .isSpecial=${true}></button-pagination>
            <button-pagination .value=${"<"} @clickButton=${this.buttonClicked} .isSpecial=${true}></button-pagination>

            <div class="numbers-wrapper">
                ${this.renderPaginators()}
            </div>
            <button-pagination .value=${">"} @clickButton=${this.buttonClicked} .isSpecial=${true}></button-pagination>
            <button-pagination .value=${">>"} @clickButton=${this.buttonClicked} .isSpecial=${true}></button-pagination>
        </div>
        `;
    }

}

window.customElements.define('pagination-component', PaginationComponent);
window.customElements.define('button-pagination', ButtonPagination);
