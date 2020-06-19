import React from 'react';
import { string, number, shape } from 'prop-types';

import Paper from "@material-ui/core/Paper";

import {
  Grade,
  GradeOutlined,
  NavigateBefore,
  NavigateNext,
  KingBed,
  DirectionsBoat,
  People,
} from '@material-ui/icons'
import './style.css';

const capitalize = value =>
  value.charAt(0) + value.slice(1).toLowerCase();

const InformationCard = ({ boat }) => {
  const {
    name,
    price,
    imageUrl,
    length,
    skipper,
    cabins,
    guests,
    type,
    year,
    reviews,
    locality,
    country,
  } = boat

  return (<div className='informationCardContainer'>
    <Paper elevation={2}>
      <div className='boatContainer'>
        <div className='boatImageContainer'>
          <img src={imageUrl} alt='boat image'/>
        </div>
        <div className='boatTitleText name'>
          {name} {length}m {capitalize(type)} ({year})
        </div>
        <div className='boatTitleText price'>${price}/Day</div>
        <div className='boatReviewsContainer'>
          {[...Array(5)].map((value, index) =>
            index <= reviews.score
              ? <Grade className='boatReviewStar'/>
              : <GradeOutlined className='boatReviewStar'/>
          )}
          <div className='boatReviewReadReview'>Read Reviews</div>
        </div>
        <div className='boatLocation'>{locality}, {country}</div>
        <div className='boatDetailContainer skipper'>
          <DirectionsBoat/>
          <div className='boatDetailText'>Skipper: </div>
          <div className='boatDetailText'>{capitalize(skipper)}</div>
        </div>
        <div className='boatDetailContainer cabins'>
          <KingBed/>
          <div className='boatDetailText'>Cabins:</div>
          <div className='boatDetailText'>{cabins}</div>
        </div>
        <div className='boatDetailContainer guests'>
          <People/>
          <div className='boatDetailText'>Guests:</div>
          <div className='boatDetailText'>Up to {guests}</div>
        </div>
        <div className='boatDetailText length'>Length: {length}m</div>
        <div className='boatDetailText booking'>Instant booking</div>
        <div className='boatDetailsButton'>
          View Details
          <NavigateNext/>
        </div>
      </div>
    </Paper>
  </div>)
};

InformationCard.propTypes = {
  boat: shape({
    cabins: number.isRequired,
    country: string.isRequired,
    guests: number.isRequired,
    imageUrl: string.isRequired,
    length: number.isRequired,
    locality: string.isRequired,
    marina: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    reviews: shape({
      total: number.isRequired,
      score: number.isRequired,
    }),
    skipper: string.isRequired,
    type: string.isRequired,
    year: number.isRequired,
  })
}

export default InformationCard;
