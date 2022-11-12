import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import Card from '../Card/Card';
import { useState } from 'react';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
