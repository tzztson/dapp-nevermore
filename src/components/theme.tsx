import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
    palette: {
        primary: {
            light: "#6C52FF",
            dark: "#7C52FF",
            main: "#8C52FF",
        },
        secondary: {
            light: "#4E0D66",
            dark: "#5E0D66",
            main: "#3E0D66",
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
