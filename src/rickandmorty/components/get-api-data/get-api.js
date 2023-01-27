export default class GetApiData {

    constructor() {

        this.url = 'https://rickandmortyapi.com/api/character/'
        this.method = 'GET'
    }

    /**
     * Hacemos el llamado a la api de rick and morty
     */
    async getAllCharacters(url, method) {
        if (!url) return;

        //Setea que esta cargado la API

        this.isLoading = true;

        //hacemos el llamado al api
        const response = await fetch(url, { method: method })
            .then(res => res.ok && res)
            .then(res => {

                const response = res.json();

                //Disparamos el evento
                window.dispatchEvent(new CustomEvent('get-all-characters', {
                    bubbles: true,
                    detail: response
                }))

                //Reentornamos el valor buscado
                return response;
            })
            .catch(err => console.error('Error al consultar', err))

        return response;
    }


    async getSingleCharacter(id) {
        if (!id) return;

        //Setea que esta cargado la API

        this.isLoading = true;

        //hacemos el llamado al api
        const response = await fetch(this.url + id, { method: this.method })
            .then(res => res.ok && res)
            .then(res => {

                const response = res.json();

                //Disparamos el evento
                window.dispatchEvent(new CustomEvent('get-single-character', {
                    bubbles: true,
                    detail: response
                }))

                //Reentornamos el valor buscado
                return response;
            })
            .catch(err => console.error('Error al consultar', err))

        return response;
    }


    async getEpisodes(url) {
        if (!url) return;

        //Setea que esta cargado la API

        this.isLoading = true;

        //hacemos el llamado al api
        const response = await fetch(url, { method: this.method })
            .then(res => res.ok && res)
            .then(res => {

                const response = res.json();

                //Disparamos el evento
                window.dispatchEvent(new CustomEvent('get-single-episodes', {
                    bubbles: true,
                    detail: response
                }))

                //Reentornamos el valor buscado
                return response;
            })
            .catch(err => console.error('Error al consultar', err))

        return response;
    }
}
