export const COUNTRIES = ["Choose", "India", "USA"];

export const VALIDATIONS = {
  FIRST_NAME: function (userInput) {
    if (userInput.length >= 5) return true;
    return "Min Length is 5";
  },
  IS_IN: (validInputs) => (userInput) => {
    if (validInputs.includes(userInput)) return true;
    return `The input must be one of ${validInputs.toString()}`;
  },
  IS_GREATER_THAN: (num, message) => (userInput) => {
    if (userInput > num) return true;
    return message || `The input must be greater than ${num}`;
  },
  IS_BETWEEN: (lowerBound, upperBound, message) => (userInput) => {
    if (userInput >= lowerBound && userInput <= upperBound) return true;
    return (
      message ||
      `The input must be a value between ${lowerBound} and ${upperBound}`
    );
  },
};

export const PRE_REQ = {
  greaterThan: (num) => (userInput) => userInput >= num,
  lesserThan: (num) => (userInput) => userInput < num,
  equals: (text) => (userInput) => userInput === text,
};

// return true if all prereqs are satisfied
export const checkForPreReqs = (props) => {
  const { prereqs, getValues, errors, touchedFields } = props;

  // If no prereqs
  if (!prereqs) return true;

  const prereqFields = Object.keys(prereqs);

  // check if any prereq is invalid
  const errorFound = prereqFields.find((field) => errors[field]);
  if (errorFound) return false;

  const allPreReqsHaveBeenSatisfied = () => {
    let count = 0;
    for (let field in prereqs) {
      // If the field is not touched,.
      if (!touchedFields[field]) break;
      const value = getValues(field);
      if (prereqs[field](value)) count++;
    }
    return count === prereqFields.length;
  };

  if (!allPreReqsHaveBeenSatisfied()) return false;

  return true;
};

export const FORM_CONFIG = {
  mode: "onBlur",
};

export const sanitizeFormData = (data) => {
  if (data.dropdownOptions) {
    data.data = {
      options: data.dropdownOptions.split(","),
    };
    delete data.dropdownOptions;
  }
  if (data.reqired) {
    data.reqired = {
      value: true,
      message: "Input fiels is mandatory",
    };
  }
  if (data.reqiredMessage) {
    data.reqired = {
      value: true,
      message: data.reqiredMessage,
    };
    delete data.reqiredMessage;
  }

  return data;
};
