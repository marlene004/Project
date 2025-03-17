import React, { useState } from "react";
import { Switch } from "antd";
import FormContainer from "./components/FormContainer";
import schema1 from "./schemas/schema1.json";
import uiSchema1 from "./schemas/uiSchema1.json";
import data1 from "./schemas/data1.json";
import schema2 from "./schemas/schema2.json";
import uiSchema2 from "./schemas/uiSchema2.json";
import data2 from "./schemas/data2.json";
import "./App.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const schemas = [
    { schema: schema1, uiSchema: uiSchema1, data: data1 },
    { schema: schema2, uiSchema: uiSchema2, data: data2 }
  ];

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <h2> CYBERUN</h2>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
        </div>
        <FormContainer schemas={schemas} />
      </div>
    </div>
  );
};

export default App;
