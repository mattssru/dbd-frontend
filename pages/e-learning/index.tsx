import { Box, Container, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import CardList from "components/CardList";
import { PaginationCustom } from "components";
// import { ButtonDefault } from "components/common/button";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    BoxContact: {
        position: 'relative',
        backgroundColor: '#F1F4FA',
        borderRadius: '25px',
        padding: '45px 60px',
        marginBottom: '20px',
        [theme.breakpoints.down("xs")]: {
            padding: '15px 25px',
        },
    },
    sectionproduct: {
        marginBottom: '30px',
    },
    fillterSearch: {
        backgroundColor: '#D9E8F4',
        padding: '30px 55px 40px 55px',
        marginBottom: 30,
        [theme.breakpoints.down('xs')]: {
            padding: '30px 20px',
        },
        '& .btnSearch': {
            display: "flex",
            height: "100%",
            alignItems: "flex-end",
        },
    },
    tabList: {
        margin: "0 0 0 0",
        "& .bodyTabs": {
            paddingTop: 45,
        },
        "& .MuiTabs-flexContainer": {
            maxWidth: 1250,
            overflowY: "scroll",
        },
        "& .MuiAppBar-root": {
            backgroundColor: "transparent",
            boxShadow: "none",
            position: "relative",
        },
        "& .MuiTab-root": {
            fontSize: 25,
            color: "#B1AFAF",
            backgroundColor: '#F0F4F5',
            opacity: 1,
            height: 50,
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            minWidth: 125,
        },
        "& .MuiTab-textColorInherit.Mui-selected": {
            backgroundColor: "#1F419B",
            borderRadius: '0',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            color: "#fff",
        },
        "& .MuiTabs-indicator": {
            display: "none",
        },
    },
    TotalResult: {
        marginBottom: '30px',
        '& p': {
            fontSize: '25px',
            color: '#000000',
        }
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "เรียนรู้" },
];

const dataProduct = [
    {
        image: `${prefix}/images/img-learning-01.png`,
        date: "20 ตุลาคม 2565",
        title: "DBD Academy",
        view:'490',
        desc:'กลุ่มชุมชนบ้านกลางมีครามผลิตเองและปลูกเองดูแลตั้งแต่ต้นกระบวน การ จึงทำให้ได้เนื้อครามที่ดี ปราศจากสารเคมี และไม่มีสิ่งเจือปน'
    },
    {
        image: `${prefix}/images/img-learning-02.png`,
        date: "20 ตุลาคม 2565",
        title: "MOC Event",
        view:'490',
        desc:'เสื้อ ผ้าฝ้าย จะเป็นผ้าฝ้าย แบบถัก เพื่อให้ได้เส้นใยฝ้าย แบบหนา เหมือนเชือกเล็กๆ และนำมาทอมือ ให้เป็นผืน'
    },
    {
        image: `${prefix}/images/img-learning-03.png`,
        date: "20 ตุลาคม 2565",
        title: "NEA",
        view:'490',
        desc:'เสื้อระบาย ออกแบบให้แขนเสื้อ และคอเสื้อมีระบาย ตกต่างลายผ้าเป็น ลายลูกไม้ต่างๆ ทำให้สวมใส่สบาย'
    },
];

const Elearning = () => {
    const classes = useStyles();
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="News & Event"
            titlePage="เรียนรู้"
            marginTitle="20px"
        >
            <Container maxWidth="lg">
                <Box className={classes.sectionproduct}>
                    <Box className="listProduct">
                        <Grid container spacing={3}>
                            {dataProduct.map((item: any, index: number) => {
                                return (
                                    <Grid item md={4} sm={4} xs={12} key={index}>
                                        <CardList
                                            image={item.image}
                                            title={item.title}
                                            date={item.date}
                                            view={item.view}
                                            desc={item.desc}
                                            ratioImage="62%"
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                    <PaginationCustom
                        count={8}
                        boundaryCount={2}
                        siblingCount={0}
                        margin="60px auto 0"
                    />
                </Box>
            </Container>
        </InnerLayout >
    );
};

export default Elearning;
