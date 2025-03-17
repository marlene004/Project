import React, { useState } from "react";
import FormRenderer from "./FormRenderer";
import NavigationDrawer from "./NavigationDrawer";

interface FormContainerProps {
  schemas: any[];
}

const FormContainer: React.FC<FormContainerProps> = ({ schemas }) => {
  const [selectedSchema, setSelectedSchema] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NavigationDrawer
        schemas={schemas}
        onSelect={(schemaIndex) => setSelectedSchema(schemaIndex)}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          marginTop: "20px"
        }}
      >
        <FormRenderer
          schema={schemas[selectedSchema].schema}
          uiSchema={schemas[selectedSchema].uiSchema}
          data={schemas[selectedSchema].data}
        />
      </div>
    </div>
  );
};

export default FormContainer;
