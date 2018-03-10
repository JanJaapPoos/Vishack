import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  state = {}
  render() {
    return (
      <div className="add-trek">
        <div
          className="add-trek-manual"
          style={{ maxWidth: '400px', flexGrow: 1 }}
        >
          <h1>Noteer trekgegevens</h1>
          <form
            style={{
              height: '100vh',
              width: '100vw',
              backgroundImage: `url(${image})`
            }}
            className="login-form d-flex align-items-center justify-content-center"
          >
            <div className="add-trek-manual-block">
              <div className="text-center container ">
                <div>
                  <h4>Algemene trekgegevens</h4>
                  <div className="input-group input-group-lg mb-4">
                    <input
                      type="datetime-local"
                      placeholder="Begindatum en -tijd"
                      className="form-control"
                      value={this.state.begin}
                      onChange={e => this.setState({ begin: e.target.value })}
                    />
                  </div>
                  <div className="input-group input-group-lg mb-4">
                    <input
                      type="datetime-local"
                      placeholder="Einddatum en -tijd"
                      className="form-control"
                      value={this.state.end}
                      onChange={e => this.setState({ end: e.target.value })}
                    />
                  </div>
                  <div className="input-group input-group-lg mb-4">
                    <input
                      type="text"
                      placeholder="51°37'; 03°20'; 4,5 knopen"
                      className="form-control"
                      value={this.state.koers}
                      onChange={e => this.setState({ koers: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="add-trek-manual-block">
              <div className="text-center container ">
                <div>
                  <h4>Trekregels</h4>
                  <table className="tg">
                    <tr>
                      <th className="">Vissoort</th>
                      <th className="">Opmerking</th>
                      <th className="">Gewicht</th>
                      <th className="" />
                    </tr>
                    <tr>
                      <td className="">Tong</td>
                      <td className="" />
                      <td className="">15 kg</td>
                    </tr>
                    <tr>
                      <td className="">Tong</td>
                      <td className="">BMS</td>
                      <td className="">1 kg</td>
                    </tr>
                    <tr>
                      <td className="">Rog</td>
                      <td className="" />
                      <td className="">2 kg</td>
                      <td className="">
                        <i className="material-icons">warning</i>
                      </td>
                    </tr>
                    <tr>
                      <td className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Vissoort
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Blonde rog
                          </a>
                          <a className="dropdown-item" href="#">
                            Bot
                          </a>
                          <a className="dropdown-item" href="#">
                            Gladde/gevlekte rog
                          </a>
                          <a className="dropdown-item" href="#">
                            Grauwe poon
                          </a>
                          <a className="dropdown-item" href="#">
                            Heek
                          </a>
                          <a className="dropdown-item" href="#">
                            Heilbot
                          </a>
                          <a className="dropdown-item" href="#">
                            Inktvis
                          </a>
                          <a className="dropdown-item" href="#">
                            Koolvis
                          </a>
                          <a className="dropdown-item" href="#">
                            Krab
                          </a>
                          <a className="dropdown-item" href="#">
                            Krabbenpoten
                          </a>
                          <a className="dropdown-item" href="#">
                            Kreeft
                          </a>
                          <a className="dropdown-item" href="#">
                            Langoestine
                          </a>
                          <a className="dropdown-item" href="#">
                            Leng
                          </a>
                          <a className="dropdown-item" href="#">
                            Makreel
                          </a>
                          <a className="dropdown-item" href="#">
                            Mul
                          </a>
                          <a className="dropdown-item" href="#">
                            Pieterman
                          </a>
                          <a className="dropdown-item" href="#">
                            Plashaai/gladde haai
                          </a>
                          <a className="dropdown-item" href="#">
                            Rode poon
                          </a>
                          <a className="dropdown-item" href="#">
                            Ruwe/stekelrog
                          </a>
                          <a className="dropdown-item" href="#">
                            Schar
                          </a>
                          <a className="dropdown-item" href="#">
                            Schartong
                          </a>
                          <a className="dropdown-item" href="#">
                            Schelvis
                          </a>
                          <a className="dropdown-item" href="#">
                            Sint Jacobsschelp
                          </a>
                          <a className="dropdown-item" href="#">
                            Snotdolf
                          </a>
                          <a className="dropdown-item" href="#">
                            Steenbolk /steenwijting
                          </a>
                          <a className="dropdown-item" href="#">
                            Tongschar
                          </a>
                          <a className="dropdown-item" href="#">
                            Wijting
                          </a>
                          <a className="dropdown-item" href="#">
                            Wulk
                          </a>
                          <a className="dropdown-item" href="#">
                            Zeebaars
                          </a>
                          <a className="dropdown-item" href="#">
                            Zeeduivel
                          </a>
                          <a className="dropdown-item" href="#">
                            Zeekat
                          </a>
                          <a className="dropdown-item" href="#">
                            Zeewolf
                          </a>
                          <a className="dropdown-item" href="#">
                            Zonnevis
                          </a>
                        </div>
                      </td>
                      <td className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Opmerking
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            BMS
                          </a>
                          <a className="dropdown-item" href="#">
                            Etc.
                          </a>
                        </div>
                      </td>
                      <td className="">
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Gewicht"
                            className="form-control"
                            onChange={e =>
                              this.setState({ name: e.target.value })
                            }
                          />
                        </div>
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
                  <div className="input-group input-group-lg mb-4">
                    <textarea
                      placeholder="Persoonlijke notities"
                      className="form-control"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="add-trek-manual-block">
              <button
                type="submit"
                className="btn btn-block btn-lg btn-primary"
              >
                Voer in
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
