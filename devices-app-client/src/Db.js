import zango from 'zangodb';


// todo: need to check to see if collection already exists.
//  if not, retrieve from ifixit
//  if so, don't do anything. maybe check count?
// let devices = this.database.collection('devices');
//
// devices.insert(this.state.devices).then(() => {
//     return devices.find({include: true}).forEach(doc => console.log('doc:' , doc))
// });

class Database {
    db = new zango.Db('devicedb', ['devices']);

    collection = (collection_name) => {
        return this.db.collection(collection_name);
    }
}

export default Database;