import React, { Component } from 'react';
import logo from './logo.svg';
import Leaflet from './Leaflet'
import Login from './components/Login'

class App extends Component {
  state = {
    name: null
  }

  render() {
    if (this.state.name == null) {
      return <Login setName={name => this.setState({name})} />
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hoi {this.state.name}!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Leaflet />
      </div>
    );
  }
}

export default App;
