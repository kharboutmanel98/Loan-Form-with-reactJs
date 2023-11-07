function ThirdComponent({ value, handleChange, inputName }) {
    return (
      <>
        <label> {inputName}</label>
        <select
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
      </>
    );
  }
  
  export default ThirdComponent;
  
  // valueSalary, handleChangeSalary, inputNameSalary