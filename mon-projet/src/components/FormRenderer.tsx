import React from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells
} from "@jsonforms/material-renderers";
import { Paper, Typography } from "@mui/material";

interface FormRendererProps {
  schema: any;
  uiSchema: any;
  data: any;
}

const FormRenderer: React.FC<FormRendererProps> = ({
  schema,
  uiSchema,
  data
}) => {
  console.log("🔎 Debug - Schema:", schema);
  console.log("🔎 Debug - UI Schema:", uiSchema);
  console.log("🔎 Debug - Data:", data);

  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", borderRadius: "10px", background: "#fff" }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        📝 Remplissez votre formulaire
      </Typography>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
      />
    </Paper>
  );
};

export default FormRenderer;
