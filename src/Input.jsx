import React from "react";
import { INPUT_TYPE } from "./constants";

function Input({ fieldData, register, error }) {
  const { type, name, validation, required, title, data } = fieldData;

  const text = () => (
    <input
      type={type}
      {...register(name, {
        validate: validation,
        required: required,
      })}
      placeholder={title}
    />
  );

  const dropDown = () => (
    <>
      {title} :
      <select
        type={type}
        {...register(name, {
          validate: validation,
          required: required,
        })}
      >
        {data.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );

  const renderInput = () => {
    switch (type) {
      case INPUT_TYPE.TEXT:
        return text();
      case INPUT_TYPE.DROPDOWN:
        return dropDown();
      default:
        return text();
    }
  };

  return (
    <>
      {renderInput()}
      <p>{error?.message}</p>
    </>
  );
}

export default React.memo(Input);
