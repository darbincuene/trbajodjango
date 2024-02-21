import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import Taskpage from "../src/pages/taskpage";
import Taskform from "../src/pages/taskform"
import Navigation from "../src/componentes/naviation"

function App() {
  return (
    <BrowserRouter>
    <Navigation/>

      <Routes>
        <Route path="/" element={<Navigate to="taskspage " />} />
        <Route path="/taskspage" element={<Taskpage />} />
        <Route path="/tasksform" element={ <Taskform />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
