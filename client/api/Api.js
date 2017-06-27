class Api {
	constructor(url) {
		this.baseUrl = 'http://190.210.188.249/api';
		this.url =  this.baseUrl + url;
	}

	query() {
		return fetch(this.url + '?limit=10', {
      method: 'get'
    }).then((response) => response.json());
	}

	get(id) {
		return fetch(this.url + '/' + id, {
      method: 'get'
    }).then((response) => response.json());
	}
}

export default Api;