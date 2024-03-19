import React, { useState } from "react";
import "./fileinput.css";

const FileInput = ({ placeholder }) => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="file-input-container">
      <input
        type="file"
        id="file"
        className="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file" className="file-input-label">
        {file ? file.name : placeholder ? placeholder : "Select File"}
      </label>
    </div>
  );
};

export default FileInput;
