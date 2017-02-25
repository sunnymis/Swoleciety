const express = require('express');
const exercisesRoute = require('./routes/exercises');

const app = express();

app.use('/exercises', exercisesRoute);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
