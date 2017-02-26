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
  static getSingleWeek(userID, week) {
    const userWeekRef = firebase.database().ref(`users/${userID}/weeks/${week}`);
    userWeekRef.once('value', (snapshot) => {
      console.log('Weekdays:', snapshot.val());
    });
  }

  /**
   * Adds a day and title to the the current week for a user
   * @param {string} userID User's ID
   * @param {string} date   Date formatted as a 6 digit number MMDDYY. 
   * @param {string} name   Name of the days workout
   */
  static addDay(userID, date, name) {
    let updates = {};
    updates[`users/${userID}/weeks/020517/${date}/`] = name;
    firebase.database().ref().update(updates);
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
}