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
        <OBJModel
          key={file}
          width={width}
          height={height}
          // position={{ x: 0, y: -100, z: 0 }}
          scale={{ x: 0.25, y: 0.25, z: 0.25 }}
          src={file}
          // model={file}
          onload={() => {
            console.log("loaded");
          }}
        />
      )}
    </div>
  );
}
