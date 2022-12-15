import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, Theme, styled } from "@material-ui/core/styles";

interface MarkBox {
  bgColor: string;
  imageSrc: string;
  typo: string;
  value: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  markBox: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "60px 8px",
    borderRadius: "12px",
    border: "1px solid purple",
    "@media screen and (max-width: 1024px)": {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  centerTypo: {
    textAlign: "center",
    fontSize: "24px",
  },
  imgContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    "& > img": {
      height: "100%",
    },
  },
  typoContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width: 1024px)": {
      flexDirection: "row",
      gap: "12px",
    },
  },
}));

const MarkBox = ({ bgColor, imageSrc, typo, value }: MarkBox) => {
  const classes = useStyles();

  return (
    <Box className={classes.markBox} sx={{ bgcolor: bgColor }}>
      <Box className={classes.imgContainer}>
        <img src={imageSrc} width="260px" height="120px" />
      </Box>
      <Box className={classes.typoContainer}>
        <Typography className={classes.centerTypo}>{typo}</Typography>
        <Typography className={classes.centerTypo}>{value}</Typography>
      </Box>
    </Box>
  );
};

export default MarkBox;
