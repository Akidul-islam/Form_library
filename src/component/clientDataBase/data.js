//  dynamic data for inputfileds
export default [
  {
    name: "avater",
    type: "file",
    label: "Avater",
    accept: [".png", ".jpg"],
    required: true,
    presence: { allowEmpty: false, message: "Image required" }
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    required: true,
    minLength: true,
    presence: { allowEmpty: false, message: "Username is required" },
    length: {
      minimum: 4,
      maximum: 20
    }
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    minLength: true,
    presence: { allowEmpty: false, message: "Email is required" },
    length: {
      minimum: 13,
      maximum: 20
    }
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    minLength: true,
    presence: { allowEmpty: false, message: "Password is required" },
    length: {
      minimum: 8
    }
  },
  {
    name: "textarea",
    type: "textarea",
    label: "describetion",
    presence: { allowEmpty: false, message: "write something" },
    required: true,
    maxLength: true,
    length: {
      minimum: 10,
      maximum: 200
    }
  },
  {
    name: "checked",
    type: "checkbox",
    label: "agree with terms",
    presence: { allowEmpty: false, message: "field is required" },
    required: true
  }
];
