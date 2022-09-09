import { createTheme } from "@mui/material";

/** Custom theme palette
 * This theme config will over write MUI theme object
 */

/** Light Mode Palette -> https://colorhunt.co/palette/645caaa084cabface0ebc7e8
 *
 * 645CAA
 * A084CA
 * BFACE0
 * EBC7E8
 *
 */

/** Dark Mode Palette -> https://colorhunt.co/palette/472d2d553939704f4fa77979
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
    custom2: React.CSSProperties["color"];
    custom3: React.CSSProperties["color"];
    custom4: React.CSSProperties["color"];
  }
  interface PaletteOptions {
    custom1?: React.CSSProperties["color"];
    custom2?: React.CSSProperties["color"];
    custom3?: React.CSSProperties["color"];
    custom4?: React.CSSProperties["color"];
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    demoImageOpacity: number;
  }
  interface ThemeOptions {
    demoImageOpacity?: number;
  }
}

const joblyLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#472D2D",
    },
    custom1: "#472D2D",
    custom2: "#553939",
    custom3: "#704F4F",
    custom4: "#A77979",
  },
  demoImageOpacity: 0.4,
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
  "0px 11px 15px -7px rgba(167,121,121,1),0px 24px 38px 3px rgba(167,121,121,1),0px 9px 46px 8px rgba(167,121,121,1)"
);

const joblyDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#645CAA",
    },
    custom1: "#645CAA",
    custom2: "#A084CA",
    custom3: "#BFACE0",
    custom4: "#EBC7E8",
  },
  demoImageOpacity: 0.1,
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
