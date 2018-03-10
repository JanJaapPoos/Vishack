import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <form style={{height: '100vh', width: '100vw', backgroundImage: `url(${image})`}} className="login-form d-flex align-items-center justify-content-center" onSubmit={() => this.props.setName(this.state.name)}>
        <div className="text-center container ">
          <div style={{maxWidth: '400px', flexGrow: 1}}>
            <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="Gebruikersnaam" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
            <div className="input-group input-group-lg mb-4">
              <input type="password" placeHolder="Wachtwoord" className="form-control input-group-lg"/>
            </div>
            <button type="submit" className="btn btn-block btn-lg btn-primary">Log in</button>
          </div>
        </div>
      </form>
    )
  }
}
