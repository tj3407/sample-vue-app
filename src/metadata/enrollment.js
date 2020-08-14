import {
  INPUT_TYPE_TEXT,
  INPUT_TYPE_EMAIL,
  INPUT_TYPE_PASSWORD,
} from "../constants/input-field-types";
import {
  INPUT_LABEL_EMAIL,
  INPUT_LABEL_FIRST_NAME,
  INPUT_LABEL_LAST_NAME,
  INPUT_LABEL_PASSWORD,
  INPUT_LABEL_CONFIRM_PASSWORD,
  INPUT_LABEL_COUNTRY,
  INPUT_LABEL_COMPANY,
} from "../constants/input-labels";

const enrollmentFields = [
  {
    name: "email",
    label: INPUT_LABEL_EMAIL,
    type: INPUT_TYPE_EMAIL,
  },
  {
    name: "firstName",
    label: INPUT_LABEL_FIRST_NAME,
    type: INPUT_TYPE_TEXT,
  },
  {
    name: "lastName",
    label: INPUT_LABEL_LAST_NAME,
    type: INPUT_TYPE_TEXT,
  },
  {
    name: "country",
    label: INPUT_LABEL_COUNTRY,
    type: INPUT_TYPE_TEXT,
  },
  {
    name: "company",
    label: INPUT_LABEL_COMPANY,
    type: INPUT_TYPE_TEXT,
  },
  {
    name: "password",
    label: INPUT_LABEL_PASSWORD,
    type: INPUT_TYPE_PASSWORD,
  },
  {
    name: "confirmPassword",
    label: INPUT_LABEL_CONFIRM_PASSWORD,
    type: INPUT_TYPE_PASSWORD,
  },
];

export default enrollmentFields;
