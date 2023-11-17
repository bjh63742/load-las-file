import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <div>
        <button
          onClick={() => {
            navigate("/lasViewer");
          }}
        >
          라스 파일 뷰어
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => {
            navigate("/objectViewer");
          }}
        >
          오브젝트 파일 뷰어
        </button>
      </div>
    </div>
  );
}
