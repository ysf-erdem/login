import { useState } from "react";
import LoginForm from "./components/LoginForm.js";
import "./App.css";

function App() {
  const admin = {
    name: "admin",
    password: "admin",
  };

  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (details.name === admin.name && details.password === admin.password) {
      console.log("logged in");
      setUser({
        name: details.name,
      });
    } else {
      console.log("noooooo");
      setError("noooo");
    }
  };

  const Logout = () => {
    setUser({ name: "" });
  };

  return (
    <div>
      {user.name !== "" ? (
        <div>
          <h2>
            Welcome, <span> {user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
