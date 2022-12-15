import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    markBox: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "60px 8px",
        borderRadius: "12px",
        border: "1px solid purple",
        flexWrap: "wrap",
        "@media screen and (max-width: 1024px)": {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    centerTypo: {
        textAlign: "center",
        fontFamily: "cool",
        letterSpacing: "1px",
        fontSize: "24px",
        minWidth: "250px",
    },
    imgContainer: {
        flex: "1",
        display: "flex",
        justifyContent: "center",
        "& > img": {
            height: "100%",
            "@media and (max-width)": {
                width: "100%",
                objectFit: "cover",
            },
        },
    },
    typoContainer: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
    },
}));

const MarkBox = ({ bgColor, imageSrc, typo, value }: MarkBox) => {
    const classes = useStyles();

    return (
        <Box className={classes.markBox} sx={{ bgcolor: bgColor }}>
            <Box className={classes.imgContainer}>
                <img src={imageSrc} width="260px" height="120px" alt="" />
            </Box>
            <Box className={classes.typoContainer}>
                <Typography className={classes.centerTypo}>{typo}</Typography>
                <Typography className={classes.centerTypo}>{value}%</Typography>
            </Box>
        </Box>
    );
};

export default MarkBox;
