const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";

  if (validator.isEmpty(data.school)) {
    errors.school = "School field is req";
  }
  if (validator.isEmpty(data.degree)) {
    errors.degree = "Degree  field is req";
  }
  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field Of study  is req";
  }
  if (validator.isEmpty(data.from)) {
    errors.from = "From date  field is req";
  }
  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
