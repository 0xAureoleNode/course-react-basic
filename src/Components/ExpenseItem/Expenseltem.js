import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import { useState } from 'react';
// a react component is just a js function
const ExpenseItem = ({ date, title, amount }) => {
  const [itemTitle, setItemTitle] = useState(title);
  const clickHandler = () => {
    setItemTitle('updated!');
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
