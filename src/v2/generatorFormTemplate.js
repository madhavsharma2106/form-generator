import { INPUT_TYPE } from "../constants";
import { PRE_REQ, VALIDATIONS } from "../utils";

export const generatorFormTemplate = [
  {
    name: "title",
    type: INPUT_TYPE.TEXT,
    title: "Title",
    required: {
      value: true,
      message: "Title is required",
    },
  },
  {
    name: "type",
    type: INPUT_TYPE.DROPDOWN,
    title: "Field Type",
    data: {
      options: Object.values(INPUT_TYPE),
    },
    required: {
      value: true,
      message: "Field Type is required",
    },
  },
  {
    name: "dropdownOptions",
    type: INPUT_TYPE.TEXT,
    title: "Comma Seperated Drop Down Values",
    required: {
      value: true,
      message: "DropDown Values are required",
    },
    prereqs: {
      type: PRE_REQ.equals(INPUT_TYPE.DROPDOWN),
    },
  },

  {
    name: "required",
    type: INPUT_TYPE.DROPDOWN,
    data: {
      options: ["No", "Yes"],
    },
    title: "Is The Field Mandatory?",
    required: {
      value: true,
      message: "Title is required",
    },
  },
  {
    name: "requiredMessage",
    title: "Message When Requred field is not filled",
    type: INPUT_TYPE.TEXT,
    prereqs: {
      required: PRE_REQ.equals("Yes"),
    },
  },
  {
    name: "validations",
    title: "Any Validations",
    type: INPUT_TYPE.DROPDOWN,
    data: {
      options: Object.keys(VALIDATIONS),
    },
  },
];
