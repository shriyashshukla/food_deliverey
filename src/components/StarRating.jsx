import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 1; i <= fullStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-filled" />);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon icon={faStarHalf} key="half" className="star-half" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 1; i <= emptyStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={`empty-${i}`} className="star-empty" />);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;