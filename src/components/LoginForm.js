import React from "react";
import { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login</h2>
        {error != "" ? <div>{error}</div> : ""}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ name: e.target.value })}
            value={details.name}
          />
          {console.log(details)};
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            password="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
