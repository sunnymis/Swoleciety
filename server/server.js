const express = require('express');
const exercisesRoute = require('./routes/exercises');
const admin = require('firebase-admin');
const serviceAcctKey = require('./serviceAcctKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAcctKey),
  databaseURL: 'https://swoleciety.firebaseio.com',
});

const app = express();
const port = 3000;


app.get('/', (req,res) => {
  // const db = admin.database();
  // const ref = db.ref('users/user1/name');
  // ref.on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (error) => {
  //   console.error(`The read failed: ${error.code}`)
  // });
});

app.get('/day', (req,res) => {
  // const db = admin.database();
  // const ref = db.ref('days/020617');
  // ref.on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (error) => {
  //   console.error(`The read failed: ${error.code}`)
  // });
});

//app.use('/exercises', exercisesRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
