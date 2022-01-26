import React from "react";
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

  React.useEffect(() => {
    const subscription = watch();
    return () => subscription.unsubscribe && subscription.unsubscribe();
  }, [watch]);

  const submitForm = (data, e) => {
    e.target.reset();
    onSubmit(data);
  };

  const renderInputs = () => {
    return template.map((i) => {
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
