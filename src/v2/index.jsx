import { useState } from "react";
import Form from "../Form";
import { generatorFormTemplate } from "./generatorFormTemplate";

export const V2 = () => {
  const [dynamicForm, setDynamicform] = useState([]);
  const onGeneratorFromSubmit = (field) => {
    setDynamicform([...dynamicForm, field]);
  };

  const onGeneratedFromSubmit = (value) => console.log(value);

  return (
    <>
      <h1>Form Generator</h1>
      <Form onSumit={onGeneratorFromSubmit} template={generatorFormTemplate} />

      <h1>Generated Form</h1>
      <Form template={dynamicForm} onSumit={onGeneratedFromSubmit} />
    </>
  );
};
