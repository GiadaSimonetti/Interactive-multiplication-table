import React, {useState} from "react";

const Multiplication = () => {
    const MAX_NUMBER = 144;
    const [selected, setSelected] = useState(0);
    
    const handleClick = (integer) => {
        setSelected(integer);
        console.log(integer)
      };
  
    return (
        <div data-testid="multiplication">
        <h1>Let's Learn Multiplication</h1>
        {[...Array(MAX_NUMBER)].map((x, i) =>
            <button 
            onClick={() => handleClick(i + 1)} key={i}> {i+1} </button>
            )}
        </div>
    )
};

export default Multiplication;


