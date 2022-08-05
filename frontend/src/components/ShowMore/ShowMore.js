import React, { useEffect, useState } from 'react'

const ShowMore = ({ newDataFetched, handleShowMore }) => {
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <>
      {
        !newDataFetched &&
        <button onClick={handleShowMore}>
              Show More
        </button>
      }
      {
        newDataFetched &&
        <p>That's it!</p>
      }
    </>
  )
};


export default ShowMore;


