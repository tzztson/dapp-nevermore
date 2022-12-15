import React from "react";
import {
    Container,
    Box,
    Button,
    InputBase,
    Typography,
} from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";
import MarkBox from "../components/markBox";

import symbol1 from "../assets/image/symbol1.png";
import symbol2 from "../assets/image/symbol2.png";
import symbol3 from "../assets/image/symbol3.png";
import symbol4 from "../assets/image/symbol4.png";

const MarkBoxConstants = [
    {
        bgColor: "#ffa94d",
        imageSrc: symbol1,
        typo: "Total $WD staked",
        value: 0,
    },
    {
        bgColor: "#ff6970",
        imageSrc: symbol2,
        typo: "Number of Stakers",
        value: 0,
    },
    {
        bgColor: "#76b8ff",
        imageSrc: symbol3,
        typo: "Reward amount (APY)",
        value: 0,
    },
];

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "3rem",
        color: "white",
    },
    stakeBoard: {
        display: "flex",
        justifyContent: "space-between",
        "@media screen and (max-width: 1360px)": {
            flexDirection: "column",
        },
    },
    mainBoard: {
        flex: "1 1 70%",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        padding: "64px 0",
        alignItems: "center",
    },
    handleBoard: {
        flex: "1 1 30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    handleContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "96px 80px 80px 80px",
        borderRadius: "36px",
        border: "6px solid #391553",
        backgroundImage: `url("./assets/stakedbackground.png")`,
        "@media screen and (max-width: 1360px)": {
            margin: "24px 0px 64px 0px",
        },
        "@media screen and (max-width: 750px)": {
            width: "100%",
            padding: "80px 0",
        },
    },
    boxContainer: {
        display: "flex",
        gap: "24px",
        "@media screen and (max-width: 1024px)": {
            flexDirection: "column",
            width: "100%",
        },
    },
    handleStake: {
        border: "6px solid #391553",
        background: "red",
        backgroundImage: `url("./assets/stakedbackground.png")`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px 120px",
        textAlign: "center",
        borderRadius: "24px",
        gap: "24px",
        "@media screen and (max-width: 750px)": {
            width: "100%",
            padding: "48px 0",
        },
    },
    stakeAmount: {
        color: "white",
        border: "1px solid white",
        borderRadius: "36px",
        padding: "0px 0px 0px 18px",
        display: "flex",
        justifyContent: "space-between",
        width: "360px",
        "@media screen and (max-width: 750px)": {
            width: "80%",
        },
    },
    stakeTitle: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    amountInput: {
        color: "white",
        fontSize: "30px",
        flex: "1",
    },
    maxButton: {
        backgroundColor: "#ff6970",
        borderRadius: "36px",
        color: "white",
        width: "100px",
    },
    stakeButton: {
        color: "white",
        border: "1px solid #c8806a",
        textTransform: "capitalize",
        borderRadius: "36px",
        width: "240px",
        fontSize: "20px",
        "@media screen and (max-width: 750px)": {
            width: "80%",
        },
    },
    handleLogo: {
        position: "absolute",
        top: "-60px",
        left: "50%",
        transform: "translateX(-50%)",
        "&> img": {
            width: "120px",
            height: "120px",
        },
    },
    handleButtongroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "18px",
        padding: "24px 0px",
        "@media screen and (max-width: 1360px)": {
            flexDirection: "row",
        },
        "@media screen and (max-width: 768px)": {
            width: "80%",
        },
        "& > button": {
            color: "white",
            border: "1px solid #c8806a",
            textTransform: "capitalize",
            borderRadius: "36px",
            width: "100%",
            fontSize: "20px",
            padding: "8px 24px",
        },
    },
    labelContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        width: "100%",
        "@media screen and (max-width: 1360px)": {
            flexDirection: "row",
            justifyContent: "center",
            gap: "12px",
            alignItems: "center",
        },
    },
    label: {
        fontWeight: "bold",
    },
    balance: {
        fontSize: "24px",
    },
}));

export default function Stake() {
    const classes = useStyles();

    return (
        <Container maxWidth={"xl"} className={classes.root}>
            <Box className={classes.stakeBoard}>
                <Box className={classes.mainBoard}>
                    <Box className={classes.boxContainer}>
                        {MarkBoxConstants.map((ele, ind) => (
                            <MarkBox
                                key={ind}
                                bgColor={ele.bgColor}
                                imageSrc={ele.imageSrc}
                                typo={ele.typo}
                                value={ele.value}
                            />
                        ))}
                    </Box>
                    <Box className={classes.handleStake}>
                        <Typography className={classes.stakeTitle}>
                            Stake your $WD Tokens
                        </Typography>
                        <Box className={classes.stakeAmount}>
                            <InputBase
                                placeholder="0"
                                className={classes.amountInput}
                            />
                            <Button
                                className={classes.maxButton}
                                variant="contained"
                                color="primary"
                            >
                                Max
                            </Button>
                        </Box>
                        <Button
                            className={classes.stakeButton}
                            variant="contained"
                            color="primary"
                        >
                            Stake
                        </Button>
                    </Box>
                </Box>
                <Box className={classes.handleBoard}>
                    <Box className={classes.handleContainer}>
                        <Box className={classes.handleLogo}>
                            <img src={symbol4} alt="handleLogo" />
                        </Box>
                        <Box className={classes.labelContainer}>
                            <Typography className={classes.label}>
                                My staked tokens
                            </Typography>
                            <Typography className={classes.balance}>
                                0.00000 $WD
                            </Typography>
                        </Box>
                        <Box className={classes.labelContainer}>
                            <Typography className={classes.label}>
                                Estimated Rewards
                            </Typography>
                            <Typography className={classes.balance}>
                                0.0000 WETH
                            </Typography>
                        </Box>
                        <Box className={classes.handleButtongroup}>
                            <Button variant="contained" color="primary">
                                ClaimReward
                            </Button>
                            <Button variant="contained" color="primary">
                                Withdraw
                            </Button>
                            <Button variant="contained" color="primary">
                                Referral
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
