import React, {useState} from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ isHighlighted }) => (isHighlighted ? 'red' : 'yellow')};
`

const Multiplication = () => {
    const [selected, setSelected] = useState(0);
    const MAX_NUMBER = 144;
    
    const handleClick = (integer) => {
        setSelected(integer);
        console.log(integer)
      };

    const isDivisible = (i, clickedNumber) => {
        return (i % clickedNumber === 0)
    }

    return (
        <div data-testid="multiplication">
            <h1>Let's Learn Multiplication</h1>
            {[...Array(MAX_NUMBER)].map((x, i) =>
                <Button 
                    isHighlighted={isDivisible(i + 1 , selected)}
                    onClick={() => handleClick(i + 1)} key={i}> { i + 1 }
                </Button>
            )}
        </div>
    )
};

export default Multiplication;