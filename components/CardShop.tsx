import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    padding: "15px 15px 25px 15px",
    backgroundColor: "#fff",
    borderRadius: 12,
    border: "1px solid #EBEDED",
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
    "& .detailCard": {
      "& > a": {
        fontSize: 26,
        lineHeight: "28px",
        color: "#000",
        marginBottom: 15,
        display: "block",
        height: 55,
        overflow: "hidden",
        "&:hover": {
          color: "#1F419B",
        },
      },
      "& .bottomDetail": {
        display: "flex",
        justifyContent: "space-between",
        "& .location": {
          fontSize: 20,
          lineHeight: "24px",
          color: "#9A9A9A",
          "& img": {
            verticalAlign: "middle",
            marginRight: 5,
          },
        },
        "& .linkFacebook": {
          marginRight: 7,
          display: "inline-block",
        },
        "& .linkLine": {
          display: "inline-block",
        },
      },
    },
  },
}));

const CardShop = (props: any) => {
  const classes = useStyles();
  const { link, image, topic, province, linkFacebook, linkLine } = props;
  return (
    <Box className={classes.root}>
      <Link href={link} className="image">
        <img src={image} alt="" />
      </Link>
      <Box className="detailCard">
        <Link href={link}>{topic}</Link>
        <Box className="bottomDetail">
          <Box className="location">
            <img src={`${prefix}/images/ic_location.svg`} alt="" />
            {province}
          </Box>
          <Box>
            <Link href={linkFacebook} className="linkFacebook">
              <img src={`${prefix}/images/ic_facebook.svg`} alt="" />
            </Link>
            <Link href={linkLine} className="linkLine">
              <img src={`${prefix}/images/ic_line.svg`} alt="" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardShop;
