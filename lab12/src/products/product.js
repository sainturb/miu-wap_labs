const express = require('express');
const path = require('path');

const options = {
  "caseSensitive": false,
  "strict": false
};
const router = express.Router(options);
router.use(express.urlencoded({
  extended: true
}));
router.use('/get', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
});
router.use('/add', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'product-form.html'));
});
router.use('/save', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;