import React, { useState, useContext } from "react";
import ReactContext from "../../context/react-context";

const Text2 = () => {
  const reactCtx = useContext(ReactContext);
  const [idForm, setIdForm] = useState("");

  const handleNameChange = (event) => {
    reactCtx.setIdForm(event.target.value);
  };

  return (
    <div>
      <ReactContext.Provider value={{ setIdForm, idForm }}>
        <input
          type="text"
          placeholder="required field"
          value={reactCtx.idForm}
          onChange={handleNameChange}
        ></input>
      </ReactContext.Provider>
    </div>
  );
};

export default Text2;
