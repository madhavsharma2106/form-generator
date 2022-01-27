import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { checkForPreReqs, FORM_CONFIG } from "./utils";
import Input from "./Input";

function Form(props) {
  const { template, onSubmit } = props;

  const {
    register,
    formState: { errors, touchedFields },
    getValues,
    handleSubmit,
    watch,
  } = useForm(FORM_CONFIG);

  useEffect(() => {
    const subscription = watch();
    return () => subscription.unsubscribe && subscription.unsubscribe();
  }, [watch]);

  const submitForm = (data) => {
    onSubmit(data);
  };

  const renderInputs = () => {
    return template.map((field) => {
      // Gaurd Clause that only renderds the input field if the prerequisites are met
      if (
        checkForPreReqs({
          prereqs: field.prereqs,
          getValues,
          errors,
          touchedFields,
        }) === false
      )
        return null;

      return (
        <Input
          key={field.name}
          fieldData={field}
          error={errors[field.name]}
          register={register}
        />
      );
    });
  };

  if (template.length === 0) return null;

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {renderInputs()}
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
