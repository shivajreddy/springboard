import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import User from "./pages/User";
import TestPage from "./pages/TestPage";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "@mui/system";
import { joblyLightTheme, joblyDarkTheme } from "./theme/customTheme";
import ThemeContext from "./theme/themeContext";
import { useState } from "react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function AppRoutes() {
  const [currTheme, setCurrTheme] = useState("dark");
  // let currThemeObject =
  //   currTheme === "dark"
  //     ? createTheme(joblyLightTheme)
  //     : createTheme(joblyDarkTheme);
  let currThemeObject = currTheme === "dark" ? joblyLightTheme : joblyDarkTheme;

  return (
    <ThemeContext.Provider value={{ currTheme, setCurrTheme }}>
      <ThemeProvider theme={currThemeObject}>
        <CssBaseline />
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
