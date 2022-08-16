import React from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';

function MapPage({ name, coordinates }) {
  const position = [coordinates.latitude, coordinates.longitude]
  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup position={position}>
          {name}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapPage;

