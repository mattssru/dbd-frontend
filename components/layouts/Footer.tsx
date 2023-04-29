import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .topFooter": {
      backgroundColor: "#1F419B",
      paddingBottom: 40,
    },
    "& .controlTop": {
      marginBottom: 20,
      "& .logoFooter": {
        height: 115,
        maxWidth: 205,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
          margin: "0 auto",
        },
        [theme.breakpoints.down("xs")]: {
          maxWidth: 170,
          "& img": {
            height: 55,
          },
        },
      },
    },
    "& .controlBottom": {
      "& .nameFooter": {
        marginBottom: 25,
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
        "& p": {
          color: "#fff",
          fontSize: 24,
          lineHeight: "26px",
          fontFamily: "DBHeavent_BoldCond",
          "&:last-child": {
            fontSize: 20,
            lineHeight: "26px",
            fontFamily: "DBHeavent_Cond",
          },
        },
      },
      "& .contactFooter": {
        display: "flex",
        marginBottom: 30,
        [theme.breakpoints.down("sm")]: {
          justifyContent: "center",
        },
        "& .itemContact": {
          position: "relative",
          paddingRight: 15,
          marginRight: 15,
          [theme.breakpoints.down("xs")]: {
            paddingRight: 10,
            marginRight: 10,
          },
          "&::after": {
            content: "''",
            position: "absolute",
            width: 1,
            height: "calc(100% - 10px)",
            right: 0,
            bottom: 9,
            backgroundColor: "#fff",
          },
          "&:last-child::after": {
            display: "none",
          },
          "& h5": {
            fontSize: 20,
            lineHeight: "30px",
            color: "#FBA51A",
            fontFamily: "DBHeavent_BoldCond",
          },
          "& a": {
            color: "#fff",
            fontSize: 24,
            lineHeight: "30px",
            [theme.breakpoints.down("md")]: {
              fontSize: 20,
              lineHeight: "28px",
            },
          },
        },
      },
      "& .facebookFooter": {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
          justifyContent: "space-around",
        },
        [theme.breakpoints.down("xs")]: {
          justifyContent: "space-between",
        },
        "& .itemFacebook": {
          display: "flex",
          alignItems: "center",
          marginRight: 20,
          color: "#fff",
          fontSize: 24,
          lineHeight: "23px",
          [theme.breakpoints.down("md")]: {
            marginRight: 10,
            fontSize: 22,
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: 18,
            lineHeight: "20px",
            marginRight: 0,
          },
          "&:hover": {
            color: "#FBA51A",
          },
          "&:last-child": {
            marginRight: 0,
          },
          "& img": {
            marginRight: 12,
            height: 58,
            [theme.breakpoints.down("xs")]: {
              height: 50,
            },
          },
        },
      },
      "& .rightBottom": {
        "& .linkBold": {
          color: "#FBA51A",
          fontSize: 22,
          lineHeight: "32px",
          display: "block",
          fontFamily: "DBHeavent_MedCond",
        },
        "& a": {
          color: "#fff",
          fontSize: 19,
          lineHeight: "26px",
          display: "block",
          fontFamily: "DBHeavent_Cond",
          "&:hover": {
            color: "#FBA51A",
          },
        },
      },
    },
    "& .bottomFooter": {
      minHeight: 110,
      display: "flex",
      alignItems: "center",
      "& .copyRight": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        "& p": {
          fontSize: 20,
          lineHeight: "22px",
        },
      },
      "& .viewFooter": {
        textAlign: "center",
        "& h3": {
          fontSize: 50,
          lineHeight: "40px",
          color: "#1F419B",
          fontFamily: "DBHeavent_BoldCond",
          letterSpacing: 1.5,
        },
        "& .visitorsFooter": {
          color: "#1F419B",
          fontSize: 20,
          "& img": {
            marginRight: 5,
          },
        },
        "& .dateFooter": {
          color: "#707070",
          fontSize: 20,
          lineHeight: "24px",
        },
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="topFooter">
        <Container maxWidth="lg">
          <Box className="controlTop">
            <Box className="logoFooter">
              <img src={`${prefix}/images/logo.svg`} alt="" />
            </Box>
            <Box className="subscribe"></Box>
          </Box>
          <Box className="controlBottom">
            <Grid container spacing={3}>
              <Grid item md={5} sm={12} xs={12}>
                <Box className="nameFooter">
                  <p>กรมพัฒนาธุรกิจการค้า</p>
                  <p>
                    563 ถนน นนทบุรี ตำบลบางกระสอ อำเภอเมือง จังหวัดนนทบุรี 11000
                  </p>
                </Box>
                <Box className="contactFooter">
                  <Box className="itemContact">
                    <Typography variant="h5">โทร</Typography>
                    <Link href="tel:025474445">0 2547 4445</Link>
                  </Box>
                  <Box className="itemContact">
                    <Typography variant="h5">โทรสาร</Typography>
                    <Link href="tel:025474445">0 2547 4445</Link>
                  </Box>
                  <Box className="itemContact">
                    <Typography variant="h5">อีเมล</Typography>
                    <Link href="mailto:co_support3@dbd.go.th">
                      co_support3@dbd.go.th
                    </Link>
                  </Box>
                </Box>
                <Box className="facebookFooter">
                  <Link href="#" className="itemFacebook">
                    <img src={`${prefix}/images/ic_facebook_1.svg`} alt="" />
                    Facebook
                    <br />
                    กรมพัฒนาธุรกิจการค้า
                  </Link>
                  <Link href="#" className="itemFacebook">
                    <img src={`${prefix}/images/ic_facebook_2.svg`} alt="" />
                    Facebook
                    <br />
                    DBD Biz Club
                  </Link>
                </Box>
              </Grid>
              <Grid item md={7} sm={12} xs={12}>
                <Box className="rightBottom">
                  <Grid container spacing={3}>
                    <Grid item sm={4} xs={6}>
                      <Link href="#" className="linkBold">
                        ข้อมูลเครือข่าย
                      </Link>
                      <Link href="#" className="linkBold">
                        MOC BIZ CLUB THAILAND
                      </Link>
                      <Link href="#">คณะกรรมการ</Link>
                      <Link href="#">วิสัยทัศน์</Link>
                      <Link href="#">ข่าวสารกิจกรรม</Link>
                      <Link href="#">ปฏิทินกิจกรรม MOC Biz Club Thailand</Link>
                      <Link href="#" className="linkBold">
                        ปฏิทินกิจกรรม
                      </Link>
                      <Link href="#" className="linkBold">
                        เวทีแลกเปลี่ยน
                      </Link>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                      <Link href="#" className="linkBold">
                        ข้อมูลเครือข่าย
                      </Link>
                      <Link href="#">เครือข่ายส่วนกลาง</Link>
                      <Link href="#">เครือข่ายภาคเหนือ</Link>
                      <Link href="#">เครือข่ายภาคตะวันออกเฉียงเหนือ</Link>
                      <Link href="#">เครือข่ายภาคตะวันออก</Link>
                      <Link href="#">เครือข่ายภาคกลาง</Link>
                      <Link href="#">เครือข่ายภาคใต้</Link>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                      <Link href="#" className="linkBold">
                        ข่าวประชาสัมพันธ์
                      </Link>
                      <Link href="#">ข่าวสารกิจกรรม</Link>
                      <Link href="#">ข่าวกรม (Press Release)</Link>
                      <Link href="#">ข่าวอบรมสัมนา</Link>
                      <Link href="#">ข่าวสารภายนอก</Link>
                      <Link href="#" className="linkBold">
                        คำแนะนำการใช้ระบบ
                      </Link>
                      <Link href="#" className="linkBold">
                        สำหรับเจ้าหน้าที่
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box className="bottomFooter">
        <Container maxWidth="lg" style={{ height: "100%" }}>
          <Grid container spacing={3} style={{ height: "100%" }}>
            <Grid item sm={9}>
              <Box className="copyRight">
                <p>© Copyright 2015 All Right Reserved.</p>
                <p>
                  เว็บไซต์นี้รองรับการใช้งานกับ Browser Internet Explorer
                  (เวอร์ชั่น 9 ขึ้นไป) Browser Google Chrome (เวอร์ชั่น 40
                  ขึ้นไป) และ Browser Firefox (เวอร์ชั่น 20 ขึ้นไป)
                </p>
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box className="viewFooter">
                <Box className="visitorsFooter">
                  <img src={`${prefix}/images/ic_visitors.svg`} alt="" />
                  Visitors
                </Box>
                <Typography variant="h3">1,817,208</Typography>
                <Box className="dateFooter">Today : 17 l Yesterday : 99</Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
