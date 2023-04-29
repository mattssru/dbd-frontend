import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .borderCard": {
      width: 170,
      height: 170,
      border: "1px solid #D1D1D1",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 16px",
    },
    "& .detailCard": {
      textAlign: "center",
      "& p": {
        fontSize: 30,
        lineHeight: "24px",
        fontFamily: "DBHeavent_BoldCond",
      },
      "& h4": {
        fontSize: 80,
        lineHeight: "68px",
        color: "#1F419B",
        fontFamily: "DBHeavent_BoldCond",
      },
      "& span": {
        display: "block",
        fontSize: 34,
        lineHeight: "30px",
        color: "#FBA51A",
        fontFamily: "DBHeavent_BoldCond",
      },
    },
  },
}));

const CardBizclub = (props: any) => {
  const classes = useStyles();
  const { title, image, number, des } = props;
  return (
    <Box className={classes.root}>
      <Box className="borderCard">
        <img src={image} alt="" />
      </Box>
      <Box className="detailCard">
        <p>{title}</p>
        <Typography variant="h4">{number}</Typography>
        <span>“{des}”</span>
      </Box>
    </Box>
  );
};

export default CardBizclub;
