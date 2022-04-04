import React from 'react';


const Review = (props) => {
    const {name, comment, rating } = props.review;
    return (
        <div className='block p-6 m-10 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 text-center'>
            <h1 className='font-bold'>Name: {name}</h1>
            <h1>Comment: {comment}</h1>
            <h1>Rating: {rating}</h1>

        </div>
    );
};

export default Review;