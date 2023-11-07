function MyComponent({ value, handleChange, inputName }) {
    return (
      <>
        <label> {inputName}</label>
        <input
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </>
    );
  }
  
  export default MyComponent;