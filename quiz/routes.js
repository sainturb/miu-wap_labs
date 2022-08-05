const express = require('express');
const path = require('path');
const router = express.Router();
let loggedInUser = null;
const myArray = {user:['Nuts',"Legumes"],owner: ['Vegetables','Nuts','Fruits',"Legumes"]};

// __dirname = '/Users/saintor/Documents/MIU.documents/CS472/Labs/wap/quiz'
router.get('/login', (req, res, next) => res.sendFile(path.join(__dirname, 'login.html')));
router.get('/view', (req, res, next) => res.sendFile(path.join(__dirname, 'view.html')));

router.get('/authenticate', (req, res, next) => {
  if (req.query.username && req.query.password) {
    loggedInUser = req.query.username;
    res.redirect('/view');
  } else {
    res.status(404).send('Not found');
  }
});

router.get('/check', (req, res, next) => {
  if (!loggedInUser) {
    res.redirect('/login');
  }
  const allowedList = myArray[loggedInUser]; // ['', ''] | ['', '', '', ''] 
  if (!allowedList) {
    res.status(401).send('Unauthorized');
  }
  const selected = req.query.selected;
  if (allowedList.includes(selected)) {
    res.status(200).send('Welcome to ' + selected);
  } else {
    res.status(401).send('Unauthorized');
  }
});

module.exports = router;