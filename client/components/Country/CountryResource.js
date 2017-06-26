import Api from '../../api/Api';

class City extends Api{
	constructor() {
		super('/countries?limit=10');
	}

	query() {
		return super.query();
	}
}

export default City;