import React, { useEffect, useState } from 'react'
import './styles.css'

const apiKey = '6l9ft2-DTAIZ8hECpQowMUTNa8geaA1Mw4H3t0qrNH4Ov1BzqAJ4McSYQwLmt40KHhK6CZ43SYdXc509C2pXX8Nk1hRdCWes_vs8BOoQf-HQS3EImwZD54t59nXZYnYx';
// const queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=evanston'


function Card({ category, name }) {
	const [todo, setTodo] = useState({});
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		setLoading(true);
		fetch('http://localhost:3001/api')
		.then(response => response.json())
		.then(data => {
			setTodo(data);
			setLoading(false);
			console.log(data)
		})
		.catch((error) => {
			console.log(error);
			setLoading(false);
		});
	}

	return (
		<ul><p>Name: {name}</p></ul>
	)
}


export default Card