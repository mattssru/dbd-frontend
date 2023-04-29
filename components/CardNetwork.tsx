import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "0 3px 30px rgba(0,0,0,0.16)",
    "& .image": {
      display: "block",
      width: "100%",
      position: "relative",
      paddingTop: "71%",
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
    "& .detail": {
      backgroundColor: "#fff",
      padding: 20,
      "& .topic": {
        color: "#000",
        fontSize: 30,
        lineHeight: "30px",
        fontFamily: "DBHeavent_BoldCond",
        marginBottom: 15,
        height: 60,
        display: "block",
        "&:hover": {
          color: "#1F419B",
        },
      },
      "& .bottomDetail": {
        borderTop: "1px solid #EFF2F0",
        paddingTop: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      "& .logoPartner": {
        lineHeight: 0,
      },
      "& .link": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        border: "2px solid #1F419B",
        borderRadius: "100%",
      },
    },
  },
}));

const CardNetwork = (props: any) => {
  const classes = useStyles();
  const { href, image, topic, imagePartner } = props;
  return (
    <Box className={classes.root}>
      <Link href={href} className="image">
        <img src={image} alt="" />
      </Link>
      <Box className="detail">
        <Link href={href} className="topic">
          {topic}
        </Link>
        <Box className="bottomDetail">
          <Box className="logoPartner">
            <img src={imagePartner} alt="" />
          </Box>
          <Link href={href} className="link">
            <img src={`${prefix}/images/left_link.svg`} alt="" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CardNetwork;
