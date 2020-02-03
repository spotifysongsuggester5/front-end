import React, { useState, useEffect } from "react";

export default function loginform() {
  return (
    <div>
      <form>
        <label htmlFor="username">username</label>
        <input name="username" type="email" />
        <label htmlFor="password">password</label>
        <input name="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
