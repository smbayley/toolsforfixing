import SuperAgent from 'superagent';

class Io {
	constructor() {
		this._GET = 'GET'
		this._POST = 'POST'
	}

	get(url, config) {
		return this.request(this._GET, url, config);
	}

	post(url, config) {
		return this.request(this._POST, url, config);
	}

	request(method, url, config = {}) {
		let request = SuperAgent(method, url);

		if (config.query) {
			request = request.query(config.query);
		}

		if (config.type) {
			request = request.type(config.type);
		}

		if (config.headers) {
			request = request.set(config.headers);
		}

		if (config.timeout) {
			request = request.timeout(config.timeout);
		}

		if (config.data) {
			request = request.send(Io.clear_blank(config.data));
		} 
		else if (method.toUpperCase() === this._POST) {
			request = request.send({});
		}

		return request.then(res => {
			if (config.onSuccess && typeof config.onSuccess === 'function') {
				config.onSuccess(res);
			}
		}).catch(err => {
			if (config.onFailure && typeof config.onFailure === 'function') {
				config.onFailure(err);
			}
			else
			{
				console.log('ERROR |', err)
			}
		})

	}

	static clear_blank(data) {
		return Object.fromEntries(Object.entries(data).filter(([k, v]) => v != null))
	}
}

export default Io;
