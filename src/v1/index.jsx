import Form from "../Form";
import { template } from "./template";

export const V1 = () => {
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h1>Employeee Data</h1>
      <Form template={template} onSubmit={onSubmit} />
    </>
  );
};
