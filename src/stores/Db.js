import zango from 'zangodb';


class Database {

	constructor() {
		this.db = new zango.Db('devicedb', ['selected'])

		/*
			selected collection doc structure
			{
				user: String,
				device: String,
				ancestors: List[String],
				descendents: List[String]
			}
		*/
	}

	addSelected(user, device, ancestors, descendents) {
		if (typeof ancestors === 'string')
		{
			ancestors = [ancestors];
		}
		if (typeof descendents === 'string')
		{
			descendents = [descendents];	
		}

		this.db.selected.insert({
			user: user,
			device: device,
			ancestors: ancestors,
			descendents: descendents
		}, (error) => {
			if (error) { throw error; }
		});
	}

    getSelected(user) {
    	return this.db.selected.find({user: user});
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