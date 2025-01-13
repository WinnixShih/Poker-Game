import React, { useState, useEffect } from "react";
import PokerCard from "./PokerCard";

function PlayerCard({ reset }) {
    const [hand1, setHand1] = useState(null);
    const [hand2, setHand2] = useState(null);

    const handleClick1 = (e) => {
        setHand1(Math.floor(Math.random() * 13) + 1);
    }
    const handleClick2 = (e) => {
        setHand2(Math.floor(Math.random() * 13) + 1);
    }

    useEffect(() => {
        if (reset) {
            setHand1(null);
            setHand2(null);
        }
    }, [reset]);

    return (
        <div className="d-flex gap-2">
            <PokerCard onClick={handleClick1} cardNum={hand1}/>
            <PokerCard onClick={handleClick2} cardNum={hand2}/>
        </div>
    )
}

export default PlayerCard;