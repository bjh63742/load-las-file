import { useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader";

const Model = ({ file }) => {
  console.log(file);
  const obj = useLoader(OBJLoader, file);
  const modelRef = useRef();

  return <primitive object={obj} ref={modelRef} />;
};

export default function ObjectViewer2() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          // return setFile(file);
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
        <Canvas>
          <ambientLight />
          <directionalLight />
          <pointLight position={[10, 10, 10]} />
          <Model file={file} />
        </Canvas>
      )}
    </div>
  );
}
