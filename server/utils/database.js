const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://galaxy:inCiK9wH4mg6PdyM@cluster0.m7suo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("connected");
      _db = result.db();
      callback(result)
    })
    .catch((e) => {
      console.log(e);
    });
};
const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No Database found'
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb