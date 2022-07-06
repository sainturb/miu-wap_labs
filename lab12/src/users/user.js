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
  res.sendFile(path.join(__dirname, '..', 'views', 'user.html'));
});

router.use('/add', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'user-form.html'));
});

router.use('/save', (req, res, next) => {
  console.log(req.body);
  // req.redirect('/');
  res.redirect('/');
});
router.use('/error-test', (req, res, next) => {
  console.log(req.body);
  req.redirect('/'); // request cannot redirect so it will show 500 error
  // res.redirect('/');
});
module.exports = router;