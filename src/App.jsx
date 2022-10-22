import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './screens/Home/Home';
import ProjectDetail from './screens/ProjectDetail/ProjectDetail';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/project" >
        <Route path=":id" element={<ProjectDetail/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
