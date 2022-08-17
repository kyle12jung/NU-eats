import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
  return (
    <section className='header'>
      <div className='header-link'>
        <Link 
          className='title'
					to={`/`}>
					NU Eats
				</Link>
        <Link 
        className='about'
					to={`/about`}>
					About
				</Link>
      </div>
      <h2><b>Let's EAT!</b></h2>
      <h2>What are you craving?</h2>	
    </section>
  )
}
