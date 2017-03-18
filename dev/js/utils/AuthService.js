import { browserHistory } from 'react-router';
import { EventEmitter } from 'events';
import { isTokenExpired } from './jwtHelper';
import auth0 from 'auth0-js';

class AuthService extends EventEmitter {
	constructor(clientId, domain) {
    super()
    // Configure Auth0
    this.auth0 = new auth0.WebAuth({
      clientID: 'zE6b3E0Kl2TdxWAcyitudUApVOY8AUY6',
      domain: 'ryla7780.auth0.com',
      responseType: 'token id_token',
      redirectUri: 'http://localhost:8080/login'
    })

		this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.loginWithGoogle = this.loginWithGoogle.bind(this)
	}

	// logs user in with given username and password
	login(username, password) {
    this.auth0.client.login({
      realm: 'Username-Password-Authentication',
      username,
      password
    }, (err, authResult) => {
      if (err) {
        return err;
      }
      if (authResult && authResult.idToken && authResult.accessToken) {
        this.setToken(authResult.accessToken, authResult.idToken)
        browserHistory.replace('/MyRYLA')
      }

			return null;
    })
  }

	// signs a user up
	signup(email, password, data){
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, function(err) {
      if (err) {
        return err;
      }
			return null;
    })
  }

	// logs in with google
	loginWithGoogle() {
    this.auth0.authorize({
      connection: 'google-oauth2'
    })
  }

	// parses user info after signup
	parseHash(hash) {
    this.auth0.parseHash(hash, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken);
        browserHistory.replace('/MyRYLA');

				this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            console.log('Error loading the Profile', error)
          } else {
            this.setProfile(profile)
          }
        })
      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error)
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
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
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
