import Api from '../../api/Api';

class City extends Api{
	constructor() {
		super('/cities');
	}
}

export default City;