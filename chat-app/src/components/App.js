//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { isLoggedIn, getPlayerName } from "../utils/Profile.js";
import Login from "./login/Login.js";
import Home from "./home/Home.js";

function App() {

  if(!isLoggedIn()) {
    console.log("Unauthenticated user, requiring login - " + getPlayerName());
    return <Login />
  }

  return (
    <div className="App">
      <table width="100%" border="0">
        <tbody>
          <tr>
            <td><header className="App-header">
                Simple Chat App
              </header></td>
          </tr>
          <tr>
            <td><Home /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
