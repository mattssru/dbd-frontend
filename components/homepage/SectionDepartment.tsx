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
        backgroundColor: "transparent",
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
                [theme.breakpoints.down("xs")]: {
                    fontSize: 30,
                },
            },
        },
        '& .detailCard':{
          padding: '10px 0',
        },
    },
}));

const dataActivity = [
    {
        image: `${prefix}/images/img-department-01.png`,
        topic: "กิจกรรมนักธุรกิจมืออาชีพ รุ่นที่ 11",
        date: "October 20, 2020",
        desc: "เมื่อวันที่ 8-11 พฤษภาคม 2564  ศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 11 กรมส่งเสริมอุตสาหกรรม ร่วมกับ บริษัท มาเหนือเมฆ คอนซัลติ้ง เน็ตเวิร์ค จำกัด นำผู้ประกอบการเข้าร่วมงานแสดงสินค้า SEOUL FOOD & HOTEL 2022"
    },
];
const dataNews = [
    {
        image: `${prefix}/images/img-department-02.png`,
        topic: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        date: "October 20, 2020",
    },
    {
        image: `${prefix}/images/img-department-03.png`,
        topic: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        date: "October 20, 2020",
    },
    {
        image: `${prefix}/images/img-department-04.png`,
        topic: "ขอเชิญเข้าร่วมงานสัมมนาเชิงปฏิบัติการ “การสร้าง...",
        date: "October 20, 2020",
    },
    {
        image: `${prefix}/images/img-department-05.png`,
        topic: "เชิญสัมมนาเชิงปฏิบัติการ Synergizing Collaboration ",
        date: "October 20, 2020",
    },
];

const SectionDepartment = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth="lg">
                <TopicHome
                    topic="ข่าวประชาสัมพันธ์"
                    topicSecondary="กรมพัฒนาธุรกิจการค้า"
                    display="inline-block"
                    colorSecondary="#FBA51A"
                    colorBorder="#FBA51A"
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
                                backgroundColor="#FBA51A"
                                href={`${prefix}/training/training-list`}
                            />
                        </Box>
                        <Grid container spacing={3}>
                            {dataActivity.map((item: any, index: number) => {
                                return (
                                    <Grid item sm={12} xs={12} key={index}>
                                        <CardThumnail
                                            image={item.image}
                                            topic={item.topic}
                                            date={item.date}
                                            desc={item.desc}
                                            marginBottomDes="10px"
                                            maxHeight="48px"
                                            fontSizeTopic="38px"
                                            lineHeightTopic="41px"
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
                                backgroundColor="#FBA51A"
                                href={`${prefix}/news/news-list`}
                            />
                        </Box>
                        <Grid container spacing={3}>
                            {dataNews.map((item: any, index: number) => {
                                return (
                                    <Grid item sm={6} xs={12} key={index}>
                                        <CardThumnail
                                            image={item.image}
                                            topic={item.topic}
                                            date={item.date}
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

export default SectionDepartment;
