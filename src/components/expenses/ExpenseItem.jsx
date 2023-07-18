import React from "react";
import Card from "../UI/card/Card";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
  return (
    <Cards>
      <ExpenseDate date={date} />
      <CardDiv className="expense-item__description">
        <H2>{title}</H2>
        <ExpencePrice className="expense-item__price">
          ${amount}
        </ExpencePrice>{" "}
      </CardDiv>
      <Button
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          onDeleteExpense(id);
        }}
      >
        Delete
      </Button>
    </Cards>
  );
};
const H2 = styled("h2")`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

const Cards = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  @media (min-width: 580px) {
    .expense-item__description {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
    }

    .expense-item__price {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;

const CardDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ExpencePrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
`;

export default ExpenseItem;
