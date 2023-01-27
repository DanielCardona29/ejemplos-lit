import { LitElement, html } from 'lit';
import styles from './styles';


export default class ModalDetails extends LitElement {

    static get styles() {
        return styles
    }


    static get properties() {
        return {
            characterId: { type: Number },
            isOpen: { type: Boolean },
            isLoading: { type: Boolean },
            data: { type: Object },
            episodesList: { type: Array }

        }
    }

    constructor() {
        super();

        this.characterId = 0;
        this.isOpen = true;
        this.isLoading = false;
        this.data = {}
        this.episodesList = [];
    }


    onClick() {
        this.dispatchEvent(new CustomEvent('clickButton', {
            detail: this.value
        }));
    }


    mapData(data) {
        const elementosHTML = [];
        for (const key in data) {
            if (data.hasOwnProperty.call(data, key)) {
                let element = data[key];


                if (typeof element !== 'object' && !(key === 'image' || key === 'url')) {

                    switch (key) {
                        //Transformo la fecha
                        case 'created':
                            element = new Date(element).toDateString()
                            break;
                        default:
                            element = element ? element : 'No data'
                            break;
                    }
                    elementosHTML.push(html`<div class="detail"><h3>${key}: </h3><span>${element}</span></div>`)
                }
            }
        }
        return elementosHTML;
    }

    mapEpisodes() {
        return this.episodesList.map((episode) => {
            console.log(episode)
            return html`<div class="episode"><span class="resalted">Name: </span><span>${episode.name}</span> <span class="resalted">Air Date: </span><span>${episode.air_date}</span> <span class="resalted">Episode: </span><span>${episode.episode}</span></div>`
        });
    }

    getModalContent() {

        return this.isLoading === true
            ? html`<span class="loader"></span>`
            : html`<div class="poke-info-wrapper" slot="poke-info">
                        <img src="${this.data.image}" alt="alt-name" width="40%">
                        <div class="poke-description">
                            ${this.mapData(this.data)}
                            <div class="detail"><h3>Origin: </h3><span>${this.data.origin.name}</span></div>
                            <div class="detail"><h3>Origin: </h3><span>${this.data.location.name}</span></div>

                            <div class="detail-episodes">
                                <h2>Episodes List</h2>
                                ${this.mapEpisodes()}
                            </div>
                        </div>


         
                    </div>`
    }

    closeModal() {
        this.dispatchEvent(new CustomEvent('modal-close', {
            detail: true
        }));
    }

    render() {

        return html`   
        <section class="modal" id="modal" style="${!this.isOpen ? 'display: none;' : ''}">
            <div class="horizontal"  @click=${this.closeModal}></div>
                <div class="wrapper">
                    <div class="vertical"  @click=${this.closeModal}></div>
                    <div class="content">
                        <!-- Boton de cerrar el modal -->
                        <span class="close-button" id="close-button" @click=${this.closeModal}>X</span>

                        <div class="wrapper-content" id="wrapper-content">
                            <!-- Spinner -->
                            ${this.getModalContent()}
                        </div>
                    </div>
                    <div class="vertical"  @click=${this.closeModal}></div>
                </div>
            <div class="horizontal"  @click=${this.closeModal}></div>
        </section>`;
    }

}