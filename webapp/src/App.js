import React, { Component } from 'react'
import logo from './logo.svg'
import Leaflet from './Leaflet'
import Login from './components/Login'
import * as firebase from 'firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const config = {
  apiKey: "AIzaSyDh89laiSSyRsJkGMVoZ8C_QQ0Ekgt4WpA",
  authDomain: "vishack-d2af3.firebaseapp.com",
  databaseURL: "https://vishack-d2af3.firebaseio.com",
  projectId: "vishack-d2af3",
  storageBucket: "vishack-d2af3.appspot.com",
  messagingSenderId: "244277080689"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BASTSsT5Cz7XnyYNArw_YhtR3QRruks16Hc8hEPGP6n5yVcOj45z4TTsuAWRWZBhxtEao2ovwDaV9csbm4e_O3U");
messaging.requestPermission()
.then(function() {
  console.log('Notification permission granted.');
  messaging.getToken()
  .then(function(currentToken) {
    if (currentToken) {
//      sendTokenToServer(currentToken);
//      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
    }
  })
  .catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
  });
 })
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});

class App extends Component {
  state = {
    name: null,
    page: 'home'
  }

  render() {
    if (this.state.name == null) {
      return <Login setName={name => this.setState({ name })} />
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hoi {this.state.name}!</h1>
          </header>

          <div className="App-body">
            <Switch>
              <Route exact path="/">
                <div className="row" style={{ flexGrow: 1 }}>
                  <div
                    className="col-lg-8 d-flex flex-column"
                    style={{ height: '100%' }}
                  >
                    <Leaflet />
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
