import React, { useState } from 'react';
const OrderButton = ({ onOrder }) => {
    return (
        <button className="order-button" onClick={onOrder}>Order</button>
    );
};

export default OrderButton;