import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <div className="add-trek text-center">
        <h1>Voeg een trek toe</h1>
        <div className="choice-button">
          <i className="material-icons">system_update_alt</i>
          <h4>Importeer Pulse Data Sheet (PDS)</h4>
        </div>
        <Link to="/add-trek-manual" className="choice-button d-block">
          <i className="material-icons">create</i>
          <h4>Noteer trek-gegevens</h4>
        </Link>
      </div>
    )
  }
}
