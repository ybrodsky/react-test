import Api from '../../api/Api';

class City extends Api{
	constructor() {
		super('/countries');
	}
}

export default City;