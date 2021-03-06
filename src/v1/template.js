import { INPUT_TYPE } from "../constants";
import { COUNTRIES, PRE_REQ, VALIDATIONS } from "../utils";

export const template = [
  {
    name: "fullName",
    type: INPUT_TYPE.TEXT,
    title: "Full Name",
    required: {
      value: true,
      message: "Full Name is Required",
    },
    validation: VALIDATIONS.IS_LONGER_THAN(
      5,
      "Name should be longer than 5 characters"
    ),
  },
  {
    name: "age",
    type: INPUT_TYPE.NUMBER,
    title: "Age",
    required: {
      value: true,
      message: "Employee age is required",
    },
    validation: VALIDATIONS.IS_GREATER_THAN(5, "Age Must be greater than 5"),
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
    type: INPUT_TYPE.TEXT,
    title: "Workplace",
    required: {
      value: true,
      message: "Workplace Name is required",
    },
    prereqs: {
      age: PRE_REQ.GREATER_THAN(22),
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
      age: PRE_REQ.LESSER_THAN(18),
    },
  },
  {
    name: "ssn",
    type: INPUT_TYPE.NUMBER,
    title: "Social Security Number",
    prereqs: {
      age: PRE_REQ.GREATER_THAN(18),
      nationality: PRE_REQ.EQUALS("USA"),
    },
  },
];
