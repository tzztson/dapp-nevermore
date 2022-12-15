import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Button,
    Box,
    IconButton,
    Typography,
    Fade,
} from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";

import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import DehazeRounded from "@material-ui/icons/DehazeRounded";

import metamaskLogo from "../../assets/image/metamask.svg";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: "20px",
        zIndex: 20,
    },
    content: {
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        padding: "20px 30px",
        border: "2px solid white",
        borderRadius: "20px",
        "& > div": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& > div:first-child": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            },
            "& > div:last-child": {
                display: "block",
                [theme.breakpoints.up("md")]: {
                    display: "none",
                },
            },
            "& .logo": {
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "& > h3": {
                    margin: 0,
                    fontSize: "2rem",
                    fontFamily: "komika",
                    color: "white",
                },
                "@media screen and (max-width: 500px)": {
                    "& > h3": {
                        display: "none",
                    },
                    "& img": {
                        width: "50px",
                        height: "50px",
                    },
                },
            },
            "& .title": {
                "& > ul": {
                    padding: "20px 0",
                    listStyleType: "none",
                    display: "flex",
                    gap: "2rem",
                    flexDirection: "column",
                    borderTop: "1px solid gray",
                    borderBottom: "1px solid gray",
                    width: "100%",
                    "& a": {
                        fontSize: "1.3rem",
                        fontFamily: "cool",
                    },
                    [theme.breakpoints.up("md")]: {
                        padding: "0",
                        flexDirection: "row",
                        border: "none",
                    },
                },
            },
            "& .wallet_button": {
                width: "100%",
                "& button": {
                    width: "100%",
                },
                [theme.breakpoints.up("md")]: {
                    width: "auto",
                    "& button": {
                        width: "auto",
                    },
                },
            },
            "& .desktop": {
                display: "none",
                [theme.breakpoints.up("md")]: {
                    display: "block",
                },
            },
        },
        "& .mobile": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    },
}));

const WalletButton = styled(Button)({
    padding: "15px 20px",
    fontSize: "1rem",
    borderRadius: "10px",
    "& img": {
        paddingRight: "10px",
    },
});

export default function Header() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth >= 960 && setOpenNav(false);
        });
    }, []);

    const MobileList = (
        <>
            <Fade in={openNav} timeout={1000}>
                <Box className="mobile">
                    <Box className="title">
                        <ul>
                            <li>
                                <Link to="/stake">Staking</Link>
                            </li>
                            <li>
                                <Link to="">Twitter</Link>
                            </li>
                            <li>
                                <Link to="">Discord</Link>
                            </li>
                            <li>
                                <Link to="">Doc</Link>
                            </li>
                        </ul>
                    </Box>
                    <Box className="wallet_button">
                        <WalletButton variant="contained" color="primary">
                            <img
                                src={metamaskLogo}
                                alt=""
                                width={30}
                                height={30}
                            />
                            <Typography variant="h6">Connect Wallet</Typography>
                        </WalletButton>
                    </Box>
                </Box>
            </Fade>
        </>
    );

    return (
        <Box className={classes.root}>
            <Container maxWidth={"xl"}>
                <Box className={classes.content}>
                    <Box>
                        <Box>
                            <Box
                                className="logo"
                                onClick={() => navigate("/home")}
                            >
                                <img
                                    src={require("../../assets/image/logo.png")}
                                    alt=""
                                    height={70}
                                    width={70}
                                />
                                <Typography variant="h3">Nervermore</Typography>
                            </Box>
                            <Box className="title desktop">
                                <ul>
                                    <li>
                                        <Link to="/stake">Staking</Link>
                                    </li>
                                    <li>
                                        <Link to="">Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to="">Discord</Link>
                                    </li>
                                    <li>
                                        <Link to="">Doc</Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="wallet_button desktop">
                                <WalletButton
                                    variant="contained"
                                    color="primary"
                                >
                                    <img
                                        src={metamaskLogo}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />{" "}
                                    Connect Wallet
                                </WalletButton>
                            </Box>
                        </Box>
                        <Box>
                            <IconButton
                                color="primary"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <CloseRoundedIcon fontSize={"large"} />
                                ) : (
                                    <DehazeRounded fontSize={"large"} />
                                )}
                            </IconButton>
                        </Box>
                    </Box>
                    {openNav && MobileList}
                </Box>
            </Container>
        </Box>
    );
}
