export default class AuthService {

  constructor() {

  }

  /**
   * Returns the currently signed in user in the userCallback.
   * Uses observables to send the user. Makes sure Auth isn't 
   * in an intermediate state when getting user
   * @param  {function} userCallback Callback to send the user
   * @return null if a user isn't signed in.
   */
  static getCurrentlySignedInUser(userCallback) {
    firebase.auth().onAuthStateChanged((user) => {
      userCallback(user);
    });
  };

  /**
   * Second way to get the signed in user. Simpler way
   * @return {string} [description]
   */
  static getCurrentUser() {
    return firebase.auth().currentUser;
  }

  /**
   * Creates a new account with email and password. 
   * Throws error if password is less than 6 characters.
   * @param  {string} email    Email address
   * @param  {string} password Password
   */
  static signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      console.error(`ERROR ${error.code}: Unable to create user: ${error.message}`);
      alert(`ERROR ${error.code}: Unable to create user: ${error.message}`);
    });
  }

  /**
   * Signs a user into the app
   * @param  {string} email    Email address
   * @param  {string} password Password
   * @return {[type]}          [description]
   */
  static signin(email, password) {
    const retVal = {};
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        retVal.success = result;
        return retVal;
      }, (err) => {
        retVal.error = err;
        return retVal;
      });
  }

  /**
   * Signs a user out of the app
   */
  static signout() {
    firebase.auth().signOut().then(() => {
      console.log('SIGN OUT SUCCESSFUL');
      alert('SIGN OUT SUCCESSFUL');
    }, (error) => {
      console.log(error);
      alert('An error occurred. Unable to sign out');
    });
  }


}
