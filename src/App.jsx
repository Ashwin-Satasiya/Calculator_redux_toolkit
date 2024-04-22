import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CalcDisplay from "./components/CalcDisplay";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="app-container">
      <h3>Calculator</h3>

      <div className="container d-flex justify-content-center flex-column align-items-center ">
        <CalcDisplay />
        <Controls />
      </div>
    </div>
  );
}

export default App;
