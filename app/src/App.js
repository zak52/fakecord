
import { useState } from 'react';
import './App.css';
import ServerMenu from './components/ServerMenu';
import FriendsList from './components/FriendsList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const Server1 = () => {
  return <h1>Server1</h1>;
};

const Server2 = () => {
  return <h1>Server2</h1>;
};

const Friends = () => {
  return <h1 className='display-info'>Friends</h1>;
};

const Otterwall = () => {
  return <h1 className='display-info'>Otterwall</h1>;
};

const CaptVegas = () => {
    return <h1 className='display-info'>CaptVegas</h1>;
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
            <Route exact path={'/'} element={<FriendsList/>}>
                <Route exact path={'Friends'} element={<Friends/>}/>
                <Route exact path={'Otterwall'} element={<Otterwall/>}/>
                <Route exact path={'Capt_Vegas'} element={<CaptVegas/>}/>
            </Route>
            <Route exact path={'/server1'} element={<Server1/>}/>
            <Route exact path={'/server2'} element={<Server2/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
