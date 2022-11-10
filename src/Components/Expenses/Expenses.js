import ExpenseItem from '../ExpenseItem/Expenseltem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import Card from '../Card/Card';
import { useState } from 'react';
const Expenses = ({ expenses }) => {
  const [selectOption, setSelectOption] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setSelectOption(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          value={selectOption}
        />
        {expenses.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
