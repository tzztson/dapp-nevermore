import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Fade } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import mediumIcon from "../../assets/image/social_medium.svg";
import twitterIcon from "../../assets/image/social_twitter.svg";
import discordIcon from "../../assets/image/social_discord.svg";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "black",
        color: "white",
        padding: "1.5rem",
        "& ul": {
            listStyleType: "none",
            padding: 0,
        },
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div:first-child": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media screen and (max-width: 500px)": {
                display: "none !important",
            },
            "& h4": {
                fontFamily: "komika",
            },
        },
        "& > div:last-child": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.2rem",
            "@media screen and (max-width: 500px)": {
                width: "100%",
            },
        },
        "& a": {
            color: "gray",
            "&:hover": {
                textDecoration: "underline",
            },
        },
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Fade in={true}>
                <Container maxWidth={"xl"}>
                    <Box className={classes.footer}>
                        <Box>
                            <img
                                src={require("../../assets/image/logo.png")}
                                alt=""
                                width={65}
                                height={65}
                            />
                            <Typography variant="h4">Nevermore</Typography>
                        </Box>
                        <Box>
                            <Link to="">
                                <img
                                    src={twitterIcon}
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link to="">
                                <img
                                    src={discordIcon}
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link to="">
                                <img
                                    src={mediumIcon}
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Fade>
        </Box>
    );
}
