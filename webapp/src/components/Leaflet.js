import React from 'react'
import _ from 'lodash'
import { Map, TileLayer, CircleMarker, Popup, GeoJSON } from 'react-leaflet'
import chroma from 'chroma-js'
import week2 from '../geoJSON/week_2'
import week3 from '../geoJSON/week_3'
import week4 from '../geoJSON/week_4'
import week6 from '../geoJSON/week_6'
import route2 from '../geoJSON/route_week_2'
import route3 from '../geoJSON/route_week_3'
import route4 from '../geoJSON/route_week_4'
import route6 from '../geoJSON/route_week_6'

import 'react-select/dist/react-select.css'

const routes = [
  { value: 'week2', label: 'Week 2', map: route2 },
  { value: 'week3', label: 'Week 3', map: route3 },
  { value: 'week4', label: 'Week 4', map: route4 },
  { value: 'week6', label: 'This week', map: route6 }
]
const treks = [
  { value: 'week2', label: 'Week 2', map: week2 },
  { value: 'week3', label: 'Week 3', map: week3 },
  { value: 'week4', label: 'Week 4', map: week4 },
  { value: 'week6', label: 'This week', map: week6 }
]

const colors = ['#000', 'blue', 'green', 'orange']

export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.616667,
      lng: 3,
      zoom: 9,
      open: false,
      routes: routes.slice(-1),
      treks: treks.slice(-1)
    }
  }

  getPopup(properties, label) {
    const props = _(properties)
      .pick([
        'kabeljauw',
        'kracht (Bft)',
        'opmerkingen',
        'rog',
        'schar',
        'schatting',
        'schol',
        'tarbot',
        'tong',
        'totaal_kg',
        'wachtsman'
      ])
      .omitBy(val => val == null)
      .value()
    return (
      <span>
        <strong>
          {label} - trek {properties.trek}
        </strong>
        <br />
        {_.map(props, (v, k) => (
          <span key={k}>
            {k}: {v}
            <br />
          </span>
        ))}
      </span>
    )
  }

  render() {
    const max = _.max(
      _.map(_.flatMap(treks, 'map.features'), 'properties.totaal_kg')
    )
    const position = [this.state.lat, this.state.lng]
    const scale = chroma.scale(['red', 'yellow', 'green'])
    return [
      <div key="selector" className="map-selector text-left p-3">
        <h3>Weeks</h3>
        <div className="row ml-0 small">
          <div className="col-2 p-0">
            <span className="small">route</span>
          </div>
          <div className="col-2 p-0">
            <span className="small">treks</span>
          </div>
        </div>
        {treks.map(opt => (
          <div key={opt.value} className="row ml-0">
            <div className="col-2 px-0">
              <input
                className=""
                type="checkbox"
                value=""
                id="defaultCheck1"
                checked={
                  _.findIndex(this.state.routes, { value: opt.value }) > -1
                }
                onChange={() => {
                  return this.setState({
                    routes: _.xor(
                      [_.find(routes, { value: opt.value })],
                      this.state.routes
                    )
                  })
                }}
              />
            </div>
            <div className="col-2 px-0">
              <input
                className="ml-0"
                type="checkbox"
                value=""
                id="defaultCheck1"
                checked={
                  _.findIndex(this.state.treks, { value: opt.value }) > -1
                }
                onChange={() =>
                  this.setState({
                    treks: _.xor(
                      [_.find(treks, { value: opt.value })],
                      this.state.treks
                    )
                  })
                }
              />
            </div>
            <label className="form-check-label" htmlFor="defaultCheck1">
              {opt.label}
            </label>
          </div>
        ))}
      </div>,
      <Map key="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
        />
        {_.map(this.state.routes, ({ map, value }) => (
          <GeoJSON
            key={value}
            data={map}
            // style={this.getStyle(colors[idx])}
            // pointToLayer={this.renderPoint.bind(this)}
          />
        ))}
        {_.flatMap(this.state.treks, ({ map, label }) => {
          return _.map(map.features, point => {
            return (
              <CircleMarker
                key={`${label}${point.properties.datum}${
                  point.properties.tijd
                }`}
                center={point.geometry.coordinates.reverse()}
                radius={4}
                // fillColor={scale(point.properties.totaal_kg / max).hex()}
                color={scale(Math.sqrt(point.properties.totaal_kg / max)).hex()}
              >
                <Popup>{this.getPopup(point.properties, label)}</Popup>
              </CircleMarker>
            )
          })
        })}
      </Map>
    ]
  }
}
