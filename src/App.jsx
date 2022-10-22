import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './screens/Home/Home';
import ProjectDetail from './screens/ProjectDetail/ProjectDetail';
import NotFound from './screens/NotFound/NotFound';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/project" >
        <Route path=":id" element={<ProjectDetail/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
