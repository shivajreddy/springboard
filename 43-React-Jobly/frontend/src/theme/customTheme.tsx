/** Custom theme palette
 * This theme config will over write MUI theme object
 */

import { ThemeOptions } from "@mui/material";

//TODO Final theme object
const joblyLightTheme: ThemeOptions = {
  palette: {
    // mode: "light",
    primary: {
      main: "#49D8CD",
    },
  },
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
    // mode: "dark",
    primary: {
      main: "#241C2D",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
      p {
        color : $(themeParam.palette.success.main)
      }`,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

export { joblyLightTheme, joblyDarkTheme };
