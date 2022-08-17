import React, { useEffect, useState, useRef } from 'react'
import './styles.css'
// import { dummy_data } from '../../dummy_data';
import Card from '../Card/Card';
import ShowMore from '../ShowMore/ShowMore';

function CardList({ category }) {
  const [restaurants, setRestaurants] = useState([]);
  // visible state for the showmore component
  const visible = useRef(false);
  const newDataFetched = useRef(false)
  const prevRestaurants = useRef([]);
  const nothingToFetch = useRef(false);


  const fetchData = async (category, id=0) => {
    const response = await fetch(`http://localhost:3001/${category}/${id}`);
    const data = await response.json();
    const stringifiedData = await JSON.stringify(data);
    const parsedData = await JSON.parse(stringifiedData);
    const evanstonFiltered = parsedData.filter(unfiltered => unfiltered.location.zip_code === '60201');
    console.log(evanstonFiltered)
    nothingToFetch.current = true ? !evanstonFiltered.length : false;
    const allRestaurants = [...prevRestaurants.current, ...evanstonFiltered]
    setRestaurants(allRestaurants)
    visible.current = true;
    if (id === 0) newDataFetched.current = false;
    console.log(newDataFetched.current)
    // console.log(visible.current)
  }
  
  const handleShowMore = () => {
    newDataFetched.current = true;
    visible.current = false;
    console.log(newDataFetched.current)
    fetchData(category, 50)
      .catch(console.error);
  }

  useEffect(() => {
    prevRestaurants.current = restaurants;
  }, [restaurants])

	// Only run whenever category changes
	useEffect(() => {
    prevRestaurants.current = [];
    fetchData(category)
    .catch(console.error);
	}, [category])


  return (
    <>
      <li>
          {
            restaurants.map((restaurant) => (
              // console.log(restaurant)
              <Card 
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                location={restaurant.location.address1}
                zipCode={restaurant.location.zip_code}
                coordinates={restaurant.coordinates}
                phone={restaurant.phone}
                price={restaurant.price}
                rating={restaurant.rating}
                image={restaurant.image_url}
                />
            ))
          }
      </li>
      {
        visible.current && <ShowMore restaurants={restaurants} newDataFetched={newDataFetched.current} handleShowMore={handleShowMore}/>
      }
      {
        newDataFetched.current && nothingToFetch &&
        <p className='list-end'>That's it!</p>
      }
    </>
  )
}

export default CardList
