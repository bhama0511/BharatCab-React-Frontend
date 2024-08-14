import React from 'react'
import './SearchRide.css'
import SearchBox from '../../components/Searchbar/searchbar'
const SearchRide = () => {
  return (
    <div className="search-ride">
      <div className='heading'>Lets find a ride for you </div>
      <div><SearchBox/></div>
    </div>

  )
}

export default SearchRide