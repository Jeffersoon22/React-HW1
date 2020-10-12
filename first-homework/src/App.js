import React, { useState } from "react";
import UserInput from "./components/UserInput ";
import UserOutput from "./components/UserOutput";

function App() {
  const inputChange = (event) => {
    changed(event);
  };
  const [inputed, changed] = useState();
  return (
    <div>
      <UserInput changee={inputChange} />
      <UserOutput inputed={inputed} />
    </div>
  );
}
export default App;

