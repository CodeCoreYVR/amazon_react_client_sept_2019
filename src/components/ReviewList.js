import React from 'react';
import ReviewDetails from './ReviewDetails';

function ReviewList(props) {
  console.log(props);
  const { reviews, onReviewDeleteClick = () => {} } = props;
  return reviews.map((review, i) => <ReviewDetails key={i} {...review} onDeleteClick={onReviewDeleteClick}/>);
}

export default ReviewList;
