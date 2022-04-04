import React from "react";
import '../Navbar/Navbar.css';
const Home = () => {
  return (
   <div className="container">
     {/* header part */}
      <div className="flex">
      <div className="text-center my-5 px-10"> 
      <h1 className="text-5xl font-bold my-5 text-red-700">Click the Best picture</h1>
      <h1 className="text-5xl font-semi-bold my-5 text-purple-700">Your best camera</h1>
      <p className="text-3xl ">Buy the best camera of the market from us. Don't miss the chance. Come fast and grab the deal</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Live Demo</button>
      </div>

      <div>
      <img src="https://m.media-amazon.com/images/I/61HRnUdvv6L._AC_SL1000_.jpg" alt=""></img>
      </div>
    </div>
{/* Review part */}
<div>
  <h1 className="text-center font-bold text-5xl">Reviews</h1>
</div>
   </div>
  );
};

export default Home;
