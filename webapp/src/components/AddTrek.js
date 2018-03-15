import React from 'react'
import image from '../assets/login-form.jpg'

export default class Login extends React.Component {
  render() {
    return (
      <div className="trek" style={{backgroundImage: `url(${image})`}}>
        <h1>Treks</h1>
        <div className="row">
          <div className="col-lg-8 trek-block">
            <table class="tg">
              <tr>
              <th class="">Date & time</th>
              <th class="">Location</th>
              <th class="">Speed</th>
              <th class="">Weightt</th>
              <th class=""></th>
              </tr>
              <tr>
              <td class="">10/03/2018 15:03</td>
              <td class="">51°37'  03°20'</td>
              <td class="">4,5 knots</td>
              <td class="">381 kg</td>
              <td class=""><i className="material-icons">create</i></td>
              </tr>
              <tr>
              <td class="">10/03/2018 17:11</td>
              <td class="">51°37'  03°21'</td>
              <td class="">4,5 knots</td>
              <td class="">183 kg</td>
              <td class=""><i className="material-icons">create</i></td>
              </tr>
              <tr>
              <td class="">10/03/2018 18:56</td>
              <td class="">51°37'  03°23'</td>
              <td class="">4,5 knots</td>
              <td class="">385 kg</td>
              <td class=""><i className="material-icons">create</i></td>
              </tr>
              <tr>
              <td class="">10/03/2018 20:01</td>
              <td class="">51°38'  03°23'</td>
              <td class="">4,5 knots</td>
              <td class="">253 kg</td>
              <td class=""><i className="material-icons">create</i></td>
              </tr>
            </table>

          </div>
          <div className="col-lg-4 trek-block">
            <div className="choice-button">
            <i className="material-icons">system_update_alt</i>
            <a href="#">
            <h4>Import Pulse Data Sheet (PDS)</h4>
            </a>
            </div>
            <div className="choice-button">
            <a href="/add-trek-manual">
            <i className="material-icons">add_circle</i>
            <h4>Add trek data</h4>
            </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
