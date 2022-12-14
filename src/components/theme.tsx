import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
    palette: {
        primary: {
            light: "#8C52FF",
            dark: "#8C52FF",
            main: "#8C52FF",
        },
        secondary: {
            light: "#8C52FF",
            dark: "#8C52FF",
            main: "#8C52FF",
        },
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            "sans-serif",
        ].join(","),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1600,
        },
    },
});
