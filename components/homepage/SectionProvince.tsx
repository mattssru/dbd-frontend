import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ButtonDefault } from "components/common/button";
import TopicHome from "components/common/TopicHome";
import React from "react";
import prefix from "utils/path";
import { CardThumnail } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FBA51A",
    padding: "45px 0 70px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0",
    },
    "& .rowFlex": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      "& h3": {
        fontSize: 40,
        fontFamily: "DBHeavent_BoldCond",
        [theme.breakpoints.down("xs")]: {
          fontSize: 30,
        },
      },
    },
  },
}));

const dataActivity = [
  {
    image: `${prefix}/images/thumnail_01.jpg`,
    topic: "เครือข่าย MOC Biz Club ภาคเหนือตอนบน จัดงาน MOC Biz...",
    date: "October 20, 2020",
  },
  {
    image: `${prefix}/images/thumnail_02.jpg`,
    topic: "พบกับกิจกรรม e-Commerce Business Switch-On รับคำ…",
    date: "October 20, 2020",
  },
];
const dataNews = [
  {
    image: `${prefix}/images/thumnail_03.jpg`,
    topic: "MOC Biz Club ผนึกกำลังระดับภูมิภาค เติมเต็มกลไก...",
    date: "October 20, 2020",
  },
  {
    image: `${prefix}/images/thumnail_04.jpg`,
    topic: "พาณิชย์ ชู MOC Biz Club ฟื้นธุรกิจหลังพิษโควิด...",
    date: "October 20, 2020",
  },
  {
    image: `${prefix}/images/thumnail_05.jpg`,
    topic: "พาณิชย์ ชู MOC Biz Club สร้างเครือข่ายพี่เลี้ยงให้ผู้ประกอบการ...",
    date: "October 20, 2020",
  },
];

const SectionProvince = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <TopicHome
          topic="ข่าวประชาสัมพันธ์"
          topicSecondary="สำนักงานพาณิชย์จังหวัด"
          colorPrimary="#fff"
          display="inline-block"
        />
        <Grid container spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <Box className="rowFlex">
              <Typography variant="h3">กิจกรรม</Typography>
              <ButtonDefault
                title="ดูทั้งหมด"
                color="primary"
                borderRadius="17px"
                maxWidth="90px"
                height="34px"
                fontSize="20px"
                href={`${prefix}/training/training-list`}
              />
            </Box>
            <Grid container spacing={3}>
              {dataActivity.map((item: any, index: number) => {
                return (
                  <Grid item sm={6} xs={12} key={index}>
                    <CardThumnail
                      image={item.image}
                      topic={item.topic}
                      date={item.date}
                      maxHeight="48px"
                      link={`${prefix}/training/training-detail`}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box className="rowFlex">
              <Typography variant="h3">ข่าวประชาสัมพันธ์</Typography>
              <ButtonDefault
                title="ดูทั้งหมด"
                color="primary"
                borderRadius="17px"
                maxWidth="90px"
                height="34px"
                fontSize="20px"
                href={`${prefix}/news/news-list`}
              />
            </Box>
            <Grid container spacing={3}>
              {dataNews.map((item: any, index: number) => {
                return (
                  <Grid item sm={4} xs={12} key={index}>
                    <CardThumnail
                      image={item.image}
                      topic={item.topic}
                      date={item.date}
                      height="114px"
                      link={`${prefix}/news/news-detail`}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionProvince;
