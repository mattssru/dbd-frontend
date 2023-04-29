import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    "& .image": {
      position: "relative",
      width: "100%",
      paddingTop: "62%",
      display: "block",
      marginBottom: 10,
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    "& .boxFlex": {
      display: "flex",
      "& > a": {
        fontSize: 20,
        lineHeight: "24px",
        color: "#9A9A9A",
        display: "inline-block",
        marginRight: 25,
        "&:hover": {
          color: "#1F419B",
        },
      },
      "& .type": {
        color: "#FBA51A",
        fontSize: 20,
        lineHeight: "24px",
      },
    },
    "& .location": {
      fontSize: 20,
      lineHeight: "24px",
      color: "#9A9A9A",
      "& img": {
        verticalAlign: "middle",
        marginRight: 5,
      },
    },
    "& .topic": {
      color: "#000",
      fontSize: 24,
      lineHeight: "24px",
      display: "block",
      marginBottom: 15,
      height: 48,
      overflow: "hidden",
      "&:hover": {
        color: "#1F419B",
      },
    },
  },
}));

const CardProduct = (props: any) => {
  const classes = useStyles();
  const { link, image, type, topic, linkShop, shopName, province } = props;
  return (
    <Box className={classes.root}>
      <Link href={link} className="image">
        <img src={image} alt="" />
      </Link>
      <Box className="boxFlex">
        <p className="type">{type}</p>
      </Box>
      <Link className="topic" href={link}>
        {topic}
      </Link>
      <Box className="boxFlex">
        <Link href={linkShop}>{shopName}</Link>
        <Box className="location">
          <img src={`${prefix}/images/ic_location.svg`} alt="" />
          {province}
        </Box>
      </Box>
    </Box>
  );
};

export default CardProduct;
