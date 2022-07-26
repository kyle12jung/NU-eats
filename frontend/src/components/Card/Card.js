import React, { useEffect, useState } from 'react'
import './styles.css'

function Card({ key, name, location, zipCode, coordinates, phone, price, rating }) {

	return (
		<ul>
			<p><b>Name: {name}</b></p>
			<p>Location: {location}</p>
			<p>Price: {price}</p>
		</ul>
	)
}


export default Card