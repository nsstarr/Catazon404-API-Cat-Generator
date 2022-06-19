import React from "react";
import styled from 'styled-components'

//styling a default button using Style Components
const Button = styled.button`
  background-color: #febd69;
  width: 105px;
  height: 40px;
  border: none;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  box-shadow: 0px 8px 15px #1c2020;
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

export function TestButton ({children, className, onClick}) {
return (
    <Button className ={className} onClick = {onClick}>
    {children}
    </Button>
)
}
