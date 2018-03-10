import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div class="add-trek">
        <h1>Voeg een trek toe</h1>
        <div className="choice-button">
          <i className="material-icons">supervisor_account</i>
          <h4>Deel eLogboek met NVWA</h4>
        </div>
        <div className="choice-button">
          <i className="material-icons">work</i>
          <h4>Deel PDS met PO</h4>
        </div>
        <div className="choice-button">
          <i className="material-icons">gavel</i>
          <h4>Deel vangst met visafslag</h4>
        </div>
      </div>
    )
  }
}
