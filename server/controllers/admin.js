const User = require("../models/user").user;
const Items = require("../models/auctionItems");

exports.displayUsers = async (req, res, next) => {
  Items.fetchAll()
    .then(async (items) => {
      var arrayList = [];
      await items.map((item) => {
        User.findUsers(item.userid)
          .then((result) => {
            arrayList.push(result.username);
          })
          .catch((e) => console.log(e));
      });
      let something = [];
      console.log(arrayList);
      arrayList.map((id) => {
        console.log(id);
        if (!something.includes(id)) {
          console.log(id);
          something.push({ id: id, count: 0 });
        }
      });
      console.log();
      for (let i = 0; i < arrayList.length; i++) {
        for (let j = 0; j < something.length; j++) {
          if (something[j].id === arrayList[i]) {
            something[j].count++;
          }
        }
      }
      res.json(something);
    })
    .catch((err) => {
      console.log(err);
    });
};
