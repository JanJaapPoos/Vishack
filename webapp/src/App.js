import React, { Component } from 'react'
import Leaflet from './Leaflet'
import Login from './components/Login'
import * as firebase from 'firebase'
import AddTrek from './components/AddTrek'
import AddTrekManual from './components/AddTrekManual'
import Share from './components/Share'
import Popup from './components/Popup'
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
    name: 'Jacob',
    page: 'home'
  }

  render() {
    if (this.state.name == null) {
      return <Login setName={name => this.setState({ name })} />
    }
    return (
      <Router>
        <div className="App row">
          <div className="col-lg-8">
            <Switch>
              <Route exact path="/">
                <Leaflet />
              </Route>
              <Route exact path="/add-trek">
                <AddTrek />
              </Route>
              <Route exact path="/share">
                <Share />
              </Route>
              <Route exact path="/add-trek-manual">
                <AddTrekManual />
              </Route>
              <Route exact path="/popup">
                <Popup />
              </Route>
            </Switch>
          </div>
          <header className="col-lg-4 d-flex flex-lg-column">
            <div className="menu">
              <div className="menu-item">
                <i className="material-icons">settings</i>
              </div>
              <div className="menu-item">
                <p>
                  <i className="material-icons">perm_identity</i>{' '}
                  {this.state.name}
                </p>
                <p>GO-77</p>
              </div>
              <div className="menu-item">
                <i className="material-icons">list</i>
              </div>
              <div className="menu-item">
                <i className="material-icons">map</i>
              </div>
              <div className="menu-item">
                <i className="material-icons">share-variant</i>
              </div>
              <div className="menu-item">
                <i className="material-icons">warning</i>
              </div>
            </div>
          </header>
        </div>
      </Router>
    )
  }
}

export default App
