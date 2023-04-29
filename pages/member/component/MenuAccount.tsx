import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .listMenu:last-child": {
      borderBottom: "none",
      paddingBottom: 0,
      marginBottom: 0,
    },
    "& .boxUser": {
      borderRadius: 9,
      backgroundColor: "#1F419B",
      border: "2px solid #E7ECEF",
      display: "flex",
      height: 90,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0 30px",
      marginBottom: 40,
      [theme.breakpoints.down("md")]: {
        padding: "0 15px",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: 15,
      },
      [theme.breakpoints.down("xs")]: {
        height: 80,
      },
      "& img": {
        width: 53,
        height: 53,
        borderRadius: "100%",
        marginRight: 13,
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "100%",
        },
      },
      "& p": {
        color: "#fff",
        fontSize: 25,
        lineHeight: "30px",
        fontFamily: "DBHeavent_BoldCond",
        "&:last-child": {
          fontSize: 20,
          lineHeight: "24px",
          color: "#FBA528",
          fontFamily: "DBHeavent_Cond",
        },
      },
    },
    "& .listMenu": {
      borderBottom: "1px solid #ddd",
      paddingBottom: 20,
      marginBottom: 15,
      "& .btnMenu": {
        fontSize: 20,
        lineHeight: "20px",
        color: "#83888D",
        display: "flex",
        height: 55,
        alignItems: "center",
        paddingLeft: 30,
        position: "relative",
        [theme.breakpoints.down("xs")]: {
          height: 50,
        },
        "& img": {
          marginRight: 20,
          position: "relative",
          top: -1,
        },
        "&.active, &:hover": {
          backgroundColor: "#EEF5FF",
          borderRadius: "0 11px 11px 0",
          color: "#1F419B",
          "&::after": {
            content: '""',
            position: "absolute",
            width: 5,
            height: "100%",
            backgroundColor: "#A5A4BF",
            top: 0,
            left: 0,
          },
        },
      },
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
      borderRadius: 0,
      margin: 0,
    },
    "& .MuiAccordionDetails-root": {
      flexDirection: "column",
      padding: 0,
    },
    "& .MuiAccordionSummary-expandIcon": {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
  },
}));

const MenuAccount = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;
  return (
    <Box className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="boxUser"
        >
          <img src={`${prefix}/images/img_user.svg`} alt="" />
          <Box>
            <p>นายสมพงษ์ ใจดี</p>
            <p>กรรมการ</p>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box className="listMenu">
            <Link
              href="/member"
              className={`btnMenu ${pathname === "/member" ? "active" : ""}`}
            >
              <img src={`${prefix}/images/member_menu_01.svg`} alt="" />
              ข้อมูลสมาชิก
            </Link>
            <Link
              href="/member/manage-store"
              className={`btnMenu ${
                pathname.match("/member/manage-store") ? "active" : ""
              }`}
            >
              <img src={`${prefix}/images/member_menu_02.svg`} alt="" />
              จัดการร้านค้า/สินค้า
            </Link>
            <Link
              href="/member/history"
              className={`btnMenu ${
                pathname === "/member/history" ? "active" : ""
              }`}
            >
              <img src={`${prefix}/images/member_menu_03.svg`} alt="" />
              ประวัติการอบรม/สัมนา
            </Link>
            <Link
              href="/member/edit-password"
              className={`btnMenu ${
                pathname === "/member/edit-password" ? "active" : ""
              }`}
            >
              <img src={`${prefix}/images/member_menu_04.svg`} alt="" />
              แก้ไขรหัสผ่าน
            </Link>
          </Box>
          <Box className="listMenu">
            <Link href="" className="btnMenu">
              <img src={`${prefix}/images/member_menu_05.svg`} alt="" />
              ออกจากระบบ
            </Link>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MenuAccount;
