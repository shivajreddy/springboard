import React from "react";
import { createContext } from "react";

interface ThemeContextInterface {
  currTheme: string;
  setCurrTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export default ThemeContext;
