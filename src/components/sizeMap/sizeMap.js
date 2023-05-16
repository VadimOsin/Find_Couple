import React from 'react';
import './sizeMap.css'

const SizeMap = ({setSize}) => {
    return (
        <div className="sizeMap">
            <div>Выберете размер поля</div>
            <select onChange={(event => setSize(event.target.value))} className="selectSize">
                <option>4</option>
                <option>6</option>
                <option>8</option>
            </select>
        </div>
    );
};

export default SizeMap;