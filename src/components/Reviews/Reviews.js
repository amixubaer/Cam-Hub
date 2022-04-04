import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from '../Reviews/Review';
const Reviews = () => {
  const [reviews, setReviews] = useReviews();
 
  return (
    <div>
     {
       reviews?.map(review => <Review key={review.name} review={review}></Review>)
     }
    </div>
  );
};

export default Reviews;
