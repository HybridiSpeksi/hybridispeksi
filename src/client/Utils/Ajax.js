const URL_PREFIX = '/api';

module.exports = {
  /**
   * Send POST request
   * @param url
   * @param data, JSON
   * @param callback
   * @return promise
   */
  async sendPost(url, data) {
    try {
      const res = await fetch(URL_PREFIX + url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      return json;
    } catch (err) {
      return err;
    }
    // Old promise call
    /* return new Promise((resolve, reject) => {
      fetch(URL_PREFIX + url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
        body: JSON.stringify(data),
      })
        .catch((err) => {
          reject(Error(err));
        })
        .then((data) => {
          resolve(data.json());
        });
    }); */
  },

  async sendGet(url) {
    try {
      const res = await fetch(URL_PREFIX + url, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
      });
      const json = await res.json();
      return json;
    } catch (err) {
      return err;
    }
    //   Old promise call
    /* return new Promise((resolve, reject) => {
      fetch(URL_PREFIX + url, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
      })
        .catch((err) => {
          reject(Error(err));
        })
        .then((data) => {
          resolve(data.json());
        });
    }); */
  },

  async sendPut(url, data) {
    try {
      const res = await fetch(URL_PREFIX + url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      return json;
    } catch (err) {
      return err;
    }
    /* return new Promise((resolve, reject) => {
      fetch(URL_PREFIX + url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
        body: JSON.stringify(data),
      })
        .catch((err) => {
          reject(Error(err));
        })
        .then((data) => {
          resolve(data.json());
        });
    }); */
  },

  async sendDelete(url) {
    try {
      const res = await fetch(URL_PREFIX + url, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
      });
      const json = await res.json();
      return json;
    } catch (err) {
      return err;
    }
    /* return new Promise((resolve, reject) => {
      fetch(URL_PREFIX + url, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('jwt'),
        },
      })
        .catch((err) => {
          reject(Error(err));
        })
        .then((data) => {
          resolve(data.json());
        });
    }); */
  },
};
