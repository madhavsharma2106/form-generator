import React from "react";
import { useForm } from "react-hook-form";
import { checkForPreReqs, FORM_CONFIG } from "./formUtils";
import Input from "./Input";
import { template } from "./template";

function Form() {
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
    return () => subscription.unsubscribe();
  }, [watch]);

  const renderInputs = () => {
    return template.Fields.map((i) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> {template.title} </h1>
      {renderInputs()}
      <input type="submit" disabled={false} />
    </form>
  );
}

export default Form;
