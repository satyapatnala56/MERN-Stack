const Post = require("../models/posts");



exports.getPosts = (req, res, next) => {
  Post.fetchAll()
    .then((posts) => {
      res.send(posts);
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.savePost = (req, res, next) => {
  const obj = req.body.obj;
  const userId = obj.userId;
  const userName = obj.userName;
  const icon = obj.icon;
  const posted = obj.posted;
  const file = req.file;
  const likes = obj.likes;
  const description = obj.description;
  // const post = new Post(
  //   userId,
  //   userName,
  //   icon,
  //   posted,
  //   imageUrl,
  //   likes,
  //   description
  // );
  // post
  //   .save()
  //   .then((result) => {
  //     res.send({
  //       sucess: true,
  //     });
  //   })
  //   .catch((e) => {
  //     res.send({
  //       sucess: false,
  //     });
  //     console.log(e);
  //   });
  // res.send({ success: true });
};
