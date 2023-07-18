import React, { useState } from "react";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const ExpensesFilter = ({
  renderedExpenses,
  expenses,
  setExpenses,
  selectedYear,
  onSelectedYearChange,
}) => {
  const [sortedExpenses, setSortedExpenses] = useState("");

  const onSelectedButtonChange = (e) => {
    setSortedExpenses(e.target.value);

    if (sortedExpenses === "vniz") {
      setExpenses([
        ...expenses.sort((a, b) => {
          return a.amount - b.amount;
        }),
      ]);
    } else {
      setExpenses([
        ...expenses.sort((a, b) => {
          return b.amount - a.amount;
        }),
      ]);
    }
    console.log(renderedExpenses);
  };

  const alfva = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return a.title.localeCompare(b.title);
      }),
    ]);
  };
  const newww = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    ]);
  };

  return (
    <ExpenFilter>
      <ExpenFilterControl>
        <StyledSelectContaner
          onChange={onSelectedButtonChange}
          value={sortedExpenses}
          id="filter"
        >
          <option value="vniz">По возрастанию</option>
          <option value="verx">По убыванию</option>
        </StyledSelectContaner>
        <Button onClick={newww}>По новизне</Button>
        <Button onClick={alfva}>По названию</Button>
        <StyledLabel htmlFor="filter">Filter by year:</StyledLabel>

        <StyledSelect
          id="filter"
          value={selectedYear}
          onChange={onSelectedYearChange}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </StyledSelect>
      </ExpenFilterControl>
    </ExpenFilter>
  );
};
const ExpenFilter = styled("div")`
  color: white;
  padding: 0 1rem;
`;
const ExpenFilterControl = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;
const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const StyledSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;
const StyledSelectContaner = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
  background-color: #510674;
  color: white;
`;
export default ExpensesFilter;
