import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import {signInWithGoogle, auth} from "./config/firebase";
import {signOut, onAuthStateChanged} from "firebase/auth";
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = () => {
    signOut(auth);
  }

  return (
    <div className="App">
      <Home user={user} signInWithGoogle={signInWithGoogle} handleLogout={handleLogout} />
    </div>
  );
}

export default App;
