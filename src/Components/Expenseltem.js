// a react component is just a js function
const ExpenseItem = () => {
  return (
    // only have one root element
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
