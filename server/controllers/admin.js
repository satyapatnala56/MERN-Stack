const Admin = require("../models/admin");

exports.logAdmin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);
  Admin.login(username, password)
    .then((admin) => {
      console.log(admin);
      if (admin) {
        res.send({ success: true, data: admin });
      } else {
        res.send({ success: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.admins = (req, res, next) => {
  Admin.fetchAll().then((data) => {
    res.send(data);
  });
};
