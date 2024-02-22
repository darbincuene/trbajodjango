import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import Taskpage from "../src/pages/taskpage";
import Taskform from "../src/pages/taskform"
import Navigation from "../src/componentes/naviation"
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
    <Navigation/>

<Routes>
  <Route path="/" element={<Navigate to="taskspage " />} />
  <Route path="/taskspage" element={<Taskpage />} />
  <Route path="/tasksform" element={ <Taskform />} />
  <Route path="/darbin/:id" element={ <Taskform />} />

</Routes>
<Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;
