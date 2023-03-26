
const mongoose = require('mongoose');
const app = require('./app');

const port = 3700;

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/',
  { name: 'NodeJs' })
  .then(() => {
    console.log('DB connected');

    app.listen(port, () => {
      console.log('Express API loaded Successfully');
      console.log('Server Running in ' + port);
    });
  })
  .catch((e) => {
    console.error(e);
  });
