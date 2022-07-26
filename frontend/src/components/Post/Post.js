import React from 'react'
import { useLocation } from 'react-router-dom';


function Post() {
  const loc = useLocation();
  const data = loc.state;
  console.log(data);
  const { id, name, location, zipCode, coordinates, phone, price, rating } = data;
  
  return (
    <div className='post'>
        <h1><b>{name}</b></h1>
        <h2><b>Rating: {rating}</b></h2>
        <p>Price: {price}</p>
        <p>Location: {location}, Evanston, IL, {zipCode}</p>
        <p>Phone: {phone}</p>
    </div>
  )
}

export default Post;