import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div className="add-trek">
        <div className="add-trek-manual" style={{maxWidth: '400px', flexGrow: 1}}>
          <h1>Noteer trekgegevens</h1>
          <form style={{height: '100vh', width: '100vw', backgroundImage: `url(${image})`}} className="login-form d-flex align-items-center justify-content-center" onSubmit={() => this.props.setName(this.state.name)}>

          <div className="add-trek-manual-block">
            <div className="text-center container ">
              <div>
                <h4>Algemene trekgegevens</h4>
                <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="10/03/2018 13:20" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                <div className="input-group input-group-lg mb-4"><input type="datetime-local" placeHolder="Einddatum en -tijd" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                <div className="input-group input-group-lg mb-4"><input type="text" placeHolder="51°37'; 03°20'; 4,5 knopen" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
              </div>
            </div>
          </div> <br/><br/><br/>
          <div className="add-trek-manual-block">
            <div className="text-center container ">
              <div>
                <h4>Trekregels</h4>
                <table class="tg">
                  <tr>
                    <th class="">Vissoort</th>
                    <th class="">Opmerking</th>
                    <th class="">Gewicht</th>
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
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Vissoort
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
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Opmerking
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">BMS</a>
                        <a class="dropdown-item" href="#">Etc.</a>
                      </div>
                    </td>
                    <td class="">
                      <div className="input-group"><input type="text" placeHolder="Gewicht (kg)" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="add-trek-manual-block">
            <div className="text-center container ">
              <div>
                <h4>Persoonlijke notities</h4>
                <div className="input-group input-group-lg mb-4"><textarea placeHolder="Persoonlijke notities" className="form-control" onChange={e => this.setState({name: e.target.value})}/></div>
              </div>
            </div>
          </div>
          <div className="add-trek-manual-block">
            <button type="submit" className="btn btn-block btn-lg btn-primary">Voer in</button>

          </div>

          </form>
        </div>
      </div>
    )
  }
}
