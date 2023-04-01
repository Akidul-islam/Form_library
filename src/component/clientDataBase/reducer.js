export const CHANGE_HANDLER = "changeHandler";
export const FOCUS_HANDLER = "focusHandler";
export const SUBMIT_HANDLER = "submitHandler";
export const BLUR_HANDLER = "blurHandler";
export const data = {
  formInput: {},
  errors: {},
  focus: false,
  isAvater: false
};

const formReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_HANDLER:
      if (action.val) {
        const { name, value, type, files, checked } = action.val;
        let formInput = { ...state.formInput };
        // get error when change image
        if (type === "file") {
          formInput[name] = files[0];
        } else formInput[name] = type === "checkbox" ? checked : value;
        const err =
          action.validator &&
          action.validator({ formInput, [name]: value }, action.rules, name);
        return {
          ...state,
          formInput,
          errors: { ...state.errors, ...(err || {}) }
        };
      }

      return state;
    case SUBMIT_HANDLER:
      return {
        ...state,
        errors: action.validator(state.formInput, action.rules)
      };

    case BLUR_HANDLER:
      const { name, value } = action.val;
      const err = action.validator(
        { ...state.formInput, [name]: value },
        action.rules,
        name
      );
      if (!state.formInput[name] && state.focus) {
        return { ...state, errors: { ...state.errors, ...err } };
      }
      return { ...state, errors: { ...state.errors, [name]: false } };
    case FOCUS_HANDLER:
      return { ...state, focus: true };
    default:
      return state;
  }
};

export default formReducer;
