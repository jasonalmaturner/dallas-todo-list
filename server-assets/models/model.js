var mongoose = require('mongoose'),
  request = require('request');

var itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  status: { type: String, enum: ['new', 'inProgress', 'complete', 'archived'], default: 'new' },
}, { timestamps: true });

itemSchema.pre('save', function(next) {
  var item = this;
  request({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    qs: {
      api_key: 'dc6zaTOxFJmzC',
      q: this.title,
    },
  }, function(error, response, body) {
    if (error) next(error);
    var res = JSON.parse(body);
    item.image = pickRandomElement(res.data).images.fixed_height.url;
    next();
  });
});

module.exports = mongoose.model('Item', itemSchema);

function pickRandomElement(arr) {
  var rando = Math.floor(Math.random() * (arr.length - 1));
  return arr[rando];
}
