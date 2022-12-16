import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import loadingImage from "../assets/image/loading.gif";

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
            <img src={loadingImage} alt="" />
        </Box>
    );
}

export default Loading;
