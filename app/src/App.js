
import { useState } from 'react';
import './App.css';
import ServerMenu from './components/ServerMenu';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

const Server1 = () => {
  return <h1>Server1</h1>;
};

const Server2 = () => {
  return <h1>Server2</h1>;
};

function App() {

  const[inactive, setInactive ] = useState(true);

  return (
    <div className="App">
      <Router>
      <ServerMenu 
        onCollapse={(inactive)=> {
        console.log(inactive);
        setInactive(inactive)
        }}

        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route path={'/'} element={<Dashboard/>}/>
            <Route exact path={'/server1'} element={<Server1/>}/>
            <Route exact path={'/server2'} element={<Server2/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
