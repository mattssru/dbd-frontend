import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CardVertical from "components/CardVertical";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        marginBottom: '80px',
    },
    LayoutContent: {
        position: 'relative',
        textAlign: 'center',
        margin: '80px 0',
        backgroundColor: '#F7FAFC',
        borderRadius: '25px',
        padding: '80px',
        '& .boxContent': {
            position: 'relative',
            maxWidth: '800px',
            textAlign: 'center',
            margin: '0 auto',
            display: 'inline-block',
            '& h2': {
                fontSize: '60px',
                lineHeight: '50px',
                marginBottom: '20px',
                color: '#1F419B',
            },
            '& p ': {
                fontSize: '50px',
                lineHegiht: '50px',
                color: '#374450',
            },
            '&:after': {
                content: `''`,
                width: '100px',
                height: '160px',
                backgroundImage: `url(${prefix}/images/mark-left.svg)`,
                position: 'absolute',
                backgroundPosition: 'center',
                left: '-100px',
                top: '0',
                backgroundRepeat: 'no-repeat',
            },
            '&:before': {
                content: `''`,
                width: '100px',
                height: '160px',
                backgroundImage: `url(${prefix}/images/mark-right.svg)`,
                position: 'absolute',
                backgroundPosition: 'center',
                right: '-100px',
                bottom: '-160px',
                backgroundRepeat: 'no-repeat',
            }
        }
    },
    LayoutVision: {
        position: 'relative',
        '& .BoxVision': {
            position: 'relative'
        },
        '& h2': {
            textAlign: 'center',
            fontSize: '60px',
            lineHeight: '50px',
            marginBottom: '40px',
            color: '#1F419B',
        },
        '& .image': {
            position: 'relative',
            width: '100%',
            paddingTop: '135%',
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
        '& .text': {
            position: 'absolute',
            bottom: '50px',
            width: '240px',
            textAlign: 'center',
            left: '50%',
            transform: 'translateX(-50%)',
            '& p': {
                fontSize: '35px',
                lineHeight: '38px',
                color: '#fff',
            }
        }
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "เกี่ยวกับเรา", path: '' },
    { title: " วิสัยทัศน์ พันธกิจ", path: '/about-us/vision' },
];

const dataVision = [
    {
        image: `${prefix}/images/img-vision-01.png`,
        topic: "สร้างพันธมิตรทางการค้ากับ เครือข่ายธุรกิจทั้งในและ ต่างประเทศ",
    },
    {
        image: `${prefix}/images/img-vision-02.png`,
        topic: "เชื่อมโยงสินค้าบริการ การตลาด และทรัพยากร ทางธุรกิจ ระหว่างกัน ให้เกิดการพัฒนาสู่มาตรฐานสากล",
    },
    {
        image: `${prefix}/images/img-vision-03.png`,
        topic: "สร้างพันธมิตรทางการค้ากับ เครือข่ายธุรกิจทั้งในและ ต่างประเทศ",
    },
];

const vision = () => {
    const classes = useStyles();
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="About Us"
            titlePage="วิสัยทัศน์ พันธกิจ"
            marginTitle="80px"
        >
            <Container maxWidth="lg">
                <Box className={classes.root}>
                    <Box className={classes.LayoutContent}>
                        <Box className="boxContent">
                            <Typography variant="h2">วิสัยทัศน์</Typography>
                            <Typography>เชื่อมโยงเครือข่าย พัฒนาธุรกิจไทย ก้าวไกลสู่ตลาดสากล</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.LayoutVision}>
                        <Typography variant="h2">พันธกิจ</Typography>
                        <Grid container spacing={3}>
                            {dataVision.map((item: any, index: number) => {
                                return (
                                    <Grid item md={4} sm={4} xs={12} key={index}>
                                        <CardVertical
                                            image={item.image}
                                            topic={item.topic}
                                            textAlignDes="center"
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </InnerLayout>
    );
};

export default vision;
