import "./App.css";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Editor } from "./components/Shapes/Editor";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="toolbar">
        <Toolbar />
      </div>
      <div className="editor-box">
        <Editor />
      </div>
    </div>
  );
}

export default App;
