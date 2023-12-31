import React from "react";
import { styled } from "styled-components";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <ExpenDate>
      <ExpenDateMonth>{month}</ExpenDateMonth>
      <ExpenDateYear>{year}</ExpenDateYear>
      <ExpenDateDay>{day}</ExpenDateDay>
    </ExpenDate>
  );
};
const ExpenDate = styled("div")`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const ExpenDateMonth = styled("div")`
  font-size: 0.75rem;
  font-weight: bold;
`;

const ExpenDateYear = styled("div")`
  font-size: 0.75rem;
`;
const ExpenDateDay = styled("div")`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ExpenseDate;
