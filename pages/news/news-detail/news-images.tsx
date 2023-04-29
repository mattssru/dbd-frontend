import { Box, Container, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import CardMediaCustom from "components/CardMediaCustom";
import { PaginationCustom } from "components";

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
    },
    sectionEditor: {
        position: 'relative',
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "ข่าวประชาสัมพันธ์", path: "/" },
    { title: "ข่าวกรม", path: "/news/news-list" },
    { title: "คำชี้แจงเกี่ยวกับการจัดประชุมนิติบุคคลภายใต้ประกาศของจังหวัด เรื่อง สั่งปิดสถานที่เป็นการชั่วคราว" },
];

const dataProduct = [
    {
        topic: "test1",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test2",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test3",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test4",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test1",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test2",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test3",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test4",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test1",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test2",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test3",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test4",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test1",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test2",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test3",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test4",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test1",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test2",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test3",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
    {
        topic: "test4",
        image: `${prefix}/images/img-otherproduct-01.png`,
    },
];

const NewsImages = () => {
    const classes = useStyles();

    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="News & Event"
            titlePage="อัลบั้มรูปภาพ"
            marginTitle="60px"
        >
            <Container maxWidth="lg">
                <Box className={classes.sectionEditor}>
                   
                    <Grid container spacing={3}>
                        {dataProduct.map((item: any, index: number) => {
                            return (
                                <Grid item md={3} sm={4} xs={12} key={index}>
                                    <CardMediaCustom
                                        topic={item.topic}
                                        image={item.image}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
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

export default NewsImages;
