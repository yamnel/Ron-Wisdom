export default class RonSwansonApi {
    static getQuote () {
        return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(response => response.json())
            .catch(err => err)
    }
}