//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { isLoggedIn, getPlayerName, doLogout } from "../utils/Profile.js";
import Login from "./login/Login.js";
import Home from "./home/Home.js";

function App() {

  if(!isLoggedIn()) {
    console.log("Unauthenticated user, requiring login - " + getPlayerName());
    return <Login />
  }

  function handleLogout(e) {
    e.preventDefault();
    console.log('Logout button clicked');
    doLogout();

    // rerender page based on an unauthenticated state
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        Simple Chat App<br/>
        <div className="App-header-text">
          Welcome {getPlayerName()}! 
          <div className="App-header-link"><a href="#" onClick={handleLogout}>(Logout)</a></div>
        </div>
      </div>
      <div><Home /></div>
    </div>

  );
}

export default App;
