const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const csrf = require('csurf');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const passport = require('passport');
const errorHandler = require('./middleware/errorHandler');
const unsupportedMethodHandler = require('./middleware/unsupportedMethodHandler');
const adminRouter = require('./routes/adminRouter.js');
const apiRouter = require('./routes/apiRouter');
const nodemailer = require('nodemailer');

const getDbConnection = require('./config/database');



function startServer(port) {

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: process.env.NODE_ENV === 'development' ? 587 : 465,
  //   secure: process.env.NODE_ENV !== 'development',
  //   auth: {
  //     user: 'danieltestshop@gmail.com',
  //     pass: '23vaskusmes74er4',
  //   },
  // });
  
  // transporter.sendMail({
  //     from: '"Daniel" <danieltestshop@gmail.com>',
  //     to: 'impulsifier1999@gmail.com',
  //     subject: 'Message',
  //     text: 'I hope this message gets delivered!'
  // }, (err, info) => {
  //     console.log(info.envelope);
  //     console.log(info.messageId);
  // });


  const app = express();

  // set path to static files
  // app.use(express.static(path.join(__dirname, "../build")));

   // set json body parser
   app.use(express.json());
   // set path to views
   app.set('views', path.join(__dirname, '../src/pages'));
   // set engine to use for rendering pages
   app.set('view engine', 'ejs');
 
   // set log of server requests
   if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
 
   if (process.env.NODE_ENV === 'production') {
     // set trust proxy, use only if we use proxy on production
     app.set('trust proxy', 1);
 
     // set security helmet
     app.use(helmet());
 
     // set middleware to protect against HTTP Parameter Pollution attacks
     app.use(hpp());
 
     const limiter = rateLimit({
       windowMs: 15 * 60 * 1000, // 15 minutes
       max: 300, // limit each IP to 300 requests per windowMs
     });
 
     // set limit for request
     app.use(limiter);
 
     // csrf attack protection
     app.use(csrf());
   }

  //get db connection
  const connection = getDbConnection();
  // create session store
  const sessionStore = new MongoStore({
    clientPromise: connection,
    collection: 'sessions'
  });

  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000 },
    store: sessionStore
  }));

  // passport js setup
  require('./config/passport');

  app.use(passport.initialize());
  app.use(passport.session());
  

  // define routes
  app.use('/api', apiRouter);
  app.use('/admin', adminRouter);

  // manage unsupported methods
  app.use(unsupportedMethodHandler);

  // set error middleware
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
}

module.exports.startServer = startServer;
