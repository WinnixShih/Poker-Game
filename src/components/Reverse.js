import React, { useState } from 'react';

function Reverse() {
    const [stringVal, setStringVal] = useState('');
    const [output, setOutput] = useState('');
    const container = {
        display: 'flex', 
        maxWidth: '100%', 
        margin: '16px auto',
        justifyContent: 'center',
    }
    
    const box = {
        border: 'solid 1px #000',
        width: '180px',
        display: 'flex',
        margin: '0',
        borderRadius: '2px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    }

    const handleClick = (e) => {
        const strArr = stringVal.split('');
        let newStr = '';
        for (let i = strArr.length - 1; i >= 0; i--) {
            newStr += strArr[i];
        }
        setOutput(newStr);
    }

    return (
        <div style={container}>
            <input value={stringVal} onChange={(e) => setStringVal(e.target.value)} style={{ textAlign:'center' }}/>
            <button onClick={handleClick} style={{ margin:'0 16px', backgroundColor:'dodgerblue', color:'white', border: 'solid rgb(100, 100, 100) 1px'}}>Reverse</button>
            <p style={box}>{output}</p>
        </div>
    )
}

export default Reverse;