import React from 'react';

const Title = ({ imageName}) => {
    return (
        <div className="row">
            <img className="logo-img" src="https://whiterabbit.nz/wp-content/uploads/2022/01/cute-cafe-bird-logo-design.jpg" alt="Restaurant Logo"></img>
            <h3 className="description1">Fresh and Locally-sourced Ingredients for Delicious Food</h3>
            <h2 className="description2">Top UT Dining Choice!</h2>
        </div>
    );
};
export default Title;