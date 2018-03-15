import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div className="trek" style={{height: '100vh', backgroundImage: `url(${image})`}}>
        <h1>Share trekgegevens</h1>
        <div className="row">
          <div className="col-lg-4 trek-block" align="center">
            <div className="choice-button">
            <i className="material-icons">supervisor_account</i>
            <a href="#"><h4>Share eLog with government (NVWA)</h4></a>
            </div>

          </div>
          <div className="col-lg-4 trek-block" align="center">
            <div className="choice-button">
            <i className="material-icons">work</i>
            <a href="#"><h4>Share Pulse Data Sheet (PDS) with PO</h4></a>
            </div>

          </div>
          <div className="col-lg-4 trek-block" align="center">
            <div className="choice-button">
            <i className="material-icons">gavel</i>
            <a href="#"><h4>Share catch with fish auction</h4></a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
