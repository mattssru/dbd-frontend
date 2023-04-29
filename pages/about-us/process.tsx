import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .leftPage": {
      position: "relative",
      width: "100%",
      maxWidth: 545,
      paddingTop: "100%",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        marginBottom: 20,
      },
      "& img": {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        objectFit: "cover",
      },
    },
    "& .rightPage": {
      "& .content": {
        display: "flex",
        marginBottom: 50,
        "& .icon": {
          marginRight: 20,
          width: "100%",
          maxWidth: 85,
          height: 85,
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F419B",
          [theme.breakpoints.down("xs")]: {
            maxWidth: 60,
            height: 60,
          },
          "& img": {
            height: 35,
          },
        },
        "& h3": {
          fontSize: 35,
          lineHeight: "34px",
          marginBottom: 10,
          fontFamily: "DBHeavent_BoldCond",
        },
        "& p": {
          fontSize: 22,
          lineHeight: "22px",
          marginBottom: 20,
          "&:last-child": {
            marginBottom: 0,
          },
        },
      },
    },
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "เกี่ยวกับเรา", path: "/about-us" },
  { title: "แนวทางการดำเนินการ" },
];

const ProcessPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="About Us"
      titlePage="แนวทางการดำเนินการ"
      marginTitle="40px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <Box className="leftPage">
                <img src={`${prefix}/images/process.jpg`} alt="" />
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box className="rightPage">
                <Box className="content">
                  <Box className="icon">
                    <img src={`${prefix}/images/ic_process01.svg`} alt="" />
                  </Box>
                  <Box className="detail">
                    <Typography variant="h3">
                      การพัฒนาเครือข่ายธุรกิจ
                    </Typography>
                    <p>
                      เพิ่มความเข้มแข็งให้สมาชิก MOC Biz Club
                      โดยเข้าร่วมกิจกรรมพัฒนาศักยภาพผู้ประกอบการธุรกิจ
                      โดยมีการแลกเปลี่ยน เรียนรู้ และถ่ายทอดประสบการณ์
                    </p>
                    <p>
                      การประกอบธุรกิจระหว่างสมาชิก ร่วมกันแก้ไขปัญหา
                      และพัฒนาธุรกิจแต่ละพื้นที่รวมทั้งหาช่องทางการตลาด
                      รูปแบบใหม่เพิ่มเติมให้สมาชิก เช่น การค้าขายผ่านออนไลน์
                      เพื่อสร้างความแข็งแกร่งทางธุรกิจ
                    </p>
                  </Box>
                </Box>
                <Box className="content">
                  <Box className="icon">
                    <img src={`${prefix}/images/ic_process02.svg`} alt="" />
                  </Box>
                  <Box className="detail">
                    <Typography variant="h3">การสร้างเครือข่าย</Typography>
                    <p>
                      สนับสนุนให้เกิดการรวมกลุ่มและจับคู่พันธมิตรธุรกิจ
                      ทั้งภายในพื้นที่ สมาชิกเดียวกัน
                      และระหว่างพื้นที่ประสานให้เกิดการพัฒนาและใช้ทรัพยากรทางธุรกิจระหว่างกันอย่างครบวงจร
                    </p>
                  </Box>
                </Box>
                <Box className="content">
                  <Box className="icon">
                    <img src={`${prefix}/images/ic_process03.svg`} alt="" />
                  </Box>
                  <Box className="detail">
                    <Typography variant="h3">
                      การเชื่อมโยงเครือข่ายธุรกิจ
                    </Typography>
                    <p>
                      สนับสนุนให้เกิดการรวมกลุ่ม และจับคู่พันธมิตรธุรกิจ
                      ทั้งภายในพื้น ที่สมาชิกเดียวกัน
                      และระหว่างพื้นที่ประสานให้เกิดการพัฒนาและใช้
                      ทรัพยากรทางธุรกิจระหว่างกันอย่างครบวงจร
                    </p>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default ProcessPage;
