import zango from 'zangodb';


// todo: need to check to see if collection already exists.
//  if not, retrieve from ifixit
//  if so, don't do anything. maybe check count?
// let devices = this.database.collection('devices');
//
// devices.insert(this.state.devices).then(() => {
//     return devices.find({include: true}).forEach(doc => console.log('doc:' , doc))
// });

const superagent = require('superagent');

class Database {
	COLL_DEVICES = 'devices';

	constructor() {
		this.db = new zango.Db('devicedb', ['devices', 'selected'])
	}

    getCollection = (collection_name) => {
        return this.db.collection(collection_name);
    }

    fetch = () => {
    	const request = require('superagent');

    	request.get('https://www.ifixit.com/api/2.0/categories')
    			  .then(this._parse_response)
				  .catch(err => {
				      console.log(err.message);
				   });

    }

    _parse_response = response => {
    	console.log(response.body);
    }
}

var DatabaseFactory = (function() {
	var instance;

	return {
		getInstance: function() {
			if (instance == null) {
				instance = new Database();
				instance.constructor = null;
			}

			return instance;
		}
	}
})();

export default DatabaseFactory;