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

function AppRoutes() {
  const [currTheme, setCurrTheme] = useState("dark");
  let currThemeObject = currTheme === "dark" ? joblyLightTheme : joblyDarkTheme;

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
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppRoutes;
