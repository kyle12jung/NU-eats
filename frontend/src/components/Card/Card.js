import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Post from '../Post/Post'

function Card({ key, name, location, zipCode, coordinates, phone, price, rating }) {

	return (
		<ul>
			<p><b>Name: {name}</b></p>
			<p>Location: {location}</p>
			<p>Price: {price}</p>
			<Post 
              name={name}
              location={location.address1}
              zipCode={zipCode}
              coordinates={coordinates}
              phone={phone}
              price={price}
              rating={rating}
              />
		</ul>
	)
}


export default Card