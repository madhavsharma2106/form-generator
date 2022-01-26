import React from "react";
import { useForm } from "react-hook-form";
import { checkForPreReqs, FORM_CONFIG, sanitizeFormData } from "./formUtils";
import Input from "./Input";
import { generateFormTemplate } from "./generateFormTemplate";

export const GenerateForm = ({addToForm}) => {
    const {
        register,
        formState: { errors, touchedFields },
        getValues,
        handleSubmit,
        watch,
      } = useForm(FORM_CONFIG);
      
      const onSubmit = (data) => {
          console.log(data);
          addToForm(sanitizeFormData(data))
        }
    
      React.useEffect(() => {
        const subscription = watch();
        return () => subscription.unsubscribe && subscription.unsubscribe();
      }, [watch]);
    
      const renderInputs = () => {
        return generateFormTemplate.Fields.map((i) => {
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
          <h1> {generateFormTemplate.title} </h1>
          {renderInputs()}
          <input type="submit" disabled={false} />
        </form>
      );
}