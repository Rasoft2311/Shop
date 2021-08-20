const User = require("../models/user.js");

module.exports.getPrograms = (req, res) => {
  // let firstUser = new User({
  //   login: 'test@example.com',
  //   password: '12345678',
  //   role: 'admin'
  // })
  // firstUser.save(function (err, user) {
  //   if (err) return console.error(err);
  // });
  let allUsers = User.find({}).then((users)=> {
    allUsers = users;
    res.send(`<h1>${allUsers}</h1>`);
  });

  
};
