import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "./firebaseConfig";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState();
  const [user, setUser] = useState("");

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

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutUser = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user.user.displayName);
    } catch (error) {
      console.log(error);
    }
  };

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
      <button onClick={loginUser}>Login</button>
      <h2>{auth?.currentUser?.email}</h2>
      <button onClick={logoutUser}>Logout</button>
      <br />
      <button onClick={signInWithGoogle}>Google Auth</button>
    </div>
  );
}

export default App;
