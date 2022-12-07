const getDb = require('../utils/database').getDb;
const mongodb = require('mongodb');


class Post{
    constructor(userId, userName, icon, posted, imageUrl, likes, description, id){
        this.userId = userId;
        this.userName = userName;
        this.icon = icon;
        this.posted = posted;
        this.imageUrl = imageUrl;
        this.likes = likes;
        this.description = description;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }
    save(){
        const db = getDb();
        let mongoFunc;
        if(this._id){
            mongoFunc = db.collection('posts').updateOne({_id: this._id}, {$set: this});
        } else {
            mongoFunc = db.collection('posts').insertOne(this);
        }
        return mongoFunc.then().catch((e) => {
            console.log(e);
        });
    }
    static fetchAll(){
        const db = getDb();
        return db.collection('posts').find().toArray().then((posts) => {
            return posts;
        }).catch((e) => {
            console.log(e);
        });
    }
}
module.exports = Post;