const Items = require("../models/auctionItems");


exports.addItem = (req, res, next) => {
  const current = req.body.ini;
  const inc = req.body.inc;
  const artist = req.body.artist;
  const title = req.body.title;
  const desc = req.body.desc;
  const url = req.body.url;
  const itemDetails = {
    intial: current,
    increment: inc,
    currentHolder: 'No bids yet',
  };
  const item = new Items(title, artist, desc, url, itemDetails);
  item
    .save()
    .then((result) => {
      res.send({
        sucess: true,
      });
    })
    .catch((e) => {
      res.send({
        sucess: false,
      });
      console.log(e);
    });
}

exports.updateItem = (req, res, next) => {
  const current = req.body.itemDetails.intial;
  const inc = req.body.itemDetails.increment;
  const artist = req.body.artist;
  const title = req.body.title;
  const desc = req.body.desc;
  const url = req.body.url;
  const itemDetails = {
    intial: current,
    increment: inc,
    currentHolder: req.body.itemDetails.currentHolder,
  };
  let id = req.body._id;
  Items.findById(id)
    .then((item) => {
      let newItem = new Items(
        title,
        artist,
        desc,
        url,
        itemDetails,
        item._id
      );
      newItem
        .save()
        .then()
        .catch((e) => console.log(e));
      res.send('Done')
    })
    .catch((e) => console.log(e));
};
exports.getItems = (req, res, next) => {
  Items.fetchAll()
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      console.log(err);
    });
};
