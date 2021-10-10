const mongoose = require('mongoose');
const session = require('express-session');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('@admin-bro/mongoose');
const Product = require('../models/Product.js');
const uploadFeature = require('@admin-bro/upload');
const path = require('path');
const User = require('../models/User.js');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  branding: {
    companyName: 'Shop',
    softwareBrothers: false,
  },
  resources: [{
    resource: Product,
    options: {
      properties: { uploadFile: { isVisible: false } },
    },
    features: [ 
      uploadFeature({
        provider: { local: { bucket: path.join(__dirname, '../../uploads')}},
        properties: {
          key: 'image.path',
          bucket: 'image.folder',
          mimeType: 'image.type',
          size: 'image.size',
          filename: 'image.filename',
          file: 'image',
        }
      })
    ]
  },
  {
    resource: User
  }],
});

module.exports = AdminBroExpress.buildRouter(adminBro);
