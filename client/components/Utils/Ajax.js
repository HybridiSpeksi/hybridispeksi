const URL_PREFIX = '/api';

module.exports = {
    

    /**
     * Send POST request
     * @param url
     * @param data, JSON
     * @param callback
     * @return promise
     */
    sendPost: function(url, data) {
        return new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('jwt')
                },
                body: JSON.stringify(data)
            })
            .catch(err => {
                reject(Error(err));
            })
            .then(data => {
                resolve(data.json());
            })
        })
    },

    sendGet: function(url, callback) {
        return new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('jwt')
                }
            })
            .catch(err => {
                reject(Error(err));
            })
            .then(data => {
                resolve(data.json());
            })
        })
    }


}