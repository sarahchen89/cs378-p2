import React from 'react';
import AmountButtons from './AmountButtons';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, count, onIncrease, onDecrease }) => {
    return (
        <div className="row menu-item">
            <img className=" col-3 item-img" src={`images/${imageName}`} alt={description}></img>
            <div className="col-6">
                <h2 className="item-title">{title}</h2>
                <p className="item-description">{description}</p>
                <div className="row">
                    <div className="col-6">
                        <p>${price}</p>
                    </div>
                    <div className="col">
                        <AmountButtons count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuItem;
