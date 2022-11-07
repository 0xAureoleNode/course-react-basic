import './ExpenseItem.css';
// a react component is just a js function
const ExpenseItem = () => {
  return (
    // only have one root element
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
