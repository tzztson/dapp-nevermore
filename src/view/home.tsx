import React from "react";
import {
    Container,
    Box,
    Button,
    Typography,
    Fade,
    Grow,
    Grid,
} from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "3rem",
        color: "white",
    },
    main: {
        padding: "100px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10rem",
        "& > div:first-child": {
            flex: "7",
            paddingLeft: "3%",
            "& h1": {
                fontSize: "6rem",
                fontFamily: "fantasty",
                marginTop: "70px",
            },
            "& h4": {
                fontSize: "2.5rem",
                fontFamily: "",
                margin: "40px 0",
            },
        },
        "& > div:last-child": {
            flex: "3",
        },
        "& img": {
            width: "100%",
        },
        "@media screen and (max-width: 1280px)": {
            flexDirection: "column-reverse",
            padding: "20px 0",
            gap: "2.5rem",
            "& > div:first-child": {
                width: "100% !important",
                textAlign: "center",
                paddingLeft: "unset",
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
                "& h4": {
                    fontSize: "6vw !important",
                },
            },
        },
    },
    news: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "50px 0",
        "& h3": {
            textAlign: "center",
            fontSize: "3.5rem",
            "@media screen and (max-width: 640px)": {
                fontSize: "2rem",
            },
        },
    },
    steps: {
        marginTop: "4rem",
        padding: "1.5rem",
    },
    step: {
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "10px",
        "@media screen and (max-width: 450px)": {
            "& img": {
                width: "100%",
                height: "auto",
            },
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

            <Grow in={true} timeout={1000}>
                <Box className={classes.news}>
                    <Typography variant="h3">
                        Here’s how to get your reward
                    </Typography>
                    <Grid
                        container
                        justifyContent="space-around"
                        className={classes.steps}
                    >
                        <Grid item sm={12} md={4}>
                            <Box className={classes.step}>
                                <img
                                    src={require("../assets/image/step1.png")}
                                    alt=""
                                    width={120}
                                    height={120}
                                />
                                <Typography variant="h5">
                                    Open an account
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <Box className={classes.step}>
                                <img
                                    src={require("../assets/image/step2.png")}
                                    alt=""
                                    width={120}
                                    height={120}
                                />
                                <Typography variant="h5">
                                    Deposit any amount
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <Box className={classes.step}>
                                <img
                                    src={require("../assets/image/step3.png")}
                                    alt=""
                                    width={120}
                                    height={120}
                                />
                                <Typography variant="h5">
                                    Get up reward
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grow>
        </Container>
    );
}
