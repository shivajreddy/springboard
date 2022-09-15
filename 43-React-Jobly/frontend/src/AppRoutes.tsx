import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import RegistrationForm from "./pages/RegisterUserForm";
import LoginForm from "./pages/LoginForm";
import TestPage from "./pages/TestPage";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "@mui/system";
import { joblyLightTheme, joblyDarkTheme } from "./theme/customTheme";
import ThemeContext from "./theme/themeContext";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Company from "./pages/Company";
import Profile from "./pages/Profile";
import useLocalStorage from "./hooks/useLocalStorage";

function AppRoutes() {
  const [currTheme, setCurrTheme] = useLocalStorage("theme", "dark");
  let currThemeObject = currTheme === "dark" ? joblyDarkTheme : joblyLightTheme;

  return (
    <ThemeContext.Provider value={{ currTheme, setCurrTheme }}>
      <ThemeProvider theme={currThemeObject}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/companies" element={<Companies />}></Route>
            <Route path="/company/:companyName" element={<Company />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/test" element={<TestPage />}></Route>
            <Route path="/signup" element={<RegistrationForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppRoutes;
