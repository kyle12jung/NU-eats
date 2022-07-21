import React, { useEffect } from 'react'
import './styles.css'

// const yelp = require('yelp-fusion');
// const apiKey = '6l9ft2-DTAIZ8hECpQowMUTNa8geaA1Mw4H3t0qrNH4Ov1BzqAJ4McSYQwLmt40KHhK6CZ43SYdXc509C2pXX8Nk1hRdCWes_vs8BOoQf-HQS3EImwZD54t59nXZYnYx';

// const searchRequest = {
//   // term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };
// const client = yelp.client(apiKey);

function Card({ category, name }) {
	
	// useEffect(() => {
	// 	fetch('https://api.yelp.com/v3/businesses/search?location=evanston', {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	}
	// 	})
	// 	.then(res => {
	// 		return res.json
	// 	})
	// 	.then(data => console.log(data))
	// })

	// useEffect(() => {
	// 	client.search(searchRequest).then(response => {
	// 		const firstResult = response.jsonBody.businesses[0];
	// 		const prettyJson = JSON.stringify(firstResult, null, 4);
	// 		console.log(prettyJson);
	// 	}).catch(e => {
	// 		console.log(e);
	// 	});
	// })

	return (
		<ul><p>Name: {name}</p></ul>
	)
}


export default Card