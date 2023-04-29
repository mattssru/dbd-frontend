import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
// import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 60px",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
    "& .MuiBreadcrumbs-ol": {
      minHeight: 55,
      display: "flex",
      marginBottom: 60,
      alignItems: "center",
      padding: "10px 0",
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: 1,
        backgroundColor: "#707070",
        opacity: 0.3,
        bottom: 0,
        left: 0,
      },
      "& li": {
        display: "block",
        [theme.breakpoints.down("xs")]: {
          marginBottom: 5,
        },
      },
    },
    position: "relative",
    "& a, & li": {
      fontSize: 20,
      lineHeight: "20px",
      color: "#CCCCCC",
      fontFamily: "DBHeavent_MedCond",
      display: "block",
      alignItems: "center",
      height: "100%",
      "& a:hover": {
        color: "#FBA51A",
      },
      "& p": {
        fontSize: 20,
        lineHeight: "20px",
        color: "#FBA51A",
        fontFamily: "DBHeavent_MedCond",
      },
      "& img": {
        position: "relative",
      },
    },
  },
}));

const BreadcrumpDefault = (props: any) => {
  const classes = useStyles();
  const { items } = props;

  const listBreadcrumb = (items: any[]) => {
    return items.map((item: any, index: number) => {
      if (index === items.length - 1) {
        return <Typography component="p">{item.title}</Typography>;
      } else if (index === 0) {
        return (
          <Link key={index} href={item.path}>
            <img
              src={`${prefix}/images/ic_breadcrump.svg`}
              alt=""
              className="iconNavi"
            />
            {item.title}
          </Link>
        );
      } else {
        return (
          <Link key={index} href={item.path}>
            {item.title}
          </Link>
        );
      }
    });
  };
  return (
    <Breadcrumbs className={classes.root} separator="/" aria-label="breadcrumb">
      {/* <Link href="/">
        <img src={`${prefix}/images/ic_breadcrump.svg`} alt="" />
        หน้าหลัก
      </Link> */}
      {listBreadcrumb(items)}
    </Breadcrumbs>
  );
};

export default BreadcrumpDefault;
