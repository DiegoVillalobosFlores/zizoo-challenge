import React, { useState, useEffect } from 'react';
import Chip from "@material-ui/core/Chip";

import { array, func } from 'prop-types';

import './style.css'

const filtersMap = {
  years: {
    field: 'years',
    evaluate: ({ year }) => year > 2010,
  },
  length: {
    field: 'length',
    evaluate: ({ length }) => length > 15,
  }
}

const Header = ({ setFilters }) => {

  const [activeFilters, setActiveFilters] = useState([]);

  const handleClick = filter => {
    if(activeFilters.includes(filter))
      setActiveFilters(activeFilters.filter(
        f => f !== filter
      ));
    else 
      setActiveFilters([...activeFilters, filter]);
  }
  
  useEffect(() => {
    setFilters(activeFilters.map(f => filtersMap[f]))
  }, [activeFilters, setFilters])

  return (
    <div className='headerToolbarContainer'>
      <div className='yearsFilter'>
        <Chip
          label='Modern Only (2010 and newer)'
          variant={activeFilters.includes('years') ? 'default': 'outlined'}
          color='primary'
          onClick={() => handleClick('years')}
        />
      </div>
      <div className='sizeFilter'>
        <Chip
          label='Large Only (15m or more)'
          variant={activeFilters.includes('length') ? 'default': 'outlined'}
          color='primary'
          onClick={() => handleClick('length')}
        />
      </div>
    </div>
  )
}

Header.propTypes = {
  filters: array.isRequired,
  setFilters: func.isRequired,
}

export default Header;
