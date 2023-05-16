import React from 'react';
import './fill.css'

const Fill = ({setFillList}) => {
    return (
        <div className="fill">
            <div className="fill_item" onClick={() => setFillList("examples")}>
                ПРИМЕРЫ
            </div>
            <div className="fill_item" onClick={() => setFillList("translation")}>
                РУССКИЕ - АНГЛИЙСКИЕ СЛОВА
            </div>
            <div className="fill_item" onClick={() => setFillList("colors")}>
                ЦВЕТА
            </div>
        </div>
    );
};


export default Fill;