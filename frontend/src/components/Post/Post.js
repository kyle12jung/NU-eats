import React from 'react'
import { useLocation } from 'react-router-dom';
import MapPage from '../MapPage/MapPage';
import './styles.css'

function Post() {
  const loc = useLocation();
  const data = loc.state;
  const { id, name, location, zipCode, coordinates, phone, price, rating } = data;

  return (
    <div className='post'>
        <h1><b>{name}</b></h1>
        <h2><b>Rating: {rating}</b></h2>
        <p>Price: {price}</p>
        <p>Location: {location}, Evanston, IL, {zipCode}</p>
        <p>Phone: {phone}</p>
        <MapPage name={name} coordinates={coordinates}/>
    </div>
  )
}

export default Post;