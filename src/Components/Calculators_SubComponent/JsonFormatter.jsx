import { useState } from "react";
import { StyleButton, StyleDiv } from "./FindAge";
const JsonFormatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setJsonInput(inputValue);

    try {
      // Attempt to parse the JSON
      const parsed = JSON.parse(inputValue);
      // Stringify with 2-space indentation for pretty printing
      setFormattedJson(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      // If parsing fails, display the error and keep the original input
      setError("Invalid JSON: " + e.message);
      setFormattedJson(inputValue); // Keep the unformatted input in case of error
    }
  };

  return (
    <div
      className="container"
      style={{ alignContent: "flex-start", margin: "24px 0 0 24px" }}
    >
      <div className="row">
        <div className="col-md-6" style={{ paddingLeft: "0" }}>
          <h4>JSON Formatter</h4>
        </div>
        <div className="col-md-6" style={{ paddingLeft: "0" }}>
          <StyleDiv style={{ width: "100%", textAlign: "right" }}>
            <StyleButton
              onClick={() => {
                setJsonInput("");
                setFormattedJson("");
              }}
              title="Reset Input box"
            >
              Reset
            </StyleButton>
          </StyleDiv>
        </div>
      </div>

      <div className="row">
        <div className="col-sm" style={{ paddingLeft: "0" }}>
          <h4>Paste your text</h4>
          <textarea
            value={jsonInput}
            onChange={handleInputChange}
            placeholder="Paste your JSON here..."
            rows="14"
            cols="80"
            style={{ width: "100%", fontFamily: "monospace" }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="col-sm" style={{ paddingLeft: "0" }}>
          <h4>Formatted JSON (or original input if invalid)</h4>
          <pre
            style={{
              padding: "10px",
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              border: "1px Solid",
              overflow: "scroll",
              height: "340px",
            }}
          >
            {formattedJson}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatter;
