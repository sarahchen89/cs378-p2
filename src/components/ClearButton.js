import React, { useState } from 'react';

const ClearButton = ({ onClear }) => {
    return (
        <button className="clear-button" onClick={onClear}>Clear all</button>
    );
};

export default ClearButton;