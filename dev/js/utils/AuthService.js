import { EventEmitter } from 'events';
import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import auth0 from 'auth0-js';

class AuthService extends EventEmitter {
	constructor(clientId, domain) {
		super();
    // Configure Auth0
    this.auth0 = new auth0.WebAuth({
      clientID: 'zE6b3E0Kl2TdxWAcyitudUApVOY8AUY6',
      domain: 'ryla7780.auth0.com',
      responseType: 'token id_token',
      redirectUri: 'http://localhost:8080/login'
    })

		this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
	}

	// logs user in with given username and password
	login(username, password, callback) {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password
    }, err => {
      if (err) {
        callback(err);
      }
    })
  }

	changePassword(email, callback) {
		this.auth0.changePassword({
			connection: 'Username-Password-Authentication',
			email: email,
		}, callback);
	}

	// signs a user up
	signup(email, password, callback, metadata){

    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
			user_metadata: metadata,
    }, function(err, authResult) {
      if (err != undefined) {
        callback(err);
				return;
      }
    })
  }

	// parses user info after signup
	parseHash(hash) {
    this.auth0.parseHash({ hash, _idTokenVerification: false }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken);

				this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            console.log('Error loading the Profile', error);
          } else {
            this.setProfile(profile);
          }
        })

				browserHistory.replace('/MyRYLA');

      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error);
      }
    })
  }

	loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

	setToken(accessToken, idToken) {
    // Saves user access token and ID token into local storage
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('id_token', idToken)
  }

	setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
		// triggers event
		this.emit('profile_updated', profile);
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : null
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }
}

// Auth0 authentication service
export default AuthService;
