import React, { useState } from 'react';
import { setPlayerName, getPlayerName } from "../../utils/Profile.js";
import './Login.css';

class Login extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {playerName: ''};

        this.playerNameRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuickClick = this.handleQuickClick.bind(this);
    }

    handleSubmit(e)
    {
        let playerName = this.playerNameRef.current.value;
        console.log("Submit button clicked w/Username = " + playerName);
        setPlayerName(playerName);
        console.log("Saved Player Name after call - " + getPlayerName());

        // rerender page based on an authenticated state
        window.location.reload(false);
    }

    handleQuickClick(e)
    {
        let quickPlayer = e.currentTarget.textContent;
        console.log("Handle Quick Click: " + quickPlayer);
        this.playerNameRef.current.value = quickPlayer;
        this.handleSubmit(e);
    }

    render() 
    {
      return (
        <div className="Login">
          Simple Chat App
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Player Name:</p>
              <input type="text" ref={this.playerNameRef} />
            </label>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
          <div>
            <a href="#" onClick={this.handleQuickClick}>Ash</a><br/>
            <a href="#" onClick={this.handleQuickClick}>Linda</a><br/>
            <a href="#" onClick={this.handleQuickClick}>Cheryl</a><br/>
            <a href="#" onClick={this.handleQuickClick}>Scott</a><br/>
            <a href="#" onClick={this.handleQuickClick}>Shelly</a><br/>
          </div>
        </div>
      );
  }
}

export default Login;
