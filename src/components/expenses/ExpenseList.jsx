import React from "react";
import { styled } from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
  // const content =
  // 	expenses.length === 0 ? (
  // 		<h1 className='expenses-list__fallback'>No Expenses</h1>
  // 	) : (
  // <ul className='expenses-list'>
  // 	{expenses.map((expense) => {
  // 		return (
  // 			<ExpenseItem
  // 				onDeleteExpense={onDeleteExpense}
  // 				date={expense.date}
  // 				title={expense.title}
  // 				id={expense.id}
  // 				amount={expense.amount}
  // 			/>
  // 		)
  // 	})}
  // </ul>
  // 	)
  // return content

  return (
    <div>
      {expenses.length === 0 && (
        <ExpensesListFallback>No Expenses</ExpensesListFallback>
      )}
      {expenses.length > 0 && (
        <ExpensesList>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                onDeleteExpense={onDeleteExpense}
                date={expense.date}
                title={expense.title}
                id={expense.id}
                amount={expense.amount}
              />
            );
          })}
        </ExpensesList>
      )}
    </div>
  );
};
const ExpensesListFallback = styled("h1")`
  color: white;
  text-align: center;
`;
const ExpensesList = styled("ul")`
  list-style: none;
  padding: 0;
`;
export default ExpenseList;
