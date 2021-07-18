class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _collectHeader(token) {
    return {
      ...this._headers,
      'Authorization': `Bearer ${token}`
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  authorization(token) {

    return fetch(`${this._baseUrl}/users/me `, {
      method: 'GET',
      headers: this._collectHeader(token)
    })
      .then(this._checkResponse);
  }

  login(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  setUserInfo(data, token) {

    return fetch(`${this._baseUrl}/users/me `, {
      method: 'PATCH',
      headers: this._collectHeader(token),
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._collectHeader(token)
    })
      .then(this._checkResponse);
  }

  addMovies(data, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._collectHeader(token),
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  removeMovies(id, token) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._collectHeader(token)
    })
      .then(this._checkResponse);
  }

}

const mainApi = new MainApi({
  baseUrl: 'https://api.diplomayp.nomoredomains.club',
  headers: {
    "Content-Type": "application/json"
  }
});

export default mainApi;