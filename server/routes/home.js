const express = require("express");
const path = require("path");
const { displayUsers } = require("../controllers/admin");
const router = express.Router();
const addUser = require("../controllers/user-crud").addUser;
const userController = require("../controllers/log");
const register = require("../controllers/log").register;
const addItem = require("../controllers/storage").addItem;
const updateUser = require("../controllers/user-crud").updateUser;
const getItems = require("../controllers/auction").getItems;
const updateItem = require("../controllers/auction").updateItem;
const fetchAll = require("../controllers/storage").fetchAll;
const postControllers = require("../controllers/posts");
const auctionControllers = require("../controllers/auction");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

const storage = new GridFsStorage({
  url: "mongodb+srv://galaxy:inCiK9wH4mg6PdyM@cluster0.m7suo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  file: (req, file) => {
    console.log(req);
    const random = Math.floor(Math.random() * 10000);
    return {
      bucketName: "uploads",
      filename: file.originalname + random,
    };
  },
});

let gfs;

const upload = multer({ storage });

router.get("/profile", fetchAll);

router.get("/auction", getItems);

router.get("/view", displayUsers);

router.get("/updateItem/:itemid", updateItem);

router.post("/add-user", addUser);

router.post("/login", userController.logUser);

router.get("/logout", userController.logOut);

router.post("/updateuser", userController.updateUser);

router.post("/additem", addItem);

router.post("/register", register);

router.post("/post", upload.single("file"), postControllers.savePost);

router.post("/post", () => {});

router.get("/post/:fileName", postControllers.fetchFile);

router.get("/posts", postControllers.getPosts);

router.get('/post/updatelike/:id', postControllers.updateLike)

router.post("/auction", auctionControllers.addItem);

router.get("/auctionItems", auctionControllers.getItems);

router.post("/updateItem", auctionControllers.updateItem);

module.exports = router;
