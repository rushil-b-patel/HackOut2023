import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userType, setUserType] = useState("student");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithRedirect } = useAuth0();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Perform login action based on user type
    console.log("User Type:", userType);
    console.log("User ID:", userId);
    console.log("User Email:", userEmail);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Log in to your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select User Type:
          </label>
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="student">Student</option>
            <option value="professor">Professor/University</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {userType === "student" ? "Student Email:" : "Professor Email:"}
          </label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="text-sm font-medium text-black flex justify-between mb-3">
            Don't have Account ?{" "}
            <Link
              to="/SignupForm"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create an Account
            </Link>
          </div>

        <button
          onClick={() => loginWithRedirect()}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
