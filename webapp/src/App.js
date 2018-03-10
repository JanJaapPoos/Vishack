import React, { Component } from 'react'
import Leaflet from './Leaflet'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

          <div className="col-lg-8">
            <Switch>
              <Route exact path="/">
                <Leaflet />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
