import { Box, makeStyles, Typography, Container } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    lineHeight: 0,
    height: 362,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    [theme.breakpoints.down("xs")]: {
      height: 240,
    },
    "& .imgBanner": {
      position: "absolute",
      width: "100%",
      height: "100%",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .MuiContainer-root": {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    "& .boxTitle": {
      top: "50%",
      left: 0,
      transform: "translate(-5%, -20%)",
      position: "absolute",
      [theme.breakpoints.down("md")]: {
        transform: "translate(5%, -20%)",
      },
      [theme.breakpoints.down("sm")]: {
        transform: "translate(5%, -40%)",
      },
      [theme.breakpoints.down("sm")]: {
        transform: "translate(5%, -50%)",
      },
      "& .titleShadow": {
        color: "#fff",
        opacity: 0.15,
        fontSize: 130,
        lineHeight: "93px",
        fontFamily: "DBHeavent_MedCond",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
          fontSize: 100,
          lineHeight: "80px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 62,
          lineHeight: "70px",
        },
      },
      "& h2": {
        color: "#fff",
        fontSize: 55,
        lineHeight: "39px",
        fontFamily: "DBHeavent_MedCond",
        position: "absolute",
        bottom: -7,
        left: 37,
        [theme.breakpoints.down("sm")]: {
          bottom: -3,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 34,
          left: 20,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: "-40%",
          left: "20%",
          height: 3,
          width: 52,
          backgroundColor: "#FBA528",
          borderRadius: 2,
          [theme.breakpoints.down("xs")]: {
            left: "11%",
            width: 40,
            bottom: "-5%",
          },
        },
      },
    },
  },
}));

const BannerInner = (props: any) => {
  const classes = useStyles();
  const { textBanner } = props;
  return (
    <Box className={classes.root}>
      <Box className="imgBanner">
        <img src={`${prefix}/images/banner_about.png`} alt="" />
      </Box>
      <Container maxWidth="lg">
        <Box className="boxTitle">
          <Box className="titleShadow">{textBanner}</Box>
          <Typography variant="h2">{textBanner}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerInner;
