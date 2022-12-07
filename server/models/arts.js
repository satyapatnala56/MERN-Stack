const getDb = require("../utils/database").getDb;

class Arts  {
    constructor(savedArts, storedArts){
        this.savedArts = savedArts;
        this.storedArts = storedArts;
    }
}