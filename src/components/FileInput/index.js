import React, { useState } from "react";
import "./fileinput.css";

const FileInput = ({ placeholder }) => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div class="file-input-container">
      <input
        type="file"
        id="file"
        class="file-input"
        onChange={handleFileChange}
      />
      <label for="file" class="file-input-label">
        {file ? file.name : placeholder ? placeholder : "Select File"}
      </label>
    </div>
  );
};

export default FileInput;
