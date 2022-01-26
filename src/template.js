import { INPUT_TYPE } from "./constants";
import { COUNTRIES, PRE_REQ, VALIDATIONS } from "./formUtils";

export const template = {
  title: "Basic Form to Add People",
  Fields: [
    {
      name: "firstName",
      type: INPUT_TYPE.TEXT,
      title: "First Name",
      required: {
        value: true,
        message: "Employee First Name is required",
      },
      validation: VALIDATIONS.FIRST_NAME,
    },
    {
      name: "lastName",
      type: INPUT_TYPE.TEXT,
      title: "Last Name",
      required: {
        value: true,
        message: "Employee Last Name is required",
      },
      validation: VALIDATIONS.FIRST_NAME,
    },
    {
      name: "age",
      type: INPUT_TYPE.NUMBER,
      title: "Age",
      required: {
        value: true,
        message: "Employee age is required",
      },
      validation: VALIDATIONS.IS_GREATER_THAN(
        55,
        "Age Must be greater than 55"
      ),
    },
    {
      name: "nationality",
      type: INPUT_TYPE.DROPDOWN,
      data: {
        options: COUNTRIES,
      },
      title: "Nationality",
      required: {
        value: true,
        message: "Nationality age is required",
      },
      validation: VALIDATIONS.IS_IN(COUNTRIES),
    },
    {
      name: "workplace",
      type: INPUT_TYPE.NUMBER,
      title: "Workplace",
      required: {
        value: true,
        message: "Workplace Name is required",
      },
      prereqs: {
        age: PRE_REQ.greaterThan(22),
      },
    },
    {
      name: "schoolName",
      type: INPUT_TYPE.TEXT,
      title: "School Name",
      required: {
        value: true,
        message: "School Name is required",
      },
      prereqs: {
        age: PRE_REQ.lesserThan(18),
      },
    },
    {
      name: "adhaarId",
      type: "text_with_chips",
      title: "Aadhaar ID",
      required: {
        value: false,
      },
      prereqs: {
        nationality: PRE_REQ.equals("India"),
        age: PRE_REQ.greaterThan(24),
      },
    },
    {
      name: "socialSecurityNumber",
      type: INPUT_TYPE.TEXT,
      title: "Social Security Number",
      required: {
        value: true,
        message: "SSN filling is compulsrary",
      },
      prereqs: {
        nationality: PRE_REQ.equals("USA"),
        firstName: PRE_REQ.equals("Jon Cena"),
      },
    },
  ],
};
