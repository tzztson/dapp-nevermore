import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Box,
    Button,
    Typography,
    Fade,
    Grid,
} from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";

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
            flex: 2,
        },
        "& > div:last-child": {
            flex: 1,
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
            <Container maxWidth={"xl"}>
                <Box className={classes.footer}>
                    <Box>
                        <Typography variant="h4">Nevermore</Typography>
                        <Typography variant="body1">
                            Build fully functional accessible web applications
                            faster than ever
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container>
                            <Grid item sm={12} md={4}>
                                <ul>
                                    <li>
                                        <Typography variant="h5">
                                            About
                                        </Typography>
                                    </li>
                                    <li>
                                        <Link to="">Features</Link>
                                    </li>
                                    <li>
                                        <Link to="">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="">Support</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <ul>
                                    <li>
                                        <Typography variant="h5">
                                            About
                                        </Typography>
                                    </li>
                                    <li>
                                        <Link to="">Features</Link>
                                    </li>
                                    <li>
                                        <Link to="">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="">Support</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <ul>
                                    <li>
                                        <Typography variant="h5">
                                            Community
                                        </Typography>
                                    </li>
                                    <li>
                                        <Link to="">Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to="">Medium</Link>
                                    </li>
                                    <li>
                                        <Link to="">Discord</Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
