import { LitElement, html } from 'lit';


import GetApiData from '../get-api-data/get-api';
import styles from './styles';

import ModalDetails from '../modal-details/modal-details';

export class App extends LitElement {
    static get styles() {
        return styles;
    }


    static get properties() {
        return {
            /**
             * general App state
             * @type {Object}
             */
            state: { type: Object },
            /**
             * general App Loading
             * @type {boolean}
             */
            isLoading: { type: Boolean },

            isModalOpen: { type: Boolean },
            CaracterSelectedId: { type: Number },
            modalLoading: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.GetApiData = new GetApiData();
        this.state = {
            characters: [],
            paginationValues: {},
            characterSelectedInfo: {},
            episodesList: [],

            selectedPage: 1,
        };
        //Valida si se inicio la app con un botón
        this.isStartedApp = false;

        this.isModalOpen = false;
        this.modalLoading = false;
        this.CaracterSelectedId = 1;



        this.isLoading = true;
        this.url = 'https://rickandmortyapi.com/api/character';
        this.method = 'GET';
    }

    _getConsultApi(url, method, page) {
        this.isLoading = true;

        this.GetApiData.getAllCharacters(url, method)
            .then((res) => {
                //Enviamos la informacion de los personajes
                this.state.characters = res.results.map((caracter) => ({
                    id: caracter.id,
                    status: caracter.status,
                    name: caracter.name,
                    image: caracter.image,
                    species: caracter.species,
                    originName: caracter.origin.name,
                    locationName: caracter.location.name
                }));

                //Enviamos la informacion para la paginación
                this.state.paginationValues = res.info;
                this.state.selectedPage = page || 1;
                this.isLoading = false;
            });
    }

    _getSingleCharacter(id) {
        this.modalLoading = true;

        this.GetApiData.getSingleCharacter(id)
            .then((res) => {
                //Enviamos la informacion de los personajes
                console.log(res);
                this.modalLoading = false;
                this._getEpisodes(res.episode)
                this.state.characterSelectedInfo = res;
            });
    }



    async _getEpisodes(episode) {
        // eslint-disable-next-line no-undef
        let episodes = await Promise.all(episode.map(async (episode) => {
            return await this.GetApiData.getEpisodes(episode).then(({ id, name, air_date, episode }) => ({ id, air_date, episode, name }));
        }));
        this.state.episodesList = episodes;
        return episodes;
    }



    _getChangePage(e) {
        //Iniciamos las variables necesarias;
        let newUrl = this.url;
        let page = e.detail;

        //Transformo la url para obtener la pagina especifica
        switch (e.detail) {


            case ">>":
                //Tranformamos las variables
                newUrl += `/?page=${this.state.paginationValues.pages}`;
                page = this.state.paginationValues.pages;
                //Hace la consulta a la api
                this._getConsultApi(newUrl, this.method, page);
                return;


            case ">":
                if (this.state.selectedPage < this.state.paginationValues.pages) {
                    //Tranformamos las variables
                    newUrl += `/?page=${this.state.selectedPage + 1}`;
                    page = this.state.selectedPage + 1;
                    //Hace la consulta a la api
                    this._getConsultApi(newUrl, this.method, page);
                }
                return;


            case "<<":
                //Tranformamos las variables
                newUrl += `/?page=1`;
                page = 1;
                //Hace la consulta a la api
                this._getConsultApi(newUrl, this.method, page);
                return;


            case "<":
                if (this.state.selectedPage > 1) {
                    //Tranformamos las variables
                    newUrl += `/?page=${this.state.selectedPage - 1}`;
                    page = this.state.selectedPage - 1;
                    //Hace la consulta a la api
                    this._getConsultApi(newUrl, this.method, page);
                }
                return;


            default:
                newUrl += `/?page=${e.detail}`;
                //Hacemos la consulta
                this._getConsultApi(newUrl, this.method, page);
                return;
        }

    }

    onNavigationInit() {
        //cargamos los datos de la api
        this._getConsultApi(this.url, this.method);
        this.isStartedApp = true;
    }

    onCardClick(e) {
        //Abrimos el modal
        this._openModal(e.detail)
    }

    _openModal(id) {
        this._getSingleCharacter(id)
        this.CaracterSelectedId = id;
        this.isModalOpen = true;
    }

    _closeModal() {
        this.isModalOpen = false;
    }

    render() {

        return html`
        <modal-detail 
        .isOpen=${this.isModalOpen} 
        .isLoading=${this.modalLoading} 
        .characterId=${this.CaracterSelectedId} 
        .episodesList=${this.state.episodesList} 
        .data=${this.state.characterSelectedInfo} 
        @modal-close=${this._closeModal}
        >
        </modal-detail>

        <div class="wrapper-list">

            <div class="character-list">
                ${this.isLoading
                ? html`<div class="loaderWrapper">
                    ${this.isStartedApp
                        ? html`<span class="loader"></span>`
                        : html`<button class="button" @click=${this.onNavigationInit}>Iniciar Navegación</button>`
                    }
                    </div>`
                : html`${this.state.characters.map((data) => html`<characters-card .data=${data} @card-selected=${this.onCardClick}></characters-card>`)}`
            }
            </div>

            <pagination-component @change-character-page=${this._getChangePage} .pageNumber=${this.state.paginationValues.pages} .seletedPage=${this.state.selectedPage}></pagination-component>
        </div>
        `;
    }

}

window.customElements.define('app-create', App);
window.customElements.define('modal-detail', ModalDetails);