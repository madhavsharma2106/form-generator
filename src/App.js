import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import { V1 } from "./v1";
import { V2 } from "./v2";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="route-btns">
        <button onClick={() => navigate("/")}>View V1</button>
        <button onClick={() => navigate("/v2")}>View V2</button>
      </div>

      <Routes>
        <Route exact path="/" element={<V1 />} />
        <Route exact path="/v2" element={<V2 />} />
      </Routes>
    </div>
  );
}
export default App;
