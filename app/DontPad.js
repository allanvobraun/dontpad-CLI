
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = class DontPad {
    //propriedades e funções da classe aqui
    constructor(repositorio) {
        this.repositorio = repositorio;
        this.url = `http://dontpad.com/${this.repositorio}`
    }

    async write(text) {
        const  params = {
            params: {"text": text}
        }
        let response = await axios.post(this.url, null, params);
        return response;
    }

    async read() {
        let response = await axios(this.url).catch((err) => console.log(err));
        const html = response.data;

        const $ = cheerio.load(html);
        const textarea = $('#text');
        return textarea.html();
    }
}