import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        marginBottom: '80px',
    },
    SectionMain: {
        position: 'relative',
        zIndex: 1,
        paddingTop: '125px',
        [theme.breakpoints.down("sm")]: {
            paddingTop:'90px',
        },
        '&:after': {
            content: `''`,
            backgroundImage: `url(${prefix}/images/banner-about.png)`,
            width: '150%',
            left: '-25%',
            height: '350px',
            position: 'absolute',
            top: '60px',
            zIndex: '-1',
        },
        '& .images': {
            position: 'relative',
            top: '-170px',
            [theme.breakpoints.down("sm")]: {
                display:'none',
            },
        },
        '& .title': {
            marginBottom: '150px',
            '& h2': {
                fontSize: '120px',
                color: '#fff',
                marginBottom: '10px',
                lineHeight: '90px',
            },
            '& h3': {
                color: '#FBA51A',
                fontSize: '30px',
                marginBottom: '10px',
            },
            '& h4': {
                color: '#FBA528',
                fontSize: '50px',
                lineHeight: '38px',
                '& span': {
                    display: 'block',
                    fontSize: '30px',
                }
            }
        },
        '& .content': {
            '& p': {
                color: '#000',
                fontSize: '24px',
                lineHeight: '28px',
                '& span': {
                    color: '#1F419B',
                }
            }
        }
    },
}));

const navi = [
    { title: "", path: "/" },
    { title: "เกี่ยวกับเรา", path: "/" },
    { title: "ความเป็นมาเครือข่ายธุรกิจ MOC Biz Club " },
];

const AboutUs = () => {
    const classes = useStyles();
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="About Us"
            titlePage="ความเป็นมาเครือข่ายธุรกิจ MOC Biz Club"
            marginTitle="80px"
        >


            <Container maxWidth="lg">
                <Box className={classes.root}>
                    <Box className={classes.SectionMain}>
                        <Grid container spacing={3}>
                            <Grid item md={6} sm={6} xs={12}>
                                <Box className="images">
                                    <span>
                                        <img src={`${prefix}/images/img-about-01.png`} alt="" />
                                    </span>
                                </Box>
                            </Grid>
                            <Grid item md={6} sm={6} xs={12}>
                                <Box className="title">
                                    <Typography variant="h3">MOC : กระทรวงพาณิชย์ ( Ministry of Commerce )</Typography>
                                    <Typography variant="h2">Biz Club</Typography>
                                    <Typography variant="h4">ศูนย์รวมธุรกิจและพันธมิตรทางการค้า <span>(Business Club)</span></Typography>
                                </Box>
                                <Box className="content">
                                    <Typography><span>ศูนย์เครือข่ายธุรกิจ (Biz Club)</span> เป็นศูนย์รวมธุรกิจและพันธมิตรทางการค้า เพื่อ
                                        พัฒนาและสร้างความเข้มแข็งให้กับผู้ประกอบการในแต่ละพื้นที่ โดยกรมพัฒนา
                                        ธุรกิจการค้า ได้จัดตั้งศูนย์เครือข่ายธุรกิจต้นแบบ เมื่อปี พ.ศ. 2554 และขยาย
                                        ศูนย์เครือข่ายธุรกิจเพิ่มขึ้นทุกปี ตามแนวทางประชารัฐ โดยมีการจัดตั้งครบทั้ง
                                        77 จังหวัดทั่วประเทศ ภายใต้ชื่อ <span>“เครือข่ายธุรกิจ MOC Biz Club”</span> ซึ่งมีคณะ
                                        กรรมการ Biz Club Thailand บริหารงานร่วมกับสำนักานพาณิชย์จังหวัดในแต่
                                        ละพื้นที่ เพื่อเป็นกลไกสำคัญในการเพิ่มขีดความสามารถในการแข่งขันธุรกิจ และ
                                        ขับเคลื่อนเศรษฐกิจฐานรากให้เติบโตอย่างมั่นคง มั่งคั่ง และยั่งยืน</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </InnerLayout>
    );
};

export default AboutUs;
