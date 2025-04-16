import {  Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
import POS from "./pages/POS";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <div className="h-screen w-screen flex items-center justify-center">
      <h1>Loading.....</h1>
    </div>
  ):(
    <AuthProvider>
      <div className="h-screen w-screen bg-gray-50 overflow-hidden flex flex-col">
        {/* Header (Common for all pages) */}
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <Header />
        </header>

        {/* Main Content - Changes Based on Route */}
        <div className="flex-grow pt-16 bg-gray-50 w-full overflow-auto">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/products" element={<POS />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
