import { useState } from "react";
import { OBJModel } from "react-3d-viewer";

export default function ObjectViewer() {
  const [file, setFile] = useState(null);
  const height = window.innerHeight;
  const width = window.innerWidth;
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            const result = event.target.result;
            console.log(result);
            setFile(result);
          };
          reader.readAsDataURL(file);
        }}
      />
      {file && (
        <div style={{ marginTop: "100px" }}>
          <OBJModel
            key={file}
            width={width}
            height={height}
            position={{ x: 0, y: 0, z: 0 }}
            scale={{ x: 0.5, y: 0.5, z: 0.5 }}
            src={file}
            // model={file}
            onload={() => {
              console.log("loaded");
            }}
          />
        </div>
      )}
    </div>
  );
}
