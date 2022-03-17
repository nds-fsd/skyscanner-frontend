import React, {useState} from 'react';
import { UserContext } from './context/userContext';
import './App.css';
import Layout from './pages/layout/Layout';
import { IconContext } from "react-icons";

function App() {
  document.title = "Skyreader - Find the best flights";
  const [user, setUser] = useState ();
  const [reloadUser, setReloadUser] = useState (false);

  return (
    <IconContext.Provider value={{className: "react-icon" }}>
      <UserContext.Provider value={{
        user,
        setUser,
        reloadUser,
        forceReloadUser: () => setReloadUser(!reloadUser)
    }}>
      <div className="App">
        <Layout />
      </div>
      </UserContext.Provider>
    </IconContext.Provider>
    
  );
}

export default App;
