import "./styles.css";

import React, { useState } from "react";

function LoginLogout({ loggedIn, setLoggedIn, username, setUsername, password, setPassword }) {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check username and password
    if (username === "myusername" && password === "mypassword") {
      setLoggedIn(true);
    } else {
      alert("Please enter the correct username or password!");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Welcome {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

export default LoginLogout;
