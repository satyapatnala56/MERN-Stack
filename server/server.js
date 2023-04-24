const express = require("express");
const sessions = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(sessions);
const bodyParser = require("body-parser");
const coookieParser = require("cookie-parser");
const homeRoutes = require("./routes/home");
const rfs = require("rotating-file-stream");
const path = require("path");
const cors = require("cors");
const mongoConnect = require("./utils/database").mongoConnect;
const morgan = require("morgan");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/api.json");
const helmet = require("helmet");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(coookieParser());
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(helmet())


const mongoDbURI= "mongodb+srv://galaxy:inCiK9wH4mg6PdyM@cluster0.m7suo.mongodb.net/myFirstDatabase?w=majority"

const store = new MongoDBStore({
  uri: mongoDbURI,
  collection: "sessions" 
})

app.use(sessions({
  secret: 'an apple doesnt fall far away from a treeE',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
  store: store
}))


// const logStream = rfs.createStream("storage.log", {
//   interval: "1d",
//   path: path.join(__dirname, "logs"),
// });
// app.use(morgan("combined", { stream: logStream, immediate: true}));

app.use('*', (req, res, next) => {
  next()
})

app.use(homeRoutes);

mongoConnect(() => {
  const server  = app.listen(5500);
  const io = require('./socket').init(server)
  io.on('connection', socket => {
    console.log('Client connected')
  })
});

module.exports= app;