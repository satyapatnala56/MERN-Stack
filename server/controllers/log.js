const User = require("../models/user").user;

exports.logUser = (req, res, next) => {
  User.findUser(req.body.email)
    .then((result) => {
      if (result.password === req.body.pass) {
        res.send({status: true, user: result})
      } else {
         res.send({succcess: false}) 
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.logOut = (req, res, next) => {
  update({}, true);
  res.redirect("/");
};

exports.register = (req, res, next) => {
  let user = { ...req.body };
  console.log(user);
  let newUser = new User(user.name, user.email, user.pass, user.ph);
  newUser.save().then((response) => {
    res.send({response, done: 1});
  });
};
