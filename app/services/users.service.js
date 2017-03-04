import DateService from './date.service';

const deepEqual = require('deep-equal');


export default class UserService {
  /**
   * Gets a list of all the users in the database
   * @return {Array} User objects
   */
  static getAllUsers() {
    const usersRef = firebase.database().ref('users');
    usersRef.once('value', (snapshot) => {
      console.log('All Users', snapshot.val());
    });
  }

  /**
   * Get a single user
   * @param  {String} userID User's ID
   * @return {Object} User Object
   */
  static getUser(userID) {
    const usersRef = firebase.database().ref(`users/${userID}`);
    usersRef.once('value', (snapshot) => {
      console.log('single user: ', snapshot.val());
    });
  }

  /**
   * Gets a list of all the weeks the user has exercises in
   * @param  {String} userID User's ID
   * @return {Array}  Array of Weeks which contain Date Objects
   */
  static getAllWeeks(userID) {
    const userWeekRef = firebase.database().ref(`users/${userID}/weeks`);
    userWeekRef.once('value', (snapshot) => {
        console.log('All weeks', snapshot.val());
    });
  }

  /**
   * Gets a single Week for a given user
   * @param  {string} userID User's ID
   * @param  {string} week  Date formatted as a 6 digit number MMDDYY.
   *                        It is always a Sundays date as it is the
   *                        beginning of the week
   * @return {Object}       Week object containing Date objects for each
   *                        weekday.
   */
  static getSingleWeek(userID, week, callback) {
    const userWeekRef = firebase.database().ref(`users/${userID}/weeks/${week}`);
    userWeekRef.once('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

  /**
   * Updates the title of a day
   * @param {string} userID User's ID
   * @param {string} weekOf Date formatted as a 6 digit number MMDDYY.
   *                        Beginning date of the week
   * @param {string} date   Date formatted as a 6 digit number MMDDYY.
   * @param {string} name   Name of the days workout
   */
  static updateDay(userID, weekOf, date, name) {
    const updates = {};
    updates[`users/${userID}/weeks/${weekOf}/${date}/`] = name;
    firebase.database().ref().update(updates);
  }

  /**
   *
   * Currently not being used. Use updateDay for adds
   *
   * Adds a new day with a title
   * @param {string} userID User's ID
   * @param {string} weekOf Date formatted as a 6 digit number MMDDYY.
   *                        Beginning date of the week
   * @param {string} date   Date formatted as a 6 digit number MMDDYY.
   * @param {string} name   Name of the days workout
   */
  // static addDay(userID, weekOf, date, name) {
  //   const ref = `users/${userID}/weeks/${weekOf}/${date}/`;
  //   //firebase.database().ref(ref) = name;
  // }

  /**
   * Removes a day
   * @param {string} userID User's ID
   * @param {string} weekOf Date formatted as a 6 digit number MMDDYY.
   *                        Beginning date of the week
   * @param {string} date   Date formatted as a 6 digit number MMDDYY.
   * @param {string} name   Name of the days workout
   */
  static deleteDay(userID, weekOf, date) {
    const ref = `users/${userID}/weeks/${weekOf}/${date}`;
    firebase.database().ref(ref).remove();
  }

  static addWeekForUser(userID, week) {
    const userWeekRef = firebase.database().ref(`users/${userID}/weeks/${week}`);
    const weekObj = {};
    let weekDay = week;
    for (let i = 0; i < 7; i++) {
      weekObj[weekDay] = '';
      let nextDay = DateService.getNextDay(weekDay);
      // Reformat the formattedDate with the next day
      weekDay = `${weekDay.substr(0,2)}${nextDay}${weekDay.substr(4,2)}`;
    }
    userWeekRef.update(weekObj);
  }

  static getExercises(userID, date, callback) {
    const path = `days/${date}/${userID}`;
    const ref = firebase.database().ref(path);
    ref.on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

  /**
   * Adds an exercise to a specific date for a user
   * @param {string]} userID  User's ID
   * @param {string} date     Date formatted as a 6 digit number MMDDYY
   * @param {string} exercise Exercise object. Contains fields name, reps,
   *                          sets, weight
   */
  static addExercise(userID, date, exercise) {
    const path = `days/${date}/${userID}`;
    firebase.database().ref(path).push(exercise);
  }

  /**
   * Updates an exercise information for a given day
   * @param  {string} userID      [description]
   * @param  {string} date        Date formatted as a 6 digit number MMDDYY
   * @param  {object} oldExercise Exercise Object to be changed
   * @param  {object} newExercise Exercise Object to change to
   */
  static updateExercise(userID, date, oldExercise, newExercise) {
    const path = `days/${date}/${userID}`;
    const ref = firebase.database().ref(path);
    ref.once('value', (snapshot) => {
      Object.keys(snapshot.val()).forEach((ex) => {
        if (deepEqual(snapshot.val()[ex], oldExercise)) {
          firebase.database().ref(`${path}/${ex}`).update(newExercise);
        }
      });
    });
  }

  /**
   * Updates an exercise information for a given day
   * @param  {string} userID      [description]
   * @param  {string} date        Date formatted as a 6 digit number MMDDYY
   * @param  {object} oldExercise Exercise Object to be changed
   * @param  {object} newExercise Exercise Object to change to
   */
  static updateExerciseByKey(userID, date, key, newExercise) {
    const path = `days/${date}/${userID}/${key}`;
    const ref = firebase.database().ref(path);
    ref.update(newExercise);
  }

  /**
   * Deletes an exercise for a user on a given day
   * @param  {string} userID      [description]
   * @param  {string} date        Date formatted as a 6 digit number MMDDYY
   * @param  {string} key         Key for the Exercise to delete
   */
  static deleteExercise(userID, date, key) {
    const path = `days/${date}/${userID}/${key}`;
    const ref = firebase.database().ref(path);
    ref.remove();
  }
}
