import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import User from "./pages/User";
import TestPage from "./pages/TestPage";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "@mui/system";
// import customTheme from "./theme/customTheme";
import { joblyLightTheme, joblyDarkTheme } from "./theme/customTheme";
import ThemeContext from "./theme/themeContext";
import { useState } from "react";
import { createTheme } from "@mui/material";

function AppRoutes() {
  const [currTheme, setCurrTheme] = useState("dark");
  let currThemeObject =
    currTheme === "dark"
      ? createTheme(joblyLightTheme)
      : createTheme(joblyDarkTheme);

  return (
    <ThemeContext.Provider value={{ currTheme, setCurrTheme }}>
      <ThemeProvider theme={currThemeObject}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/companies" element={<Companies />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/test" element={<TestPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppRoutes;
