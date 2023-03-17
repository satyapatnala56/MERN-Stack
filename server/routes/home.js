const express = require("express");
const path = require("path");
const { displayUsers } = require("../controllers/admin");
const router = express.Router();
const addUser = require("../controllers/user-crud").addUser;
const logUser = require("../controllers/log").logUser;
const logOut = require("../controllers/log").logOut;
const currentUser = require("../models/user").currentUser;
const logStatusFunc = require("../models/user").logStatus;
const register = require("../controllers/log").register;
const addItem = require("../controllers/storage").addItem;
const updateUser = require("../controllers/user-crud").updateUser;
const Item = require("../models/auctionItems");
const { adminStatus } = require("../models/user");
const getItems = require("../controllers/auction").getItems;
const updateItem = require("../controllers/auction").updateItem;
const fetchAll = require("../controllers/storage").fetchAll;
const admin = require("../models/user").adminStatus;
const postControllers = require("../controllers/posts");
const auctionControllers = require("../controllers/auction");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

const storage = new GridFsStorage({
  url: "mongodb+srv://galaxy:inCiK9wH4mg6PdyM@cluster0.m7suo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  file: (req, file) => {
    const filename = file.originalname;
    return {
      bucketName: "uploads",
      filename
    }
  }
});
const upload = multer({storage})

router.get("/profile", fetchAll);

router.get("/auction", getItems);

router.get("/uploadForm", (req, res, next) => {
  res.render("imageForm", { title: "ImageUpload" });
});

router.get("/public", (req, res, next) => {
  let logStatus = logStatusFunc();
  res.render("public", { title: "Public", isLoggedIn: logStatus });
});

router.get("/register", (req, res, next) => {
  let logStatus = logStatusFunc();
  res.render("register", { title: "register", isLoggedIn: logStatus });
});

router.get("/detailpage/:itemid", (req, res, next) => {
  let logStatus = logStatusFunc();
  let id = req.params.itemid;
  let admin = adminStatus();
  Item.findById(id)
    .then((item) => {
      res.render("help", {
        title: "Bid",
        isLoggedIn: logStatus,
        details: item,
        admin: admin,
      });
    })
    .catch((err) => console.log(err));
});

router.get("/view", displayUsers);

router.get("/updateItem/:itemid", updateItem);

router.post("/add-user", addUser);

router.post("/login", logUser);

router.get("/logout", logOut);

router.post("/additem", addItem);

router.post("/updateUser", updateUser);

router.post("/register", register);

router.post("/post", upload.single("file"), postControllers.savePost);

router.get("/posts", postControllers.getPosts);

router.post("/auction", auctionControllers.addItem);

router.get("/auction", auctionControllers.getItems);

router.post("/updateItem", auctionControllers.updateItem);

module.exports = router;
