import React from 'react';
import './card.css'

const Card = ({value, size}) => {

    return (
        <div className="card" >
            {value}
        </div>
    );
};

export default Card;