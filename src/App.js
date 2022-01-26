import { useState } from "react";
import { DynamicForm } from "./DynamicForm.js";
import Form from "./Form.jsx";
import { GenerateForm } from "./GenerateForm.jsx";

function App() {
  const [dynamicForm, setDynamicform] = useState([]);
  const addToForm = (field) => {
    setDynamicform([...dynamicForm, field]);
  };
  return (
    <>
      <GenerateForm addToForm={addToForm} />
      <br />
      <br />
      <br />
      <br />
      {/* <Form /> */}
      <DynamicForm dynamicForm={dynamicForm} />
    </>
  );
}

export default App;
