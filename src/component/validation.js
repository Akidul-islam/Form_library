// // validationRules.js
// export const validationRule = {
//   username: {
//     presence: { allowEmpty: false, message: "Username is required" },
//     length: { minimum: 6, maximum: 20 }
//   },
//   email: {
//     presence: { allowEmpty: false, message: "Email is required" },
//     email: { message: "Email is invalid" }
//   },
//   password: {
//     presence: { allowEmpty: false, message: "Password is required" },
//     length: { minimum: 8, message: "Password must be at least 8 characters" }
//   }
// };

//  function validation(formData, validationRules) {
//   const errors = {};
//   console.log("run");
//   for (const keyName in validationRules) {
//     console.log(keyName);
//     const rules = validationRules[keyName];
//     for (const ruleName in rules) {
//       console.log(ruleName);
//       const ruleValue = rules[ruleName];
//       if (ruleName === "required") {
//         if (!formData[keyName]) {
//           errors[keyName] = `${keyName} is required`;
//         }
//       }

//       if (ruleName === "minLength") {
//         if (formData[keyName].length < ruleValue) {
//           errors[
//             keyName
//           ] = `${keyName} must be at least ${ruleValue} characters`;
//         }
//       }
//     }
//   }

//   return errors;
// }

export default function validationArray(formData, validationRules, fieldName) {
  let errors = {};
  for (const fieldsKey in validationRules) {
    const { name, presence, length, minLength, required, maxLength } = fieldName
      ? validationRules.find((item) => item.name === fieldName)
      : validationRules[fieldsKey];
    // in value empty
    if (required && !formData[name]) {
      errors[name] = presence?.message;
    }
    // is length to small or to large
    else if (required && minLength && formData[name]?.length < length.minimum) {
      errors[name] = `${name} must be at least ${length.minimum} characters`;
    } else if (
      required &&
      maxLength &&
      formData[name]?.length > length?.maximum
    ) {
      errors[name] = `${name} must be ${length.maximum} characters`;
    }
  }
  return errors;
}
