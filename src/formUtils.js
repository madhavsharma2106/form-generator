export const COUNTRIES = ["Choose", "India", "USA"];

export const VALIDATIONS = {
  FIRST_NAME: function (userInput) {
    if (userInput.length >= 5) return true;
    return "Min Length is 5";
  },
  AGE: function (userInput) {
    if (userInput > 5 && userInput <= 60) return true;
    return "The age should be greater than 5";
  },
  IS_IN: (validInputs) =>
    function (userInput) {
      if (validInputs.includes(userInput)) return true;
      return `The input must be one of ${validInputs.toString()}`;
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

  if (errorFound) return false;
  if (!allPreReqsHaveBeenSatisfied()) return false;

  return true;
};

export const FORM_CONFIG = {
  mode: "onBlur",
};
