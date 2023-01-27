import { LitElement, html } from 'lit';
import styles from './styles';


export class CharactersCard extends LitElement {

    static get styles() {
        return styles
    }


    static get properties() {
        return {
            data: { type: Object }
        }
    }

    constructor() {
        super();
        this.isLoading = true;
        this.data = {}
    }

    onCardClick() {
        this.dispatchEvent(new CustomEvent('card-selected', { detail: this.data.id }))
    }

    render() {

        const { status, name, species, originName, locationName, image } = this.data;

        return html`
        <div class="wrapper-card" @click=${this.onCardClick}>
            <img  src="${image}" alt="${name}" width="150px"/>
            <div class="description-wrapper">

            <div class="flex-row">
                <span class="status ${status}"></span>
                <h3>${name}</h3>
            </div>
            <div class="info-wrapper">

            <div class="flex-row description">
                <h3>Specie:</h3>
                <span>${species}</span>
            </div>
            <div class="flex-row description">
                <h3>Origin:</h3>
                <span>${originName}</span>
            </div>
            <div class="flex-row description">
                <h3>Location:</h3>
                <span>${locationName}</span>
            </div>
            </div>
            </div>
        </div>
        `;
    }

}

window.customElements.define('characters-card', CharactersCard);
