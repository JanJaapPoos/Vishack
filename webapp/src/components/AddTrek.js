import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div class="add-trek">
        <h1>Voeg een trek toe</h1>
        <div className="choice-button">
          <i className="material-icons">system_update_alt</i>
          <h4>Importeer Pulse Data Sheet (PDS)</h4>
        </div>
        <div className="choice-button">
          <i className="material-icons">create</i>
          <h4>Noteer trek-gegevens</h4>
        </div>
      </div>
    )
  }
}
