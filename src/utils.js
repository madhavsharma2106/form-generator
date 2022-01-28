export const COUNTRIES = ["Choose", "India", "USA"];

export const VALIDATIONS = {
  IS_LONGER_THAN: (num, message) => (userInput) => {
    if (userInput.length > num) return true;
    return message || `The input must be longer than ${num} chars`;
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
  GREATER_THAN: (num) => (userInput) => userInput >= num,
  LESSER_THAN: (num) => (userInput) => userInput < num,
  EQUALS: (text) => (userInput) => userInput === text,
};

// return true if all prereqs are satisfied
export const checkForPreReqs = (props) => {
  const { prereqs, getValues, errors, touchedFields } = props;

  /**
   * STEP 1: See if there are any PreReqs for this field
   * Return true if none.
   */
  if (!prereqs) return true;

  /**
   * STEP 2: See if the PreRequired Fields themselves are valid
   * Return false if an invalid field is found.
   */
  const prereqFields = Object.keys(prereqs);
  const errorFound = prereqFields.find((field) => errors[field]);
  if (errorFound) return false;

  /**
   * STEP 3: Check if Pre Required Conditions are met.
   * return false if any one is not met.
   */
  const allPreReqsHaveBeenSatisfied = () => {
    let count = 0;
    for (let field in prereqs) {
      // If the field is not touched.
      if (!touchedFields[field]) break;
      const value = getValues(field);
      if (prereqs[field](value)) count++;
    }
    return count === prereqFields.length;
  };
  if (!allPreReqsHaveBeenSatisfied()) return false;

  /**
   * STEP 4: If all conditions are met, return true
   */
  return true;
};

export const FORM_CONFIG = {
  mode: "onBlur",
};

export const sanitizeField = (data) => {
  if (data.title) {
    data.name = toCamelCase(data.title);
  }

  if (data.dropdownOptions) {
    data.data = {
      options: data.dropdownOptions.split(","),
    };
    delete data.dropdownOptions;
  }
  if (data.required === "Yes") {
    data.required = {
      value: true,
      message: data.requiredMessage || "Input fields is mandatory",
    };
  }
  if (data.required === "No") {
    data.required = {
      value: false,
    };
  }
  console.log(data);
  return data;
};

function toCamelCase(str) {
  return str[0].toUpperCase() + str.substr(1).toLowerCase();
}
