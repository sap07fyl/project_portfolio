import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './screens/Home/Home';
import ProjectDetail from './screens/ProjectDetail/ProjectDetail';

function App() {

  return (
    <Routes>
      <Route exact path="/project_portfolio" element={<Home />} />
      <Route exact path="/project_portfolio/project" element={<ProjectDetail/>} >
        <Route path=":id" element={<ProjectDetail/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
