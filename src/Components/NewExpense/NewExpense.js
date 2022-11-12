import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setToggleButton(!toggleButton);
  };

  const [toggleButton, setToggleButton] = useState(true);
  const buttonSwitchCheck = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <div className="new-expense">
      {toggleButton === true ? (
        <button type="button" onClick={buttonSwitchCheck}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickButton={buttonSwitchCheck}
        />
      )}
    </div>
  );
};

export default NewExpense;
