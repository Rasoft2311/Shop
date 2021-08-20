const mongoose = require("mongoose");
const session = require('express-session');
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const IS_PROD = process.env.NODE_ENV === "production";

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
  branding: {
    companyName: "Shop",
    softwareBrothers: false,
  },
});

module.exports = AdminBroExpress.buildRouter(adminBro);
