import React, { Component } from 'react'
import logo from './logo.svg'
import Leaflet from './Leaflet'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
