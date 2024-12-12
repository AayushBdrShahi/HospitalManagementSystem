

import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  // to reset form fields
  const toggleState = (newState) => {
    setState(newState);
    // Clear input fields 
    setEmail("");
    setPassword("");
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-6 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-black text-sm shadow-lg">
        <p className="text-2xl font-bold text-center">
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Fullname</p>
            <input
              className="border rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        {/* Role Selection */}
        {state ==="Login" &&(
          <div className="w-full">
            <p>Select Role</p>
            <select className="border rounded w-full p-2 mt-1 required" onChange={(e) => setRole(e.target.value)}value={role}> 
            <option value="" disabled>Select Role</option>

            <option value="Admin">Admin</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            </select>
          </div>
        )}

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => toggleState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => toggleState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;