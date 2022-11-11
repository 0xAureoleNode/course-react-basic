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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          value={selectOptions}
        />
        {expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === selectOptions
          )
          .map((expense) => (
            <Fragment key={expense.id}>
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </Fragment>
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
