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
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapPage;

// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
//   Marker
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

// const MapPage = ({ name, coordinates }) => {
//   return (
//     <div>
//       <ComposableMap projection="geoMercator">
//         <ZoomableGroup center={[-87.6877, 42.0451]} zoom={9}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography key={geo.rsmKey} geography={geo} />
//               ))
//             }
//           </Geographies>
//           <Marker coordinates={[coordinates.longitude, coordinates.latitude]}>
//             <circle r={3} fill="#FF5533" />
//           </Marker>
//         </ZoomableGroup>
//       </ComposableMap>
//     </div>
//   );
// };

// export default MapPage;

