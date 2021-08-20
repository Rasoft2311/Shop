const app = require('./app/app');
const port = process.env.PORT || 3000;
app.startServer(port);