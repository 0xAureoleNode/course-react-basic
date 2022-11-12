import './ChartBar.css';

const ChartBar = () => {
  return (
    <div className="chart-bar chart-bar__inner">
      <button type="submit" className="chart-bar__fill ">
        <label className="chart-bar__label">Add New Expense</label>
      </button>
    </div>
  );
};

export default ChartBar;
