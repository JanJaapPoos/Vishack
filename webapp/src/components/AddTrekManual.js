import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div className="trek align-items-center login-form   justify-content-center d-flex" style={{backgroundImage: `url(${image})`, height: '100vh'}}>
        <div className="trek-block " style={{maxWidth: '400px', flexGrow: 1}}>
        <h1>Add trek records</h1>
          <form className="" onSubmit={() => this.props.setName(this.state.name)}>

          <div className="add-trek-manual-block">
            <div className="text-center container ">
              <div>
                <h3 class="text-info">General trek records</h3>
                <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="10/03/2018 13:20" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="End date and time" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="51°37'  03°20'" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="4,5 knots" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
              </div>
            </div>
            <div className="text-center container ">
              <div>
                <h3 class="text-info">Trek lines</h3>
                <table class="tg">
                  <tr>
                    <th class="">Species</th>
                    <th class="">Note</th>
                    <th class="">Weight</th>
                    <th class=""></th>
                  </tr>
                  <tr>
                    <td class="">Tong</td>
                    <td class=""></td>
                    <td class="">15 kg</td>
                  </tr>
                  <tr>
                    <td class="">Tong</td>
                    <td class="">BMS</td>
                    <td class="">1 kg</td>
                  </tr>
                  <tr>
                    <td class="">Rog</td>
                    <td class=""></td>
                    <td class="">2 kg</td>
                    <td class="">
                      <i className="material-icons">warning</i>
                    </td>
                  </tr>
                  <tr>
                    <td class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle notsubmit" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Species
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Blonde rog</a>
                        <a class="dropdown-item" href="#">Bot</a>
                        <a class="dropdown-item" href="#">Gladde/gevlekte rog</a>
                        <a class="dropdown-item" href="#">Grauwe poon</a>
                        <a class="dropdown-item" href="#">Heek</a>
                        <a class="dropdown-item" href="#">Heilbot</a>
                        <a class="dropdown-item" href="#">Inktvis</a>
                        <a class="dropdown-item" href="#">Koolvis</a>
                        <a class="dropdown-item" href="#">Krab</a>
                        <a class="dropdown-item" href="#">Krabbenpoten</a>
                        <a class="dropdown-item" href="#">Kreeft</a>
                        <a class="dropdown-item" href="#">Langoestine</a>
                        <a class="dropdown-item" href="#">Etc.</a>
                      </div>
                    </td>
                    <td class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle notsubmit" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Note
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">BMS</a>
                        <a class="dropdown-item" href="#">Etc.</a>
                      </div>
                    </td>
                    <td class="">
                      <div className="input-group notsubmit"><input type="text" placeHolder="Weight (kg)" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="text-center container ">
              <div>
                <h3 class="text-info">Personal notes</h3>
                <div className="input-group input-group-lg mb-4"><textarea placeHolder="" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
              </div>
            </div>
            <button type="submit" className="btn btn-block btn-lg btn-primary">Submit</button>

          </div>

          </form>
        </div>
      </div>
    )
  }
}
