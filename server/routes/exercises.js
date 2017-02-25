const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Get /');
  console.log(`Req: ${req}`);
  console.log(`Res: ${res}`);
  res.send('Exercise homepage');
});

router.get('/monday', (req, res) => {
 console.log('Get /monday');
 console.log(`Req: ${req}`);
 console.log(`Res: ${res}`);
 res.send('Exercise/monday page');
});

module.exports = router; 
