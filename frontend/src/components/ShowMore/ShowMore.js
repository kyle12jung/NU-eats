import React from 'react'
import './styles.css'

const ShowMore = ({ newDataFetched, handleShowMore }) => {

  return (
    <>
      {
        !newDataFetched &&
        <button onClick={handleShowMore} className='showmore-button'>
              Show More
        </button>
      }
    </>
  )
};


export default ShowMore;


