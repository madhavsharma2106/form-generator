import React from "react";
import { useForm } from "react-hook-form";
import { checkForPreReqs, FORM_CONFIG } from "./formUtils";
import Input from "./Input";

export const DynamicForm = ({ dynamicForm }) => {
  console.log(dynamicForm);
  const {
    register,
    formState: { errors, touchedFields },
    getValues,
    handleSubmit,
    watch,
  } = useForm(FORM_CONFIG);

  const onSubmit = (data) => console.log(data);

  React.useEffect(() => {
    const subscription = watch();
    return () => subscription.unsubscribe && subscription.unsubscribe();
  }, [watch]);

  const renderInputs = () => {
    return dynamicForm.map((i) => {
      if (
        checkForPreReqs({
          prereqs: i.prereqs,
          getValues,
          errors,
          touchedFields,
        }) === false
      )
        return null;

      return (
        <Input
          key={i.name}
          fieldData={i}
          error={errors[i.name]}
          register={register}
        />
      );
    });
  };

  if (dynamicForm.length === 0) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> This form is generated On The fly</h1>
      {renderInputs()}
      <input type="submit" disabled={false} />
    </form>
  );
};
