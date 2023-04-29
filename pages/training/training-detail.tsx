import { Box, Container, makeStyles, Grid, Typography, IconButton, Popover, Button } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailContact from "components/common/DetailContact";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import TopicSection from "components/common/TopicSection";
import { IconShare } from "components/common/icon";
import { TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import CardDownload from "components/CardDownload";
import CardNext from "components/CardNext";
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
    downloadDoc: {
        position: 'relative',
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "ข่าวประชาสัมพันธ์", path: "/" },
    { title: "ข่าวกรม", path: "/" },
    { title: "คำชี้แจงเกี่ยวกับการจัดประชุมนิติบุคคลภายใต้ประกาศของจังหวัด เรื่อง สั่งปิดสถานที่เป็นการชั่วคราว" },
];


const trainingdetail = () => {
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
                                    <Grid item xs={6}>
                                        <Box className="btnRegis">
                                            <ButtonDefault
                                                title="สมัครเข้าร่วมกิจกรรม"
                                                background="#1F419B"
                                                maxWidth="180px"
                                                borderRadius="5px"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className={classes.sectionContact}>
                                <Box className={classes.BoxContact}>
                                    <DetailContact
                                        text="วันที่ลงทะเบียน"
                                        image={`${prefix}/images/ic-registor.svg`}
                                        widthtext="260px"
                                        textsecond=": 15 -18 สิงหาคม 2564"
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                    <DetailContact
                                        text="วันที่เริ่มอบรม/สัมมนา"
                                        image={`${prefix}/images/ic-date.svg`}
                                        widthtext="260px"
                                        textsecond=": 25 สิงหาคม 2564 l เวลา 09:30 น."
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                    <DetailContact
                                        text="วันที่สิ้นสุดอบรม/สัมมนา"
                                        image={`${prefix}/images/ic-date.svg`}
                                        widthtext="260px"
                                        textsecond=": 27 สิงหาคม 2564 l เวลา 16:00 น."
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                    <DetailContact
                                        text="ผู้ดำเนินการ"
                                        image={`${prefix}/images/ic-user.svg`}
                                        widthtext="260px"
                                        textsecond=": หน่วยงาน A"
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                    <DetailContact
                                        text="ผู้ติดต่อ"
                                        image={`${prefix}/images/ic-user.svg`}
                                        widthtext="260px"
                                        textsecond=": หน่วยงาน A"
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                    <DetailContact
                                        text="สถานที่จัดอบรม/สัมมนา"
                                        image={`${prefix}/images/ic-detailpin.svg`}
                                        widthtext="260px"
                                        textsecond=": กรมพัฒนาธุรกิจการค้า"
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                    <DetailContact
                                        text="จำนวนผู้เข้าร่วม"
                                        image={`${prefix}/images/ic-user.svg`}
                                        widthtext="260px"
                                        textsecond=": 100 คน"
                                        colortext="#1F419B"
                                        marginBottom="10px"
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.sectionEditor}>
                                <TopicSection
                                    topic="รายละเอียด"
                                    display="inline-block"
                                    colorPrimary="#000000"
                                    colorBorder="transpanrent"
                                    fontSizeMain="40px"
                                />
                                <Box className="boxEditor">
                                    <Typography variant="h2">พบกับ 9 กูรูขั้นเทพที่จะช่วย “อัพสกิลการตลาดออนไลน์ สร้างยอดขายทะลุล้าน” ให้กับธุรกิจของคุณ</Typography>
                                    <Typography>กับหลักสูตรปั้นร้านค้าออนไลน์ขั้นเทพรุ่นที่ 2 (Online Marketing Genius : OMG#2) โดยกรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์</Typography>
                                    <Typography>พลิกธุรกิจพิชิตเงินล้าน ตลอดระยะเวลา 2 วัน คุณจะได้พบกับเนื้อหาสุด Exclusive ตอบโจทย์คน e-Commerce</Typography>
                                    <ul>
                                        <li>สร้างยอดขายแบบถล่มทลาย ด้วย LINE OA & LINE MY SHOP</li>
                                        <li>จะเกิดอะไรขึ้นกับธุรกิจ หากไม่คิดมี e-Commerce Business Plan</li>
                                        <li>พลิกธุรกิจแบบฉับพลัน ด้วยคลิปสั้นๆ บน TikTok</li>
                                        <li>เสิร์ชยังไงก็เจอด้วย Google Ads</li>
                                        <li>การทำ Content Marketing ให้ปังต้องทำอย่างไร!!!</li>
                                        <li>สร้างเพจร้านค้าออนไลน์ให้ดังหรือพังบน Facebook?</li>
                                        <li>เทคนิคการ Live สร้างยอดขายทะลุล้านบน Facebook</li>
                                    </ul>
                                </Box>
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

export default trainingdetail;
