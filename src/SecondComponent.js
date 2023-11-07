function SecondComponent({ checked, handleChange, inputName }) {
    return (
      <>
        <label> {inputName}</label>
        <input
          type="checkbox"
          value={checked}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </>
    );
  }
  
  export default SecondComponent;
  
  // valueEmployee, handleChangEmployee, inputNameEmployee;