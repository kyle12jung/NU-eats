import React, { useState } from 'react'
import './styles.css'
import CardList from '../CardList/CardList';

const CATEGORIES = ['Burgers', 'Pizza', 'Chinese', 'Korean', 'Japanese', 'Thai', 'Mexican', 'Brunch', 'Indian', 'Mediterranean'];

function Body() {
  const [category, setCategory] = useState('');

  const handleClick = (cat) => {
    setCategory(cat)
  }

  const renderCategories = () => {
		return CATEGORIES.map((cat) => (
			<div className='category'>
				<button onClick={() => handleClick(cat)}>{cat}</button>
			</div>
		))
	}

  return (
    <section className='content'>
      <div className="categories">
        {renderCategories()}
      </div>
      <div className="cards">
        <CardList category={category}/>
      </div>
    </section>
  )
}

export default Body;