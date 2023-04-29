import { Box, Container, makeStyles, Grid, Typography } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailContact from "components/common/DetailContact";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import TopicSection from "components/common/TopicSection";
import CardProduct from "components/CardProduct";
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
    sectionContact: {
        marginBottom: '40px',
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
    },
    sectionMain: {
        position: 'relative',
        marginBottom: '30px',
        '& .images': {
            position: 'relative',
            paddingTop: '56.25%',
            marginBottom: '30px',
            '& span': {
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }
            }
        },
        '& .maindetail': {
            marginBottom: '30px',
            '& h3': {
                color: '#1F419B',
                fontSize: '28px',
                lineHeight: '33px',
            },
            '& h2': {
                fontSize: '40px',
                lineHeight: '43px',
                color: '#333333',
                marginBottom: '10px',
            },
            '& p': {
                color: '#505050',
                marginBottom: '20px',
            }
        }
    },
    sectionproduct: {
        marginBottom: '30px',
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "รายละเอียดร้านค้า" },
];

const dataProduct = [
    {
        image: `${prefix}/images/img-otherproduct-01.png`,
        type: "เครื่องดื่ม",
        topic: "กาแฟคั่วมือ",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-02.png`,
        type: "เครื่องสำอาง",
        topic: "สบู่สครับกาแฟ",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-03.png`,
        type: "เสื้อผ้า",
        topic: "กระเป๋า เสื้อคลุม จากผ้าขาวม้า",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-04.png`,
        type: "กระเป๋า",
        topic: "กระเป๋าสาน",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-05.png`,
        type: "กระเป๋า",
        topic: "กระเป๋าสานจากผักตบชวา",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-06.png`,
        type: "ผลไม้",
        topic: "ผลไม้เมืองเหนือ",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-07.png`,
        type: "เครื่องสำอาง",
        topic: "สบู่เห็ดเยื่อไผ่",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/img-otherproduct-08.png`,
        type: "เครื่องนุ่งห่ม",
        topic: "แชมพูสมุนไพร อะโวคาโด",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.",
        shopName: "ศรีสุดาไหมไทย",
        province: "เชียงใหม่",
    },
];

const ProductDetail = () => {
    const classes = useStyles();

    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="Product"
            titlePage="รายละเอียดสินค้า"
            marginTitle="60px"
        >
            <Container maxWidth="lg">
                <Box className={classes.sectionMain}>
                    <Grid container spacing={10}>
                        <Grid item md={7} sm={12} xs={12}>
                            <Box className="images">
                                <span>
                                    <img src={`${prefix}/images/img-product-detail-01.jpg`} alt="" />
                                </span>
                            </Box>
                        </Grid>
                        <Grid item md={5} sm={12} xs={12}>
                            <Box className="maindetail">
                                <Typography variant="h3">ชื่อร้านค้า</Typography>
                                <Typography variant="h2">ศรีสุดาไหมไทย</Typography>
                                <Typography>จำหน่ายเสื้อ พื้นเมือง (ชาย) ทอเครื่อง ด้วยกระดุมเหรียญ
                                    ทำลายด้วยเส้นด้าย ที่ปักเป็นลวดลาย บนเสื้อ รับรอง
                                    คุณภาพโดย ศูนย์ โอทอป เชียงใหม่</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.sectionContact}>
                    <Box className="rowFlex">
                        <Typography variant="h3">กิจกรรม</Typography>
                        {/* <ButtonDefault
                            title="ดูทั้งหมด"
                            color="primary"
                            borderRadius="17px"
                            maxWidth="90px"
                            height="34px"
                            fontSize="20px"
                            backgroundColor="#FBA51A"
                        /> */}
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Box className={classes.BoxContact}>
                                <DetailContact
                                    text="ศรีสุดาไหมไทย"
                                    image={`${prefix}/images/ic-house.svg`}
                                />
                                <DetailContact
                                    textlink="ต.ในเมือง , อ.เมือง​ , จ.เชียงใหม่"
                                    image={`${prefix}/images/ic-pin.svg`}
                                />
                                <DetailContact
                                    textlink="098 - 3245365"
                                    image={`${prefix}/images/ic-call.svg`}
                                />
                                <DetailContact
                                    textlink="Shop@gmail.com"
                                    image={`${prefix}/images/ic-mail.svg`}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <Box className={classes.BoxContact}>
                                <DetailContact
                                    textlink="www.Shop.com"
                                    image={`${prefix}/images/ic-web.svg`}
                                />
                                <DetailContact
                                    textlink="Facebook/shop"
                                    image={`${prefix}/images/ic-fb.svg`}
                                />
                                <DetailContact
                                    textlink="Twitter/shop"
                                    image={`${prefix}/images/ic-twitter.svg`}
                                />
                                <DetailContact
                                    textlink="Line/shop"
                                    image={`${prefix}/images/ic-line.svg`}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.sectionproduct}>
                    <TopicSection
                        topic="สินค้า"
                        topicSecondary="ร้านศรีสุดาไหมไทย"
                        display="inline-block"
                        colorPrimary="#000000"
                        colorSecondary="#1F419B"
                        colorBorder="transpanrent"
                        fontSizeMain="40px"
                    />
                    <Box className="listProduct">
                        <Grid container spacing={3}>
                            {dataProduct.map((item: any, index: number) => {
                                return (
                                    <Grid item md={3} sm={4} xs={12} key={index}>
                                        <CardProduct
                                            image={item.image}
                                            type={item.type}
                                            topic={item.topic}
                                            shopName={item.shopName}
                                            province={item.province}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                    <PaginationCustom
                        count={5}
                        boundaryCount={3}
                        siblingCount={0}
                        margin="60px auto 0"
                    />
                </Box>
            </Container>
        </InnerLayout >
    );
};

export default ProductDetail;
