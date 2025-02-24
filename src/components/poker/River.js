import React, { useState } from 'react';
import PokerCard from './PokerCard';
import PlayerCard from './PlayerCard';


function River() {
    const [riverCard, setRiverCard] = useState([]);
    const [resetHand, setResetHand] = useState(false);

    const handleClick = (e) => {
        setRiverCard((prev) => [...prev, Math.floor(Math.random() * 13) + 1]);
    }

    const handleClickNewGame = (e) => {
        setRiverCard([]);
        setResetHand((prev) => !prev);
    }

    return (
        <>
            {
                riverCard.length < 5 && 
                <button onClick={handleClick} className='btn btn-secondary btn-lg'>Draw Card</button>
            }
            {
                riverCard.length === 5 && 
                <button className='btn btn-danger btn-lg'>Done</button>
            }
            <div className='d-flex gap-2'>
                {
                    riverCard.map((card) => {
                        return <PokerCard cardNum={card} />;
                    })
                }
            </div>
            <PlayerCard reset={resetHand} />
            <button onClick={handleClickNewGame} className='btn btn-warning btn-lg'>New game</button>
        </>
    )
}

export default River;
