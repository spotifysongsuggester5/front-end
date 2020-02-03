import React, { useState, useEffect } from "react";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({ ...credentials });
    console.log(credentials);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username: </label>
        <input
          value={credentials.username}
          name="username"
          type="email"
          onChange={handleChange}
          placeholder="Johndoe@gmail.com"
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          value={credentials.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
