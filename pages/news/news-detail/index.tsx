import { Box, Container, makeStyles, Grid, Typography, IconButton, Popover, Button } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import TopicSection from "components/common/TopicSection";
import { IconShare } from "components/common/icon";
import { TextFieldDefault } from "components/common";
import CardDownload from "components/CardDownload";
import CardNext from "components/CardNext";
import CardMediaCustom from "components/CardMediaCustom";
import { ButtonDefault } from "components/common/button";
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
    },
    detailmain: {
        marginBottom: '30px',
        '& .btnRegis': {
            textAlign: 'right',
            float: 'right',
        },
        "& .imgThumnail": {
            width: "100%",
            position: "relative",
            display: "block",
            marginBottom: 10,
            overflow: "hidden",
            "& img": {
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                "&:hover": {
                    transition: "all 0.2s ease-in",
                },
            },
        },
        "& .date": {
            color: "#C4C4C4",
            fontSize: 16,
            lineHeight: "19px",
            marginBottom: 10,
            display: 'inline-flex',
            [theme.breakpoints.down("xs")]: {
                fontSize: 13,
            },
            "& p:first-child": {
                // borderRight: "1px solid #C4C4C4",
                paddingRight: 10,
                marginRight: 10,
                position: "relative",
                [theme.breakpoints.down("xs")]: {
                    paddingRight: 5,
                    marginRight: 5,
                },
                // "&::after": {
                //     content: "''",
                //     width: 1,
                //     height: "calc(100% - 5px)",
                //     position: "absolute",
                //     backgroundColor: "#C4C4C4",
                //     right: 0,
                //     top: "50%",
                //     transform: "translate(-0%, -50%)",
                // },
            },
            "& p:last-child": {
                display: "flex",
                alignItems: "center",
                "& img": {
                    marginRight: 5,
                },
            },
        },

        "& .time": {
            color: "#4D207E",
            fontSize: 16,
            lineHeight: "19px",
        },
        "& .btnShare": {
            textAlign: "right",
            display: 'inline-block',
            marginBottom: 10,
            "& button": {
                padding: "0 10px 0 10px",
                [theme.breakpoints.down("xs")]: {
                    padding: "0 5px 0 5px",
                },
            },
        },
    },
    popover: {
        "& .MuiPopover-paper": {
            padding: "15px 25px 30px 25px",
            borderRadius: 10,
            boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
            backgroundColor: "#fff",
            maxWidth: 300,
            width: "100%",
            marginTop: 15,
            "& h3": {
                fontSize: 24,
                lineHeight: "24px",
                color: "#000",
                marginBottom: 25,
            },
            "& .socailShare": {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
            },
            "& .btnShare_2": {
                textAlign: "center",
                cursor: "pointer",
                "& img": {
                    height: 40,
                    marginBottom: 3,
                },
                "& span": {
                    display: "block",
                    fontSize: 15,
                    lineHeight: "20px",
                },
            },
            "& .copyClipboard": {
                position: "relative",
                "& .btnCopy": {
                    position: "absolute",
                    right: 0,
                    top: 4,
                    padding: 0,
                    color: "#1AABE0",
                    fontSize: 14,
                },
            },
        },
    },
    sectionEditor: {
        position: 'relative',
        '& .boxEditor': {
            marginBottom: '30px',
            '& h2': {
                fontSize: '24px',
                color: '#1F419B',
                marginBottom: '10px',
            },
            '& p': {
                color: '#000000',
                fontSize: '20px',
                marginBottom: '20px',
            },
            '& ul': {
                '& li': {
                    paddingLeft: '40px',
                    fontSize: '20px',
                    marginBottom: '5px',
                    backgroundImage: `url(${prefix}/images/ic-list.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '17px',
                    backgroundPosition: 'left center',
                }
            }
        }
    },
    sectionGallery: {
        position: 'relative',
        marginBottom: '70px',
        '& .btnRegis': {
            textAlign: 'right',
            float: 'right',
        },
    },
    sectionVideo: {
        position: 'relative',
        marginBottom: '70px',
        '& .btnRegis': {
            textAlign: 'right',
            float: 'right',
        },
    },
    downloadDoc: {
        position: 'relative',
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "ข่าวประชาสัมพันธ์", path: "/news/news-list" },
    { title: "ข่าวกรม", path: "/" },
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
    }
];

const NewsDetail = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="News & Event"
        >
            <Container maxWidth="lg">

                <Box className={classes.sectionMain}>
                    <Grid container spacing={3}>
                        <Grid item md={8} sm={12} xs={12}>
                            <TopicSection
                                topic="คำชี้แจงเกี่ยวกับการจัดประชุมนิติบุคคลภายใต้ประกาศของจังหวัด เรื่อง สั่งปิดสถานที่เป็นการชั่วคราว"
                                display="inline-block"
                                colorPrimary="#000000"
                                colorBorder="transpanrent"
                                fontSizeMain="40px"
                                lineHeightMain="45px"
                            />
                            <Box className="images">
                                <span>
                                    <img src={`${prefix}/images/img-product-detail-01.jpg`} alt="" />
                                </span>
                            </Box>
                            <Box className={classes.detailmain}>
                                <Grid container spacing={0}>
                                    <Grid item xs={6}>
                                        <Box className="date">
                                            <p>15 ม.ค. 65</p>
                                            <p>
                                                <img src={`${prefix}/images/view_gray.svg`} alt="" />
                                                189
                                            </p>
                                        </Box>
                                        <Box className="btnShare">
                                            <IconButton aria-describedby={id} onClick={handleClick}>
                                                <IconShare />
                                            </IconButton>
                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                className={classes.popover}
                                                anchorOrigin={{
                                                    vertical: "bottom",
                                                    horizontal: "left",
                                                }}
                                                transformOrigin={{
                                                    vertical: "top",
                                                    horizontal: "center",
                                                }}
                                            >
                                                <Typography variant="h3">แชร์</Typography>
                                                <Box className="socailShare">
                                                    <Box className="btnShare_2">
                                                        <img src={`${prefix}/images/share_facebook.svg`} alt="" />
                                                        <span>Facebook</span>
                                                    </Box>
                                                    <Box className="btnShare_2">
                                                        <img src={`${prefix}/images/share_youtube.svg`} alt="" />
                                                        <span>Youtube</span>
                                                    </Box>
                                                    <Box className="btnShare_2">
                                                        <img src={`${prefix}/images/share_twii.svg`} alt="" />
                                                        <span>Twitter</span>
                                                    </Box>
                                                    <Box className="btnShare_2">
                                                        <img src={`${prefix}/images/share_line.svg`} alt="" />
                                                        <span>Line</span>
                                                    </Box>
                                                </Box>
                                                <Box className="copyClipboard">
                                                    <TextFieldDefault
                                                        value="https://youtu.be/XuO2Y3XptZY"
                                                        fontSize="16px"
                                                        height="30px"
                                                        borderRadius="1px"
                                                        border="1px solid #D4D3D4"
                                                        boxShadow="none"
                                                        disabled
                                                    />
                                                    <Button className="btnCopy">คัดลอก</Button>
                                                </Box>
                                            </Popover>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className={classes.sectionEditor}>

                                <Box className="boxEditor">
                                    <Typography>ตามที่หลายจังหวัดได้กำหนดมาตรการควบคุมสถานที่ กิจการ หรือ กิจกรรม เพื่อรองรับสถานการณ์ การแพร่ระบาดของ  Covid-19  เนื่องจากจำนวนผู้ติดเชื้อสะสมและผู้ป่วยรายใหม่เพิ่มจำนวนขึ้นอย่างต่อเนื่อง เพื่อให้สามารถเปิดดำเนินการได้ภายใต้เงื่อนไขที่กำหนด โดยได้มีประกาศกำหนดควบคุมการเปิดดำเนินการ ภายใต้เงื่อนไขเงื่อนเวลาการจัดระบบและระเบียบ  ซึ่งอาจส่งผลกระทบต่อการจัดประชุมของนิติบุคคล โดยเฉพาะนิติบุคคลที่ได้ กำหนดวัน  เวลา  สถานที่ ในการประชุมระหว่างวันที่  26  –  30 เมษายน  2564</Typography>
                                    <Typography>กรมพัฒนาธุรกิจการค้าขอแจ้งว่า  หากนิติบุคคลใดที่ได้กำหนดการประชุมไว้ดังกล่าวข้างต้นก่อนที่ จะมีการประกาศมาตรการควบคุมการจัดกิจกรรมที่มีความเสี่ยงต่อการแพร่โรค  โดยจำกัดจำนวนผู้เข้าร่วม กิจกรรมและได้รับผลกระทบอันเป็นเหตุจำเป็นต้องเลื่อนการประชุมออกไป  หากนิติบุคคลนั้นได้กำหนดวัน ประชุมครั้งใหม่ไม่เกิน  1  เดือนนับจากที่กำหนดไว้เดิม  เมื่อนิติบุคคลได้ดำเนินการจัดประชุมแล้วให้ทำหนังสือ ชี้แจงเหตุผลพร้อมกับการยื่นงบการเงิน  สำเนาบัญชีรายชื่อผู้ถือหุ้น  สำเนารายงานการประชุมผู้ถือหุ้น  หรือ รายงานประจำปีแล้ว</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.sectionGallery}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <TopicSection
                                            topic="อัลบั้มรูปภาพ"
                                            display="inline-block"
                                            colorPrimary="#000000"
                                            colorBorder="transpanrent"
                                            fontSizeMain="40px"
                                            image={`${prefix}/images/ic-gallery.svg`}
                                        />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <Box className="btnRegis">
                                            <ButtonDefault
                                                title="ดูทั้งหมด +"
                                                background="#1F419B"
                                                minWidth="82"
                                                maxWidth="100%"
                                                borderRadius="7px"
                                                href={`${prefix}/news/news-detail/news-images`}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    {dataProduct.map((item: any, index: number) => {
                                        return (
                                            <Grid item md={4} sm={4} xs={12} key={index}>
                                                <CardMediaCustom
                                                    topic={item.topic}
                                                    image={item.image}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                            <Box className={classes.sectionVideo}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <TopicSection
                                            topic="วิดีโอ"
                                            display="inline-block"
                                            colorPrimary="#000000"
                                            colorBorder="transpanrent"
                                            fontSizeMain="40px"
                                            image={`${prefix}/images/ic-video.svg`}
                                        />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <Box className="btnRegis">
                                            <ButtonDefault
                                                title="ดูทั้งหมด +"
                                                background="#1F419B"
                                                minWidth="82"
                                                maxWidth="100%"
                                                borderRadius="7px"
                                                href={`${prefix}/news/news-detail/news-video`}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    {dataProduct.map((item: any, index: number) => {
                                        return (
                                            <Grid item md={4} sm={4} xs={12} key={index}>
                                                <CardMediaCustom
                                                    topic={item.topic}
                                                    image={item.image}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                            <Box className={classes.downloadDoc}>
                                <TopicSection
                                    topic="เอกสารแนบ"
                                    display="inline-block"
                                    colorPrimary="#000000"
                                    colorBorder="transpanrent"
                                    fontSizeMain="40px"
                                />
                                <Box className="listDownload">
                                    <CardDownload
                                        text="เอกสารแนบ 1"
                                        image={`${prefix}/images/ic-word.svg`}
                                    />
                                    <CardDownload
                                        text="เอกสารแนบ 2"
                                        image={`${prefix}/images/ic-word.svg`}
                                    />
                                    <CardDownload
                                        text="เอกสารแนบ 3"
                                        image={`${prefix}/images/ic-word.svg`}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <TopicSection
                                topic="รายละเอียด"
                                display="inline-block"
                                colorPrimary="#1F419B"
                                colorBorder="transpanrent"
                                fontSizeMain="30px"
                                lineHeightMain="35px"
                            />
                            <CardNext
                                title="ขอเชิญธุรกิจโลจิสติกส์ไทยสมัคร เข้าร่วมกิจกรรมยกระดับความเชื่อมั่น..."
                                image={`${prefix}/images/img-next-01.png`}
                                date="15 ม.ค. 65"
                                view="189"
                            />
                            <CardNext
                                title="ขอเชิญธุรกิจโลจิสติกส์ไทยสมัคร เข้าร่วมกิจกรรมยกระดับความเชื่อมั่น..."
                                image={`${prefix}/images/img-next-01.png`}
                                date="15 ม.ค. 65"
                                view="189"
                            />
                            <CardNext
                                title="ขอเชิญธุรกิจโลจิสติกส์ไทยสมัคร เข้าร่วมกิจกรรมยกระดับความเชื่อมั่น..."
                                image={`${prefix}/images/img-next-01.png`}
                                date="15 ม.ค. 65"
                                view="189"
                            />
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </InnerLayout >
    );
};

export default NewsDetail;
