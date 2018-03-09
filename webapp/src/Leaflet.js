import React from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import week2 from './geoJSON/week_2'

export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 52.5,
      lng: 2,
      zoom: 7,
      open: false
    }
  }
  getStyle(feature, layer) {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
  }
  componentDidMount() {
    console.log(week2)
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={week2} style={this.getStyle} />
      </Map>
    )
  }
}
