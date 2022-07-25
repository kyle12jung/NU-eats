import React, { useEffect, useState } from 'react'
import './styles.css'
import { dummy_data } from '../../dummy_data';
import Card from '../Card/Card'

// const apiKey = '6l9ft2-DTAIZ8hECpQowMUTNa8geaA1Mw4H3t0qrNH4Ov1BzqAJ4McSYQwLmt40KHhK6CZ43SYdXc509C2pXX8Nk1hRdCWes_vs8BOoQf-HQS3EImwZD54t59nXZYnYx';
// const queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=evanston'


function CardList({ category }) {
  const [posts, setPosts] = useState({});
  const [restaurant, setRestaurant] = useState({});
	const [loading, setLoading] = useState(false);
	const [restaurantName, setRestaurantName] = useState("");
	const [categories, setCategories] = useState([]);
	const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [zipcode, setZipcode] = useState(0);
	const [phone, setPhone] = useState(0);
	const [price, setPrice] = useState('');
	const [rating, setRating] = useState(0);


	// Only run once in render
	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		setLoading(true);
		fetch('http://localhost:3001/')
		.then(response => response.json())
		.then(data => JSON.stringify(data))
		.then(stringifiedData => JSON.parse(stringifiedData))
		.then(parsedData => {
			setRestaurant(parsedData);
			setRestaurantName(parsedData[0].name)
			setLoading(false);
			console.log(parsedData[0])
			// console.log(restaurantName)
		})
		.catch((error) => {
			console.log(error);
			setLoading(false);
		});
	}

  // const posts = dummy_data.filter(data => data.category === category)
	// useEffect(() => console.log(posts), [posts])
  return (
    <li>
        {/* {
            posts.map((data) => (
                <Card key={data.name} category={data.category} name={data.name}/>
            ))
        } */}
    </li>
  )
}

export default CardList
