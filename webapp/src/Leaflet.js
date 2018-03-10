import React from 'react'
import _ from 'lodash'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import Select from 'react-select'
import week2 from './geoJSON/week_2'
import week3 from './geoJSON/week_3'
import week4 from './geoJSON/week_4'
import week6 from './geoJSON/week_6'

import 'react-select/dist/react-select.css'

const options = [
  { value: 'week2', label: 'Week 2', map: week2 },
  { value: 'week3', label: 'Week 3', map: week3 },
  { value: 'week4', label: 'Week 4', map: week4 },
  { value: 'week6', label: 'Week 6', map: week6 }
]

const colors = ['#000', 'blue', 'green', 'orange']

export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 52.5,
      lng: 2,
      zoom: 7,
      open: false,
      selected: options.slice(0, 1)
    }
  }
  getStyle(color) {
    return (feature, layer) => {
      console.log(color, feature, layer);
      return {
        color: color,
        weight: 5,
        opacity: 0.65
      }
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return [
      <Select
        key="select"
        name="form-field-name"
        value={this.state.selected}
        onChange={selected => this.setState({ selected })}
        options={options}
        multi
        clearable={false}
      />,
      <Map key="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
        />
        {_.map(this.state.selected, ({ map, value }, idx) => (
          <GeoJSON key={value} data={map} style={this.getStyle(colors[idx])} />
        ))}
      </Map>
    ]
  }
}
