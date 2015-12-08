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

  advanceItem: function(req, res) {
    Item.findById(req.params.id).exec().then(function(item) {
      var flag = false;
      switch (item.status) {
        case 'new':
          item.status = 'inProgress';
          break;
        case 'inProgress':
          item.status = 'complete';
          break;
        case 'complete':
          item.status = 'archived';
          break;
        case 'archived':
          flag = true;
          break;
      };
      if (flag) return res.status(208).send('cannot advance anymore');
      return item.save().then(function(savedItem) {
        return res.send('item advanced');
      });
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },
};
