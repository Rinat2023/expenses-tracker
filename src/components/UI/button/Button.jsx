import React from "react";
import { styled } from "styled-components";
// import './Button.css'

const Button = ({ children,height,  onClick, ...rest }) => {
  return (
    <ButtonStyle height={height} onClick={onClick} {...rest}>
      {children}
    </ButtonStyle>
  );
};
// const getHeight = (props) => {
//   return props.height === "51px" ? "51px" : "70px";
// };
const ButtonStyle = styled("button")`
  height: 51px;
  padding: 16px 18px 16px 18px;
  border-radius: 10px;
  background: #4a026b;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;

  button:hover,
  button:active {
    background-color: #510674;
    border-color: #510674;
  }
`;

export default Button;
