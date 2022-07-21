import React, { useEffect, useState } from 'react'
import './styles.css'
import { dummy_data } from '../../dummy_data';
import Card from '../Card/Card'

function CardList({ category }) {
  const posts = dummy_data.filter(data => data.category === category)
	// useEffect(() => console.log(posts), [posts])
  return (
    <li>
        {
            posts.map((data) => (
                <Card key={data.name} category={data.category} name={data.name}/>
            ))
        }
    </li>
  )
}

export default CardList
