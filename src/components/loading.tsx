import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media screen and (max-width: 500px)": {
            "& > img": {
                width: "100%",
            },
        },
    },
}));

function Loading() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img src={require("../assets/image/loading.gif")} alt="" />
        </Box>
    );
}

export default Loading;
