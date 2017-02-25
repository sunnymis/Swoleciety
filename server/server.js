const express = require('express');
const exercisesRoute = require('./routes/exercises');

const app = express();
const port = 3000; 

app.use('/exercises', exercisesRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
