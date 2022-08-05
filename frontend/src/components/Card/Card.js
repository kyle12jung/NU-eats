import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Card({ id, name, location, zipCode, coordinates, phone, price, rating }) {
	const restaurantData = {
		id: id,
		name: name,
		location: location,
		zipCode: zipCode,
		coordinates: coordinates,
		phone: phone,
		price: price,
		rating: rating
	}
	return (
		<ul>
			<p><b>Name: {name}</b></p>
			<p>Location: {location}</p>
			<p>Price: {price}</p>
			<Link 
				to={`/posts/${id}`}
				state={restaurantData}>Details</Link>
		</ul>
	)
}


export default Card;