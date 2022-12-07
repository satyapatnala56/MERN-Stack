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
  const userId = req.body.userId;
  const userName = req.body.userName;
  const icon = req.body.icon;
  const posted = req.body.posted;
  const imageUrl = req.body.imageUrl;
  const likes = req.body.likes;
  const description = req.body.description;
  const post = new Post(
    userId,
    userName,
    icon,
    posted,
    imageUrl,
    likes,
    description
  );
  post
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
};
