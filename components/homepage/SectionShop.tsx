import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import { CardShop } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "65px 0 0 0",
    // backgroundColor: "#1F419B",
    backgroundImage: `url(${prefix}/images/bg_shop.png)`,
    backgroundSize: "100% 79.6%",
    backgroundRepeat: "no-repeat",
    marginBottom: 45,
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100% 100%",
      padding: "40px 0",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
    "& .leftSection": {
      "& h2": {
        color: "#fff",
        fontSize: 60,
        lineHeight: "50px",
        marginBottom: 10,
        [theme.breakpoints.down("sm")]: {
          fontSize: 50,
          lineHeight: "46px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 46,
          lineHeight: "40px",
        },
      },
      "& p": {
        fontSize: 30,
        lineHeight: "33px",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
          fontSize: 26,
          lineHeight: "26px",
        },
      },
    },
  },
}));

const dataShop = [
  {
    image: `${prefix}/images/cardshop_01.jpg`,
    link: "#",
    topic: "เครื่องปั้นดินเผา ป้ายอ คลองสระบัว",
    province: "ปทุมวัน, กรุงเทพฯ",
  },
  {
    image: `${prefix}/images/cardshop_02.jpg`,
    link: "#",
    topic: "ณภา เครื่องเงินสุโขทัยเงินแท้ 99.99%",
    province: "สุโขทัย",
  },
  {
    image: `${prefix}/images/cardshop_03.jpg`,
    link: "#",
    topic: "Mindscape Cafe by Bottomless",
    province: "นนทบุรี",
  },
  {
    image: `${prefix}/images/cardshop_04.jpg`,
    link: "#",
    topic: "เดอะ ลอร์รี่ - ผู้ให้บริการส่งของขนย้าย",
    province: "ชลบุรี",
  },
  {
    image: `${prefix}/images/cardshop_05.jpg`,
    link: "#",
    topic: "NANA HUNTER COFFEE ROASTERS คาเฟ่โรงคั่วสุดดิบ",
    province: "กรุงเทพฯ",
  },
  {
    image: `${prefix}/images/cardshop_06.jpg`,
    link: "#",
    topic: "Home Fresh Delivery ขายผักออแกนิค",
    province: "นครปฐม",
  },
];

const SectionShop = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={3} sm={3} xs={12}>
            <Box className="leftSection">
              <Typography variant="h2">
                ร้านค้า
                <br />
                Biz Shop
              </Typography>
              <p>ค้นหาข้อมูลพันธมิตรทางการค้าในรูปแบบแผนที่</p>
            </Box>
          </Grid>
          <Grid item md={9} sm={9} xs={12}>
            <Grid container spacing={3}>
              {dataShop.map((item: any, index: number) => {
                return (
                  <Grid item md={4} sm={6} xs={12} key={index}>
                    <CardShop
                      image={item.image}
                      topic={item.topic}
                      province={item.province}
                      link={`${prefix}/product/product-list`}
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

export default SectionShop;
