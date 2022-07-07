import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState();

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = () => {};

  const logoutUser = () => {};

  return (
    <div className="App">
      <h1>Register User</h1>
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={(event) => setRegisterEmail(event.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Enter Your Email"
        onChange={(event) => setRegisterPassword(event.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={registerUser}>Register</button>
      <h1>Login User</h1>
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={(event) => setLoginEmail(event.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Enter Your Email"
        onChange={(event) => setLoginPassword(event.target.value)}
      />{" "}
      <br />
      <br />
      <button>Login</button>
    </div>
  );
}

export default App;
