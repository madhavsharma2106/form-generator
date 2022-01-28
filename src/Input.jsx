import React from "react";
import { INPUT_TYPE } from "./constants";

function Input({ fieldData, register, error }) {
  const { type, name, validation, required, title, data } = fieldData;

  const text = () => (
    <>
      <p className="label"> {title}: </p>

      <input
        type={type}
        {...register(name, {
          validate: validation,
          required: required,
        })}
        placeholder={title}
      />
    </>
  );

  const dropDown = () => (
    <>
      <p className="label"> {title}: </p>
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
    <div className="input-wrapper">
      {renderInput()}
      {error && <p className="error-msg">{error.message}</p>}
    </div>
  );
}

export default React.memo(Input);
