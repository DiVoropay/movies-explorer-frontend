class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);

  }

  getMovies() {

    return fetch(`${this.baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);

  }

}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    "Content-Type": "application/json"
  }
});

export default moviesApi;