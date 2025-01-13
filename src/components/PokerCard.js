import React from 'react';

function PokerCard({ onClick, cardNum }) {
    return (
        <div 
            className='card text-center border-secondary' 
            style={{ width: "80px", height: "120px", backgroundColor: cardNum ? "white" : "#d3d3d3" }}
            onClick={onClick}
        >
            {cardNum ? <h3 className='card-title'>{cardNum}</h3> : <p>See hand</p>}
        </div>
    )
}

export default PokerCard;