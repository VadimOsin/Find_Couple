import React, {useEffect, useState} from 'react';
import SizeMap from "../sizeMap/sizeMap";
import './listCards.css'
import Fill from "../fill/fill";
import Card from "../card/card";
import {generateExamples} from "../generateCards/generateExamples";

const ListCards = () => {
    const [cards, setCards] = useState([]);
    const [size, setSize] = useState(4);
    const [fill, setFill] = useState('examples')

    useEffect(() => {
        fillList();
    }, [size]);

    const fillList = () => {
        switch (fill) {
            case 'examples': {
                generateExamples({ setCards, size });
                break;
            }
            case 'translation': {

                break;
            }

            default: {
                generateExamples({ setCards, size });
            }
        }
    };


    return (
        <div className="listCards">
            <SizeMap setSize={setSize}/>
            <Fill setFillList={fillList}/>
            <div className="listItems" style={{ gridTemplateColumns: `repeat(${size}, auto)` }}>
                {cards.map((card, index) => (
                    <Card key={index} value={card.content} size={size} />
                ))}
            </div>

        </div>
    );
};

export default ListCards;