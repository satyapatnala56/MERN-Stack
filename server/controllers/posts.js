const Post = require("../models/posts");
const io = require("../socket");
const redis = require("redis");
const client = redis.createClient({
  url: "rediss://red-ch3cr4rh4hsum42u29k0:GAaIP0IwCwOkHlnyfgMfdSsdqrVJHrEQ@singapore-redis.render.com:6379"
});

client
  .connect()
  .then((result) => {
    console.log("Redis Connected");
  })
  .catch((error) => {
    console.log(error);
  });
exports.getPosts = async (req, res, next) => {
  const posts = await client.get("posts");
  let postsArray = await JSON.parse(posts);
  if (postsArray?.length > 0) {
    res.send(postsArray);
  } else {
    Post.fetchAll()
      .then(async (posts) => {
        await client.set("posts", JSON.stringify(posts));
        res.send(posts);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

exports.savePost = (req, res, next) => {
  const obj = req.body;
  console.log(obj);
  const userId = obj.userId;
  const userName = obj.userName;
  const icon = obj.icon;
  const posted = obj.posted;
  const file = req.file.filename;
  const likes = obj.likes;
  const description = obj.description;
  const post = new Post(
    userId,
    userName,
    icon,
    posted,
    file,
    likes,
    description
  );
  post
    .save()
    .then((result) => {
      io.getIO().emit("posts", { action: "create", post });
      client.del("posts");
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

exports.fetchFile = async (req, res, next) => {
  const fileName = req.params.fileName;
  const image = await client.get(fileName);
  if (image === null) {
    Post.fetchFile(fileName, async (file) => {
      await client.set(fileName, file);
      res.send(file);
    });
  } else {
    res.send(image);
  }
};

exports.updateLike = (req, res, next) => {
  const id = req.params.id;
  const queries = req.query;
  Post.updateLike(id, queries.likes)
    .then((result) => {
      res.send("success");
    })
    .catch((e) => {
      console.log(e);
      res.send("failed");
    });
};
