import React, { useState } from 'react';

const AmountButtons = ({ count, onIncrease, onDecrease }) => {
    return (
        <div className="row">
            <div className="col-auto"><button className="amount-button" onClick={onIncrease}>+</button></div>
            <div className="col-auto">{count}</div>
            <div className="col-auto"><button className="amount-button" onClick={onDecrease} disabled={count === 0}>-</button></div>
        </div>
    );
};

export default AmountButtons;