import React, {useState} from 'react';
import { UserContext } from './context/userContext';
import './App.css';
import Layout from './pages/layout/Layout';

function App() {
  document.title = "Skyreader";
  const [user, setUser] = useState ({});

  return (
    <UserContext.Provider value={{
      user,
      setUser
  }}>
    <div className="App">
      <Layout />
    </div>
    </UserContext.Provider>
  );
}

export default App;
