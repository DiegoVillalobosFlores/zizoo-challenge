import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Boats } from '../../../services';

import { InformationCard, Header } from '../../components';
import LinearProgress from "@material-ui/core/LinearProgress";
import './style.css';

const filter = (boat, filters) =>
  filters.reduce(
    (acc, filter) =>
      acc && filter.evaluate(boat),
    true
  )

const SearchPage = () => {
  const { loading, error, data } = useQuery(
    Boats.getBoats(true),
    {variables: { input: { active: true }}}
    );

  const [filters, setFilters] = useState([]);

  return (
    <div className='searchContainer'>
      <div className='headerContainer'>
        <Header filters={filters} setFilters={setFilters}/>
      </div>
      <div className='resultsContainer'>
        {loading && <LinearProgress/>}
        {error && <p>Error!</p>}
        {data && data.getBoats.filter(
          boat => filter(boat, filters)).map(
            boat =>
              (<InformationCard key={boat.id} boat={boat}/>)
        )}
      </div>
    </div>
  )
}

export default SearchPage;
