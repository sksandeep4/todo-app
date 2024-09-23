import { useState } from "react";
import "./App.css";
import { CreateToDo } from "../components/CreateToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Vanakkam da Mapla</h3>
      <h4>Frontend la irundhu</h4>
      <CreateToDo />
    </div>
  );
}

export default App;
