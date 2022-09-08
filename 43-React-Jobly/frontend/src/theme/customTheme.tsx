/** Custom theme palette
 * This theme config will over write MUI theme object
 */

import { purple, red } from "@mui/material/colors";

//TODO Final theme object
const joblyLightTheme = {
  palette: {
    primary: red,
    secondary: purple,
  },
};

const joblyDarkTheme = {
  palette: {
    primary: purple,
    secondary: red,
  },
  typography: {
    fontFamily: "Source Sans Pro",
  },
};

export { joblyLightTheme, joblyDarkTheme };
