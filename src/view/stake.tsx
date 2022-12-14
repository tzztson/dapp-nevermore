import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "3rem",
        color: "white",
    },
}));

export default function Stake() {
    const classes = useStyles();

    return (
        <Container maxWidth={"xl"} className={classes.root}>
            <Box></Box>
        </Container>
    );
}
