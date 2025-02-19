import React, { useState } from 'react';

const Subtotal = ({ totalCost }) => {
    return (
        <div className="subtotal">Subtotal ${totalCost.toFixed(2)}</div>
    );

};

export default Subtotal;