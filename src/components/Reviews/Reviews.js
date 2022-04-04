import React , {useEffect, useState} from "react";
import Review from '../Reviews/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect( () =>{
fetch("review.json")
.then(res => res.json())
.then(data => setReviews(data));

  }, [])
  return (
    <div>
     {
       reviews?.map(review => <Review key={review.name} review={review}></Review>)
     }
    </div>
  );
};

export default Reviews;
