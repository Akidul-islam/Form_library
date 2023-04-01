import { useReducer } from "react";
import InputFields, { CheckBox, TextAreaFields } from "./InputFields";
import formReducer, { data, SUBMIT_HANDLER } from "../clientDataBase/reducer";

export default function FormComponent({ inputData, title, validator }) {
  const [inputValue, dispatch] = useReducer(formReducer, data);

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: SUBMIT_HANDLER, validator, rules: inputData });
    if (Object.keys(inputValue.errors).length === 0) {
      console.log(inputValue.formInput);
    }
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div>{title}</div>
      {inputData &&
        inputData.map((item) => {
          switch (item.type) {
            case "text":
            case "email":
            case "password":
            case "file":
              return (
                <InputFields
                  key={item.name}
                  {...item}
                  inputValue={inputValue}
                  dispatch={dispatch}
                  inputData={inputData}
                  validator={validator}
                />
              );
            case "textarea":
              return (
                <TextAreaFields
                  key={item.name}
                  {...item}
                  inputData={inputData}
                  dispatch={dispatch}
                  inputValue={inputValue}
                  validator={validator}
                />
              );
            case "checkbox":
              return (
                <CheckBox
                  key={item.label}
                  {...item}
                  inputValue={inputValue}
                  dispatch={dispatch}
                  inputData={inputData}
                  validator={validator}
                />
              );

            default:
              return null;
          }
        })}
      <input type="submit" value="Submit" />
    </form>
  );
}
