import { createTheme } from "@mui/material";

/** Custom theme palette
 * This theme config will over write MUI theme object
 */

/** Light Mode -> Palette
 *
 * 645CAA
 * A084CA
 * BFACE0
 * EBC7E8
 *
 */

/** Dark Mode -> Palette
 *
 * 472D2D
 * 553939
 * 704F4F
 * A77979
 */

/** Modifying the MUI's ThemeOptions interface */
declare module "@mui/material/styles/createPalette" {
  interface Pallette {
    custom1: React.CSSProperties["color"];
  }
  interface PaletteOptions {
    custom1?: React.CSSProperties["color"];
  }
}

const joblyLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#49D8CD",
    },
    custom1: "#BFACE0",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
// Shadow at index 25,26
joblyLightTheme.shadows.push(
  "0px 11px 15px -7px rgba(235,199,232,0.2),0px 24px 38px 3px rgba(235,199,232,0.14),0px 9px 46px 8px rgba(235,199,232,0.12)"
);
joblyLightTheme.shadows.push(
  "0px 11px 15px -7px rgba(235,199,232,0.2),0px 24px 38px 3px rgba(235,199,232,0.14),0px 9px 46px 8px rgba(235,199,232,0.12)"
);

const joblyDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#241C2D",
    },
    custom1: "#553939",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

// Shadow at index 25,26
joblyDarkTheme.shadows.push(
  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
);
joblyDarkTheme.shadows.push(
  "0px 11px 15px -7px rgba(235,199,232,0.2),0px 24px 38px 3px rgba(235,199,232,0.14),0px 9px 46px 8px rgba(235,199,232,0.12)"
);

export { joblyLightTheme, joblyDarkTheme };
