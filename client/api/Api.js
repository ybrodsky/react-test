class Api {
	constructor(url) {
		this.url = 'http://190.210.188.249/api' + url;
	}

	query(url) {
		return fetch(url ? url : this.url, {
      method: 'get'
    }).then((response) => response.json());
	}
}

export default Api;