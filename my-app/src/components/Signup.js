import React, { useState, useEffect } from "react";

export default function LoginForm() {
  const [userSignUp, setUserSignUp] = useState([]);

  const handleChange = (event) => {
    setUserSignUp(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="username">username: </label>
        <input
          name="username"
          type="email"
          onChange={handleChange}
          placeholder="Johndoe@gmail.com"
        />
        <br />
        <label htmlFor="password">password: </label>
        <input name="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
