import ExpenseItem from '../ExpenseItem/Expenseltem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import Card from '../Card/Card';
import { useState } from 'react';
import { Fragment } from 'react';
const Expenses = ({ expenses }) => {
  const [selectOptions, setSelectOption] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setSelectOption(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectOptions
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          value={selectOptions}
        />
        {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <Fragment key={expense.id}>
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </Fragment>
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
