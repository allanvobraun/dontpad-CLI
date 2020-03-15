const axios = require('axios');
const cheerio = require('cheerio');

module.exports = class DontPad {

    constructor(repositorio) {
        this.repositorio = repositorio;
        this.url = `http://dontpad.com/${this.repositorio}`
        this._separator = `\n`
    }

    /**
     * @param {string} separator
     */
    set separator(separator) {
        this._separator = separator;
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

    async append(text) {
        let page_text = await this.read();
        let final_text = page_text + this._separator + text;
        let response = await this.write(final_text);
        return response;
    }
}