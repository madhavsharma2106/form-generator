import { INPUT_TYPE } from "../constants";
import { PRE_REQ } from "../utils";

export const generatorFormTemplate = [
  {
    name: "name",
    type: INPUT_TYPE.TEXT,
    title: "Field Name",
    reqired: {
      value: true,
      message: "Field Name is required",
    },
  },
  {
    name: "type",
    type: INPUT_TYPE.DROPDOWN,
    title: "Field Type",
    data: {
      options: Object.values(INPUT_TYPE),
    },
    reqired: {
      value: true,
      message: "Field Type is required",
    },
  },
  {
    name: "dropdownOptions",
    type: INPUT_TYPE.TEXT,
    title: "Comma Seperated Drop Down Values",
    reqired: {
      value: true,
      message: "DropDown Values are required",
    },
    prereqs: {
      type: PRE_REQ.equals(INPUT_TYPE.DROPDOWN),
    },
  },
  {
    name: "title",
    type: INPUT_TYPE.TEXT,
    title: "Title",
    reqired: {
      value: true,
      message: "Title is required",
    },
  },
  {
    name: "reqired",
    type: INPUT_TYPE.DROPDOWN,
    data: {
      options: ["NO", "YES"],
    },
    title: "Is The Field Mandatory?",
    reqired: {
      value: true,
      message: "Title is required",
    },
  },
  {
    name: "reqiredMessage",
    title: "Message When Requred field is not filled",
    type: INPUT_TYPE.TEXT,
    prereqs: {
      reqired: PRE_REQ.equals("YES"),
    },
  },
];
