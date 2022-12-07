const express = require("express");
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home");
const cors = require("cors");
const mongoConnect = require("./utils/database").mongoConnect;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(homeRoutes);

mongoConnect(() => {
  app.listen(5500);
});
