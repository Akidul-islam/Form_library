import {
  BLUR_HANDLER,
  CHANGE_HANDLER,
  FOCUS_HANDLER
} from "../clientDataBase/reducer";

export default function InputFields({
  label,
  name,
  type,
  required,
  inputData,
  validator,
  dispatch,
  inputValue
}) {
  const changeHandler = (event) => {
    dispatch({
      type: CHANGE_HANDLER,
      val: event.target,
      validator,
      rules: inputData
    });
  };

  const blurHandler = (event) => {
    dispatch({
      type: BLUR_HANDLER,
      val: event.target,
      validator,
      rules: inputData
    });
  };

  const focusHandler = (event) => {
    dispatch({ type: FOCUS_HANDLER });
  };
  // const element = inputValue.formInput.isAvater ? (
  //   <input
  //     onBlur={blurHandler}
  //     onFocus={focusHandler}
  //     onChange={changeHandler}
  //     name={name}
  //     value={inputValue?.formInput[name] || ""}
  //     type={type}
  //   />
  // ) : (
  //   <input
  //     onBlur={blurHandler}
  //     onFocus={focusHandler}
  //     onChange={changeHandler}
  //     name={name}
  //     value={inputValue?.formInput[name] || ""}
  //     type={type}
  //   />
  // );
  return (
    <div key={label}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          onBlur={blurHandler}
          onFocus={focusHandler}
          onChange={changeHandler}
          name={name}
          value={inputValue?.formInput[name] || ""}
          type={type}
        />
        {required && inputValue?.errors[name] && (
          <h6>{required && inputValue?.errors[name]}</h6>
        )}
      </div>
    </div>
  );
}
export function TextAreaFields({
  label,
  name,
  type,
  required,
  inputData,
  validator,
  dispatch,
  inputValue
}) {
  const changeHandler = (event) => {
    dispatch({
      type: CHANGE_HANDLER,
      val: event.target,
      validator,
      rules: inputData
    });
  };

  const blurHandler = (event) => {
    dispatch({
      type: BLUR_HANDLER,
      val: event.target,
      validator,
      rules: inputData
    });
  };

  const focusHandler = (event) => {
    dispatch({ type: FOCUS_HANDLER });
  };
  return (
    <div key={label}>
      <label htmlFor={name}>{label}</label>
      <div>
        <textarea
          onBlur={blurHandler}
          onFocus={focusHandler}
          onChange={changeHandler}
          name={name}
          value={inputValue?.formInput[name] || ""}
          type={type}
        />
        {required && inputValue?.errors[name] && (
          <h6>{required && inputValue?.errors[name]}</h6>
        )}
      </div>
    </div>
  );
}
export function CheckBox({ type, name, inputValue, required, dispatch }) {
  const changeHandler = (event) => {
    dispatch({
      type: CHANGE_HANDLER,
      val: event.target
    });
  };

  return (
    <>
      <input
        checked={inputValue?.formInput[name] || false}
        onChange={changeHandler}
        type={type}
        name={name}
      />
      {required && inputValue?.errors[name] && (
        <h6>{required && inputValue?.errors[name]}</h6>
      )}
    </>
  );
}
