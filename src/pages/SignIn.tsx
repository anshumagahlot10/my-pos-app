import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../services/LoginService";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null); 
  const showAlert = (type: "success" | "error", message: string, duration: number) => {
    alert(`${type.toUpperCase()}: ${message}`);
  };
  const handleApiError = (error: any, showAlert: Function, defaultMessage: string) => {
    console.error("API Error:", error);
    showAlert("error", defaultMessage, 3000);
  };
  
  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus(); // Set focus when the component mounts
    }
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await login({ username, password });

      if (response) {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
        const userId = response.userId;

      // Call the locations API
      const locationRes = await fetch(`http://localhost:8080/api/locationservice/locations?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${response.accessToken}`, // Optional if your backend requires it
        },
      });

      const locationData = await locationRes.json();

      if (locationData.success && locationData.data.length > 0) {
        const locationId = locationData.data[0].id;

        // Store locationId in localStorage or context
        localStorage.setItem("locationId", locationId);
      } else {
        console.warn("No locations found for this user.");
        // Optional: Handle this case if needed
      }
        navigate("/products");
      } else {
        showAlert("error", "Login failed. Please check your credentials.", 3000);
      }
    } catch (error) {
      if ((error as any).response?.status === 401) {
        showAlert("error", "Session expired. Please log in again.", 3000);
        localStorage.removeItem("user");
        navigate("/");
      } else {
        handleApiError(error, showAlert, "Failed to fetch data");
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
