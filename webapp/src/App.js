import React, { Component } from 'react'
import Leaflet from './components/Leaflet'
import Login from './components/Login'
import AddTrek from './components/AddTrek'
import AddTrekManual from './components/AddTrekManual'
import Share from './components/Share'
import Popup from './components/Popup'
import Menu from './components/Menu'
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
        <div className="App flex-column flex-lg-row">
          <div className="App-body">
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
          <Menu name={this.state.name} />
        </div>
      </Router>
    )
  }
}

export default App
