import {
  Box,
  Container,
  Grid,
  Hidden,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  ControlButton,
  SelectDefault,
  TextFieldDefault,
} from "components/common";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2": {
      fontSize: 60,
      lineHeight: "65px",
      marginBottom: 45,
      fontFamily: "DBHeavent_BoldCond",
      color: "#1F419B",
      [theme.breakpoints.down("xs")]: {
        fontSize: 34,
        lineHeight: "30px",
        marginBottom: 30,
      },
    },
    "& .boxMap": {
      width: "100%",
      marginBottom: 20,
      "& iframe": {
        width: "100%",
        maxHeight: 385,
      },
    },
    "& .detailContact": {
      backgroundColor: "#F7FAFC",
      borderRadius: 25,
      padding: "40px 50px",
      marginBottom: 45,
      "& .imgDbd": {
        maxWidth: 205,
        lineHeight: 0,
        [theme.breakpoints.down("sm")]: {
          margin: "0 auto 20px",
        },
        [theme.breakpoints.down("xs")]: {
          maxWidth: 190,
        },
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      "& .listContact": {
        "& .contact": {
          display: "flex",
          alignItems: "flex-start",
          fontSize: 24,
          lineHeight: "30px",
          fontFamily: "DBHeavent_MedCond",
          marginBottom: 18,
          [theme.breakpoints.down("xs")]: {
            fontSize: 20,
            lineHeight: "24px",
          },
          "& img": {
            marginRight: 15,
            [theme.breakpoints.down("xs")]: {
              height: 20,
            },
          },
        },
        "& .topic": {
          fontSize: 30,
          lineHeight: "28px",
          fontFamily: "DBHeavent_BoldCond",
        },
        "& .social": {
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 20,
          [theme.breakpoints.down("xs")]: {
            marginBottom: 15,
          },
          color: "#000",
          "& p span": {
            fontSize: 24,
            lineHeight: "24px",
            [theme.breakpoints.down("xs")]: {
              fontSize: 20,
              lineHeight: "22px",
            },
            "&:last-child": {
              fontSize: 30,
              lineHeight: "26px",
              display: "block",
              [theme.breakpoints.down("xs")]: {
                fontSize: 24,
                lineHeight: "24px",
              },
            },
          },
          "& img": {
            marginRight: 15,
          },
          "&:hover": {
            color: "#1F419B",
          },
        },
      },
    },
    "& .fillterSearch": {
      backgroundColor: "#D9E8F4",
      padding: "50px 45px",
      marginBottom: 40,
      [theme.breakpoints.down("sm")]: {
        padding: "30px 20px",
      },
    },
    "& .resultSearch": {
      "& .headResult": {
        height: 60,
        backgroundColor: "#1F419B",
        borderRadius: 12,
        color: "#fff",
        fontSize: 25,
        padding: "0 55px",
        fontFamily: "DBHeavent_MedCond",
        display: "flex",
        alignItems: "center",
      },
      "& .result": {
        minHeight: 90,
        display: "flex",
        alignItems: "center",
        borderBottom: "0.5px solid #ddd",
        padding: 15,
      },
      "& .leftResult": {
        fontSize: 30,
        lineHeight: "30px",
        fontFamily: "DBHeavent_BoldCond",
        paddingLeft: 55,
        [theme.breakpoints.down("xs")]: {
          paddingLeft: 0,
        },
      },
      "& .resultTel": {
        display: "inline-flex",
        alignItems: "center",
        color: "#1F419B",
        marginRight: 50,
        "& img": {
          marginRight: 15,
        },
      },
      "& .resultFacebook": {
        display: "inline-flex",
        alignItems: "center",
        color: "#000",
        fontSize: 30,
        lineHeight: "26px",
        fontFamily: "DBHeavent_BoldCond",
        "& img": {
          marginRight: 15,
        },
        "& p span": {
          fontSize: 24,
          lineHeight: "20px",
          "&:last-child": {
            paddingLeft: 5,
            fontSize: 30,
            lineHeight: "26px",
            display: "inline-block",
          },
        },
        "&:hover": {
          color: "#1F419B",
        },
      },
    },
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "ติดต่อเรา", path: "/contact" },
];

const ContactPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="Contact Us"
      titlePage="ติดต่อเรา"
      marginTitle="30px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Box className="boxMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.276515422818!2d100.48453541502076!3d13.882407397993237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284d7ad5ffe43%3A0xe4ce41eb21e9f3d9!2z4LiB4Lij4Lih4Lie4Lix4LiS4LiZ4Liy4LiY4Li44Lij4LiB4Li04LiI4LiB4Liy4Lij4LiE4LmJ4LiyIOC4geC4o-C4sOC4l-C4o-C4p-C4h-C4nuC4suC4k-C4tOC4iuC4ouC5jA!5e0!3m2!1sth!2sth!4v1647938707551!5m2!1sth!2sth"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </Box>
          <Box className="detailContact">
            <Grid container spacing={3}>
              <Grid item md={4} sm={12} xs={12}>
                <Box className="imgDbd">
                  <img src={`${prefix}/images/logoContact.svg`} alt="" />
                </Box>
              </Grid>
              <Hidden only={["lg", "md", "xs"]}>
                <Grid md={4} sm={12} xs={12}></Grid>
              </Hidden>
              <Grid item md={4} sm={6} xs={12}>
                <Box className="listContact">
                  <Box className="contact topic">
                    <img src={`${prefix}/images/contact_01.svg`} alt="" />
                    กรมพัฒนาธุรกิจการค้า
                  </Box>
                  <Box className="contact">
                    <img src={`${prefix}/images/contact_02.svg`} alt="" />
                    563 ถ.นนทบุรี ต.บางกระสอ อ.เมือ
                    <br />
                    จ.นนทบุรี 11000
                  </Box>
                  <Box className="contact">
                    <img src={`${prefix}/images/contact_03.svg`} alt="" />
                    โทรศัพท์ : 02 528 7600
                    <br />
                    โทรสาร : 02 547 4459
                  </Box>
                  <Box className="contact">
                    <img src={`${prefix}/images/contact_04.svg`} alt="" />
                    eMail : secretary@dbd.go.th
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Box className="listContact">
                  <Link href="#" className="social">
                    <img src={`${prefix}/images/contact_facebook.svg`} alt="" />
                    <p>
                      <span>Facebook</span>
                      <span>กรมพัฒนาธุรกิจการค้า</span>
                    </p>
                  </Link>
                  <Link href="#" className="social">
                    <img src={`${prefix}/images/contact_twii.svg`} alt="" />
                    <p>
                      <span>Twitter</span>
                      <span>@RelationDBD</span>
                    </p>
                  </Link>
                  <Link href="#" className="social">
                    <img src={`${prefix}/images/contact_line.svg`} alt="" />
                    <p>
                      <span>Line OA</span>
                      <span>@RelationDBD</span>
                    </p>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h2">สำนักงานพาณิชย์จังหวัด</Typography>
          <Box className="fillterSearch">
            <Grid container spacing={3}>
              <Grid item md={9} sm={8} xs={12}>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault
                      placeholder="กรอกคำค้นหา"
                      height="54px"
                      borderRadius="27px"
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <SelectDefault
                      displayLabel="none"
                      height="54px"
                      borderRadius="27px"
                    >
                      <option value="">เลือกภาค</option>
                      <option value="">กลาง</option>
                    </SelectDefault>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3} sm={4} xs={12}>
                <ControlButton>
                  <ButtonDefault
                    title="ค้นหา"
                    color="primary"
                    maxWidth="117px"
                  />
                  <ButtonDefault
                    title="ล้างคำค้นหา"
                    backgroundColor="#fff"
                    border="1px solid #CED4D6"
                    maxWidth="117px"
                    colorFont="#1F419B"
                    colorhover="#fff"
                  />
                </ControlButton>
              </Grid>
            </Grid>
          </Box>
          <Box className="resultSearch">
            <Box className="headResult">ภาคกลาง</Box>
            <Box className="result">
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <Box className="leftResult">สำนักงานจังหวัดปทุมธานี</Box>
                </Grid>
                <Grid item sm={6}>
                  <Link href="tel:025287600" className="resultTel">
                    <img src={`${prefix}/images/tel.svg`} alt="" />
                    02 528 7600
                  </Link>
                  <Link href="#" className="resultFacebook">
                    <img src={`${prefix}/images/contact_facebook.svg`} alt="" />
                    <p>
                      <span>Facebook</span>
                      <span>ปทุมธานี</span>
                    </p>
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box className="result">
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <Box className="leftResult">สำนักงานจังหวัดปทุมธานี</Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Link href="tel:025287600" className="resultTel">
                    <img src={`${prefix}/images/tel.svg`} alt="" />
                    02 528 7600
                  </Link>
                  <Link href="#" className="resultFacebook">
                    <img src={`${prefix}/images/contact_facebook.svg`} alt="" />
                    <p>
                      <span>Facebook</span>
                      <span>ปทุมธานี</span>
                    </p>
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box className="result">
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <Box className="leftResult">สำนักงานจังหวัดปทุมธานี</Box>
                </Grid>
                <Grid item sm={6}>
                  <Link href="tel:025287600" className="resultTel">
                    <img src={`${prefix}/images/tel.svg`} alt="" />
                    02 528 7600
                  </Link>
                  <Link href="#" className="resultFacebook">
                    <img src={`${prefix}/images/contact_facebook.svg`} alt="" />
                    <p>
                      <span>Facebook</span>
                      <span>ปทุมธานี</span>
                    </p>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default ContactPage;
