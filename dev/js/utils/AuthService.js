import { EventEmitter } from 'events';
import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import 'whatwg-fetch';
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

		this.domain = 'ryla7780.auth0.com';
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
    });
  }

	changePassword(email, callback) {
		this.auth0.changePassword({
			connection: 'Username-Password-Authentication',
			email,
		}, callback);
	}

	getAppTerm() {
		const date = new Date();

		// checking to see if applicant hasnt applied by April 7 at 5:00 P.M of current year
		if(date.getMonth() == 3 && date.getDate() == 7 && date.getHours() < 17)
			return date.getFullYear();
		else if(date.getMonth() == 3 && date.getDate() < 7)
			return date.getFullYear();
		else if(date.getMonth() < 3)
			return date.getFullYear();
		else
			return date.getFullYear() + 1 // sends to next year's pool
	}

	// signs a user up
	signup(email, password, callback, metadata){

		const meta = Object.assign({ new: 'yes' }, metadata);

    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
			user_metadata: meta,
    }, function(err, authResult) {
      if (err != undefined) {
        callback(err);
				console.log(err);
				return;
      }
    })
  }

	// parses user info after signup/login
	parseHash(hash) {
    this.auth0.parseHash({ hash, _idTokenVerification: false }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken);

				this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
					if (error) {
            console.log('Error loading the Profile', error);
          } else {
						if(profile.user_metadata.new == 'yes') {
							// default metadata
							this.updateProfile(profile.user_id, {
								appTerm: this.getAppTerm(),
								nickname: null,
								middleInitial: null,
								appDecision: null,
								appComplete: false,
								currentAge: null,
								currentGrade: null,
								sex: null,
								address: null,
								city: null,
								zipCode: null,
								cellPhone: null,
								homePhone: null,
								hasInteractClub: false,
								isInteractMember: false,
								tshirtSize: null,
								profileComplete: false,
								activitiesComplete: false,
								additionalInfoComplete: false,
								new: 'no'
							});
						}
						else {
							this.updateProfile(profile.user_id, { appTerm: this.getAppTerm() });
						}
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

	// the new updateProfile
  updateProfile(userId, data) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken() //setting authorization header
    }
    // making the PATCH http request to auth0 api
    return window.fetch(`https://${this.domain}/api/v2/users/${userId}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({ user_metadata: data })
    })
    .then(response => response.json())
    .then(newProfile => this.setProfile(newProfile)) //updating current profile
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

export default AuthService;
