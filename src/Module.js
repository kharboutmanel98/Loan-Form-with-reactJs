import React, { Fragment } from "react";
import "./FormStyle.css";
function Module({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The Form Has submited succecfully</h1> */}
          <h1 style={{ color:errorMessage? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has submited succecfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Module;