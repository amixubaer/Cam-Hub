import React from "react";
import '../Navbar/Navbar.css';
import Review from "../Reviews/Review";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";

const Home = () => {
  const [reviews, setReviews] = useReviews();
 
  return (
   <div className="container">
     {/* header part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
      <div className="text-center my-5 px-10"> 
      <h1 className="text-5xl font-bold my-5 text-red-700">Click the Best picture</h1>
      <h1 className="text-5xl font-semi-bold my-5 text-purple-700">Your best camera</h1>
      <p className="text-3xl ">Buy the best camera of the market from us. Don't miss the chance. Come fast and grab the deal</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Live Demo</button>
      </div>

      <div>
      <img src="https://m.media-amazon.com/images/I/61HRnUdvv6L._AC_SL1000_.jpg" alt=""></img>
      </div>
    </div>
{/* Review part */}
<div>
  <h1 className="text-center font-bold text-5xl">Reviews</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {reviews.slice(0, 3).map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>

        <Link to="reviews" className="flex justify-center">
          <button className="my-10 bg-indigo-600 rounded py-2 font-bold text-cyan-50 px-20">
            See All Reviews
          </button>
        </Link>
  
</div>
   </div>
  );
};

export default Home;
