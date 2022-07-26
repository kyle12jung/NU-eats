import React, { useEffect, useState } from 'react'
import './styles.css'
// import { dummy_data } from '../../dummy_data';
import Card from '../Card/Card'


function CardList({ category }) {
  const [restaurants, setRestaurants] = useState([]);

	// Only run whenever category changes
	useEffect(() => {
    const fetchData = async (category) => {
      const response = await fetch(`http://localhost:3001/${category}/0`);
      const data = await response.json();
      const stringifiedData = await JSON.stringify(data);
      const parsedData = await JSON.parse(stringifiedData);
      const evanstonFiltered = parsedData.filter(unfiltered => unfiltered.location.zip_code === '60201');
      console.log(evanstonFiltered)
      setRestaurants(evanstonFiltered)
    }
    fetchData(category)
    .catch(console.error);
	}, [category])


  return (
    <li>
        {
          restaurants.map((restaurant) => (
            // console.log(restaurant)
            <Card 
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              location={restaurant.location.address1}
              zipCode={restaurant.zip_code}
              coordinates={restaurant.coordinates}
              phone={restaurant.phone}
              price={restaurant.price}
              rating={restaurant.rating}
              />
          ))
        }
    </li>
  )
}

export default CardList
