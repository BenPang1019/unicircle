import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
//   const axiosInstance = axios.create({
//      baseURL:process.env.REACT_APP_API_URL,
//   });
const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(localStorage.getItem("adminUnicircle")) || null
  );

  const adminLogin = async (inputs) => {
    const res = await axios.post("/product/login", inputs);
    setCurrentAdmin(res.data);
  };

  const adminLogout = async () => {
    await axios.post("/product/logout");
    setCurrentAdmin(null);
  };

  useEffect(() => {
    localStorage.setItem("adminUnicircle", JSON.stringify(currentAdmin));
  }, [currentAdmin]);

  return (
    <AuthContext.Provider value={{ currentAdmin, adminLogin, adminLogout }}>
    {children}
    </AuthContext.Provider>
  );
};

