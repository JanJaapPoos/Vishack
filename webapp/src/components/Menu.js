import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
  <header className="App-header d-flex flex-lg-column menu justify-content-between">
    <Link to="/" className="menu-item">
      <i className="material-icons">settings</i>
    </Link>
    <Link to="/" className="menu-item flex-column">
      <i className="material-icons">perm_identity</i>
      <p className="d-none d-lg-inline-block">{props.name} GO-77</p>
    </Link>
    <Link to="/add-trek" className="menu-item">
      <i className="material-icons">list</i>
    </Link>
    <Link to="/" className="menu-item">
      <i className="material-icons">map</i>
    </Link>
    <Link to="/" className="menu-item">
      <i className="material-icons">share</i>
    </Link>
    <Link to="/meldingen" className="menu-item">
      <i className="material-icons">warning</i>
    </Link>
  </header>
)

export default Menu
