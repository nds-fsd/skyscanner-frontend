import React, {useState} from 'react';
import { UserContext } from './context/userContext';
import './App.css';
import Layout from './pages/layout/Layout';

function App() {
  document.title = "Skyreader";
  const [user, setUser] = useState ({});
  const [reloadUser, setReloadUser] = useState (false);

  return (
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
  );
}

export default App;
