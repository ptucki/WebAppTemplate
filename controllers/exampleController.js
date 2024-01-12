const moment = require('moment');

const example_get = async (req, res) => {

  res.render('example', { moment: moment });
};

module.exports = {
  example_get
};