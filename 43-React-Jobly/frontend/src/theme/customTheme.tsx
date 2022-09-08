/** Custom theme palette
 * This theme config will over write MUI theme object
 */

import { ThemeOptions } from "@mui/material";

//TODO Final theme object
const joblyLightTheme: ThemeOptions = {
  palette: {
    mode: "light",
  },
  // typography: {
  //   fontFamily: "Source Sans Pro",
  // },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

const joblyDarkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    // primary: purple,
    // secondary: red,
  },
  typography: {
    fontFamily: "Source Sans Pro",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

export { joblyLightTheme, joblyDarkTheme };
