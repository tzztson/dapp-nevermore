import React from "react";
import {
    Container,
    Box,
    Button,
    InputBase,
    Typography,
    Fade,
    CircularProgress,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useGlobalContext } from "../context";

import symbol1 from "../assets/image/symbol1.png";
import symbol2 from "../assets/image/symbol2.png";
import symbol3 from "../assets/image/symbol3.png";
import symbol4 from "../assets/image/symbol4.png";

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
        flex: "1",
        padding: "80px 0",
        borderRadius: "36px",
        border: "6px solid #391553",
        backgroundImage: `url("./assets/stakedbackground.png")`,
        "@media screen and (max-width: 1360px)": {
            padding: "80px",
            flex: "unset",
        },
        "@media screen and (max-width: 750px)": {
            width: "100%",
            padding: "80px 0",
        },
    },
    boxContainer: {
        display: "flex",
        gap: "24px",
        "& > div:nth-child(1)": {
            backgroundColor: "#ffa94d",
        },
        "& > div:nth-child(2)": {
            backgroundColor: "#ff6970",
        },
        "& > div:nth-child(3)": {
            backgroundColor: "#76b8ff",
        },
        "@media screen and (max-width: 1024px)": {
            flexDirection: "column",
            width: "100%",
        },
    },
    handleStake: {
        border: "6px solid #391553",
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
        fontSize: "4rem",
        fontFamily: "visual",
        "@media screen and (max-width: 940px)": {
            fontSize: "3rem !important",
        },
        "@media screen and (max-width: 450px)": {
            fontSize: "2rem !important",
        },
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
        letterSpacing: "2px",
        fontFamily: "cool",
    },
    stakeButton: {
        color: "white",
        border: "1px solid #c8806a",
        textTransform: "capitalize",
        borderRadius: "36px",
        width: "240px",
        fontSize: "24px",
        letterSpacing: "2px",
        fontFamily: "duty",
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
            letterSpacing: "1px",
            fontFamily: "duty",
            fontSize: "24px",
            padding: "8px 24px",
        },
    },
    labelContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        width: "100%",
    },
    label: {
        fontFamily: "visual",
        fontSize: "2.5rem",
    },
    balance: {
        fontSize: "2rem",
        fontFamily: "cool",
    },
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

export default function Stake() {
    const classes = useStyles();
    const [state, { stake }]: any = useGlobalContext();
    const [loading, setLoading] = React.useState(false);
    const [stakeAmount, setStakeAmount] = React.useState(0);

    const handleStake = async () => {
        try {
            setLoading(true);
            await stake({ amount: stakeAmount });
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            console.log(err.message);
        }
    };

    return (
        <Container maxWidth={"xl"} className={classes.root}>
            <Fade in={true} timeout={1000}>
                <Box className={classes.stakeBoard}>
                    <Box className={classes.mainBoard}>
                        <Box className={classes.boxContainer}>
                            <Box className={classes.markBox}>
                                <Box className={classes.imgContainer}>
                                    <img
                                        src={symbol1}
                                        width="260px"
                                        height="120px"
                                        alt=""
                                    />
                                </Box>
                                <Box className={classes.typoContainer}>
                                    <Typography
                                        className={classes.centerTypo}
                                        variant="h5"
                                    >
                                        Total $WD staked
                                    </Typography>
                                    <Typography
                                        className={classes.centerTypo}
                                        variant="h4"
                                    >
                                        {Number(
                                            Number(state.totalStake).toFixed(3)
                                        ).toLocaleString()}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={classes.markBox}>
                                <Box className={classes.imgContainer}>
                                    <img
                                        src={symbol2}
                                        width="260px"
                                        height="120px"
                                        alt=""
                                    />
                                </Box>
                                <Box className={classes.typoContainer}>
                                    <Typography
                                        className={classes.centerTypo}
                                        variant="h5"
                                    >
                                        Number of Stakers
                                    </Typography>
                                    <Typography
                                        className={classes.centerTypo}
                                        variant="h4"
                                    >
                                        {Number(
                                            state.totalStaker
                                        ).toLocaleString()}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={classes.markBox}>
                                <Box className={classes.imgContainer}>
                                    <img
                                        src={symbol3}
                                        width="260px"
                                        height="120px"
                                        alt=""
                                    />
                                </Box>
                                <Box className={classes.typoContainer}>
                                    <Typography
                                        variant="h5"
                                        className={classes.centerTypo}
                                    >
                                        Reward amount (APY)
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        className={classes.centerTypo}
                                    >
                                        {Number(
                                            Number(state.apy / 1000000).toFixed(
                                                3
                                            )
                                        ).toLocaleString()}
                                        %
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.handleStake}>
                            <Typography className={classes.stakeTitle}>
                                Stake your $WD Tokens
                            </Typography>
                            <Box className={classes.stakeAmount}>
                                <InputBase
                                    placeholder="0"
                                    className={classes.amountInput}
                                    onChange={(e: any) =>
                                        setStakeAmount(e.target.value)
                                    }
                                    value={stakeAmount}
                                />
                                <Button
                                    className={classes.maxButton}
                                    variant="contained"
                                    color="primary"
                                >
                                    Max
                                </Button>
                            </Box>
                            {loading ? (
                                <Button
                                    className={classes.stakeButton}
                                    variant="contained"
                                    color="primary"
                                >
                                    <CircularProgress
                                        color="secondary"
                                        size={30}
                                    />
                                </Button>
                            ) : (
                                <Button
                                    className={classes.stakeButton}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleStake}
                                >
                                    Stake
                                </Button>
                            )}
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
                                    {Number(state.myStaking).toFixed(3)} $WD
                                </Typography>
                            </Box>
                            <Box className={classes.labelContainer}>
                                <Typography className={classes.label}>
                                    Estimated Reward1
                                </Typography>
                                <Typography className={classes.balance}>
                                    {Number(state.reward1).toFixed(5)} WETH
                                </Typography>
                            </Box>
                            <Box className={classes.labelContainer}>
                                <Typography className={classes.label}>
                                    Estimated Reward2
                                </Typography>
                                <Typography className={classes.balance}>
                                    {Number(state.reward2).toFixed(5)} WETH
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
            </Fade>
        </Container>
    );
}
