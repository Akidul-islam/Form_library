import "./styles.css";

import { Routes, Route } from "react-router-dom";
import FormComponent from "./component/shareComponent/FormComponent";
import validationArray from "./component/validation";
import data from "./component/clientDataBase/data";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <FormComponent
              validator={validationArray}
              title={"Reusable form"}
              inputData={data}
            />
          }
        />
        <Route
          path="/secondf"
          element={
            <FormComponent
              validator={validationArray}
              title={"second form"}
              inputData={data}
            />
          }
        />
      </Routes>
    </div>
  );
}
