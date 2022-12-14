import React from "react";
import {
    Container,
    Box,
    Button,
    Typography,
    Fade,
    Slide,
} from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "3rem",
        color: "white",
    },
    main: {
        padding: "80px 0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "1.5rem",
        "& > div:first-child": {
            width: "50%",
            "& h1": {
                fontSize: "5.5rem",
                fontFamily: "fantasty",
                marginTop: "70px",
            },
            "& h4": {
                fontSize: "1.7rem",
                fontFamily: "",
                margin: "40px 0",
            },
        },
        "& img": {
            width: "100%",
        },
        "@media screen and (max-width: 1280px)": {
            flexDirection: "column-reverse",
            padding: "20px 0",
            "& > div:first-child": {
                width: "100% !important",
                textAlign: "center",
                "& h1": {
                    marginTop: "unset !important",
                },
            },
        },
        "@media screen and (max-width: 540px)": {
            "& > div:first-child": {
                "& h1": {
                    fontSize: "13vw !important",
                },
            },
        },
    },
    news: {
        display: "flex",
        justifyContent: "center",
    },
    steps: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
}));

const StakeButton = styled(Button)({
    padding: "12px 70px",
    fontSize: "1.4rem",
    borderRadius: "50px",
    fontWeight: "bold",
    color: "black",
    background: "yellow",
    "&:hover": {
        background: "#c4b000",
    },
});

export default function Home() {
    const classes = useStyles();

    return (
        <Container maxWidth={"xl"} className={classes.root}>
            <Fade in={true} timeout={1000} appear={true}>
                <Box className={classes.main}>
                    <Box>
                        <Typography variant="h1">Nevermore DeFi</Typography>
                        <Typography variant="h4">
                            Use the words 'low rewards' and 'inflation' to
                            address me again and I can't gurantee your safety
                        </Typography>
                        <StakeButton variant="contained" color="primary">
                            Stake
                        </StakeButton>
                    </Box>
                    <Box>
                        <img src={require("../assets/image/logo.png")} alt="" />
                    </Box>
                </Box>
            </Fade>

            <Slide in={true} timeout={1000}>
                <Box className={classes.news}>
                    <Typography variant="h3">
                        Here’s how to get your free stocks
                    </Typography>
                    <Box className={classes.steps}>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                    </Box>
                </Box>
            </Slide>
        </Container>
    );
}
