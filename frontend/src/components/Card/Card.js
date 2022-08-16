import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Card({ id, name, location, zipCode, coordinates, phone, price, rating, image }) {
	const restaurantData = {
		id: id,
		name: name,
		location: location,
		zipCode: zipCode,
		coordinates: coordinates,
		phone: phone,
		price: price,
		rating: rating,
		image: image
	}
	return (
		<ul className='card'>
			<div className='card-info'>
				<p><b>Name: {name}</b></p>
				<p>Location: {location}</p>
				<p>Rating: {rating} </p>
				<p>Price: {price}</p>
				<Link 
					to={`/posts/${id}`}
					state={restaurantData}>
					Details
				</Link>
			</div>
			<img src={image} alt='restaurant' className='card-image'/>
		</ul>
	)
}


export default Card;