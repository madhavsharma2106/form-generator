import React from "react";

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
      case "text":
        return text();
      case "dropdown":
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
