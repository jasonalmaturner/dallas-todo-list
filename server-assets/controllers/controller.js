var Item = require('../models/model');

module.exports = {
  getItems: function(req, res) {
    Item.find(req.query).exec().then(function(items) {
      return res.json(items);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },

  addItem: function(req, res) {
    var newItem = new Item(req.body);
    newItem.save().then(function(response) {
      return res.send('item added');
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
