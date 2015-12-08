var express = require('express'),
  app = express(),
  port = 9001,
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoUri = 'mongodb://localhost:27017/todo',
  mongoose = require('mongoose'),
  controller = require('./server-assets/controllers/controller');

mongoose.Promise = require('q').Promise;

app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'));

app.get('/api/items', controller.getItems);
app.post('/api/items', controller.addItem);

app.listen(port, function() {
  console.log('listening on port:', port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('connected', function() {
  console.log('db connected');
});
