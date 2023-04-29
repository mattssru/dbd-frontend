import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CardVertical from "components/CardVertical";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        marginBottom: '80px',

    },
    LayoutTarget: {
        position: 'relative',
        marginBottom: '50px',
        paddingBottom: '100px',
        paddingTop: '50px',
        zIndex: 1,
        '& .MuiGrid-item': {
            '&:nth-child(1)': {
                '& .BoxVision': {
                    position: 'relative',
                    marginTop: '-50px',
                    [theme.breakpoints.down("sm")]: {
                        marginTop: '0',
                        marginBottom: '30px',
                    },
                }
            },
            '&:nth-child(2)': {
                '& .BoxVision': {
                    position: 'relative',
                    marginTop: '0',
                    [theme.breakpoints.down("sm")]: {
                        marginTop: '0',
                        marginBottom: '30px',
                    },
                }
            },
            '&:nth-child(3)': {
                '& .BoxVision': {
                    position: 'relative',
                    marginTop: '-100px',
                    [theme.breakpoints.down("sm")]: {
                        marginTop: '0',
                        marginBottom: '30px',
                    },
                }
            },
        },
        '&:after': {
            content: `''`,
            width: '150%',
            left: '-25%',
            height: '400px',
            backgroundColor: '#1F419B',
            bottom: '0px',
            position: 'absolute',
            zIndex: -1,
        },
        '& .BoxVision': {
            position: 'relative',
        },
        '& h2': {
            textAlign: 'left',
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
    },
    layoutcontent: {
        position: 'relative',
        marginBottom: '100px',
        '& h2': {
            textAlign: 'left',
            fontSize: '60px',
            lineHeight: '50px',
            marginBottom: '40px',
            color: '#1F419B',
        },
        '& ul': {
            marginBottom: '30px',
            '& li': {
                fontSize: '30px',
                lineHeight: '35px',
                color: '#505050',
            }
        }
    },
    layouttargetimage: {
        position: 'relative',
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
        '& h2': {
            textAlign: 'left',
            fontSize: '60px',
            lineHeight: '50px',
            marginBottom: '40px',
            color: '#1F419B',
        },
        '& ul': {
            marginBottom: '30px',
            '& li': {
                fontSize: '30px',
                lineHeight: '35px',
                color: '#505050',
                position: 'relative',
                paddingLeft: '40px',
                marginBottom: '10px',
                '&:after': {
                    content: `''`,
                    width: '15px',
                    height: '15px',
                    backgroundColor: '#FBA51A',
                    borderRadius: '100%',
                    position: 'absolute',
                    left: '0',
                    top: '10px',
                }
            }
        }
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "เกี่ยวกับเรา", path: '' },
    { title: "เป้าหมาย วัตถุประสงค์", path: '/about-us/target' },
];

const dataVision = [
    {
        image: `${prefix}/images/img-target-02.png`,
        topic: "ได้รับการพัฒนาศักยภาพ ทางการค้า มีพี่เลี้ยง และ ที่ปรึกษาทางธุรกิจ",
        subimage: `${prefix}/images/ic-target-01.svg`,
    },
    {
        image: `${prefix}/images/img-target-03.png`,
        topic: "มีเครือข่ายพันธมิตรที่เกื้อกูลกันทั้งในและต่างประเทศ",
        subimage: `${prefix}/images/ic-target-02.svg`,
    },
    {
        image: `${prefix}/images/img-target-04.png`,
        topic: "เพิ่มช่องทางการตลาดและโอกาสต่อยอดธุรกิจ",
        subimage: `${prefix}/images/ic-target-03.svg`,
    },
];

const target = () => {
    const classes = useStyles();
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="About Us"
            titlePage="เป้าหมาย วัตถุประสงค์"
            marginTitle="80px"
        >
            <Container maxWidth="lg">
                <Box className={classes.root}>
                    <Box className={classes.LayoutTarget}>
                        <Grid container spacing={3}>
                            {dataVision.map((item: any, index: number) => {
                                return (
                                    <Grid item md={4} sm={4} xs={12} key={index}>
                                        <CardVertical
                                            image={item.image}
                                            subimage={item.subimage}
                                            topic={item.topic}
                                            visionImage="true"
                                            textAlignDes="left!important"
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                    <Box className={classes.layoutcontent}>
                        <Typography variant="h2">เป้าหมาย</Typography>
                        <ul>
                            <li>1. เป็นศูนย์กลางสนับสนุนและผลักดันการประกอบธุรกิจของผู้ประกอบการธุรกิจระดับพื้นที่ในทุกภูมิภาค</li>
                            <li>2. มีการบริหารจัดการ และเชื่อมโยงเครือข่ายธุรกิจอย่างเป็นระบบอย่างมีประสิทธิภาพ</li>
                            <li>3. เป็นกลไกสำคัญทำให้ผู้ประกอบการธุรกิจเข้มแข็งได้ด้วยตนเองอย่างแท้จริง</li>
                        </ul>
                    </Box>
                    <Box className={classes.layouttargetimage}>
                        <Grid container spacing={10}>
                            <Grid item md={6} sm={6} xs={12}>
                                <Box className="images">
                                    <span>
                                        <img src={`${prefix}/images/img-target-01.jpg`} alt="" />
                                    </span>
                                </Box>
                            </Grid>
                            <Grid item md={6} sm={6} xs={12}>
                                <Typography variant="h2">วัตถุประสงค์</Typography>
                                <ul>
                                    <li>เป็นศูนย์รวมของผู้ประกอบการธุรกิจที่จะคอยช่วยเหลือเกื้อกูลกันในรูปแบบพี่ช่วยน้อง</li>
                                    <li>รวมตัวสร้างเครือข่ายและร่วมกันพัฒนาเศรษฐกิจในรูปแบบประชารัฐให้สอดคล้องกับศักยภาพของแต่ละพื้นที่</li>
                                    <li>เกิดการเชื่อมโยงการค้าทั้งระดับจังหวัด ระดับภูมิภาค และระดับประเทศ อันเป็นกลไกสำคัญให้ภาคธุรกิจของไทยมีความเข้มแข็งและดำเนินธุรกิจได้อย่างยั่งยืน</li>
                                </ul>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </InnerLayout>
    );
};

export default target;
