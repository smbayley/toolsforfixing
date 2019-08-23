import Io from '../utils/Io'

class Ifixit {
	BaseUrl = 'https://www.ifixit.com/api/2.0/'
	constructor() {
		this._io = new Io();
		this._storage = window.localStorage;

		let categories = this._storage.getItem('%ifixit_categories!')
		if (categories === null) {
			categories = this._getCategories();
		}

		this._categories = categories;

	}

	_getCategories() {
		const url = encodeURI(Ifixit.BaseUrl + 'categories');

		const f = function (r) {
			console.log(r);
		};

		const config = {
			onSuccess: f,
			onFailure: f
		};

		this._io.get(url, config);
	}

	getChildren(parent) {

	}

	getParent(child) {

	}
}

export default Ifixit;