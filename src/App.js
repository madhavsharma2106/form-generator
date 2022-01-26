import { useState } from "react";
import { DynamicForm } from "./DynamicForm.js";
import Form from "./Form.jsx";
import { GenerateForm } from "./GenerateForm.jsx";
import "./App.css";

function App() {
  const [dynamicForm, setDynamicform] = useState([]);
  const addToForm = (field) => {
    setDynamicform([...dynamicForm, field]);
  };
  return (
    <div className="app">
      <GenerateForm addToForm={addToForm} />
      <br />
      <br />
      <br />
      <br />
      {/* <Form /> */}
      <DynamicForm dynamicForm={dynamicForm} />
    </div>
  );
}
export default App;
