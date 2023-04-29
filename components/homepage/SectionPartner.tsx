import { Box, Container, Link, makeStyles } from "@material-ui/core";
import TopicHome from "components/common/TopicHome";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F0F4F5",
    padding: "30px 0 70px 0",
    "& .slidePartner": {
      margin: "0 -10px",
      "& .slick-list": {
        padding: "0 0 25px 0",
      },
      "& .slick-dots li.slick-active button:before": {
        color: "#FBA51A",
      },
      "& .slick-dots li button:before": {
        color: "#C4C4C4",
        opacity: 1,
        fontSize: 12,
      },
      "& .slick-dots li": {
        margin: "0 3px",
      },
    },
    "& .boxPartner": {
      boxShadow: "0 12px 20px rgba(0,0,0,0.06)",
      padding: "0 10px",
      "& a": {
        display: "block",
        position: "relative",
        width: "100%",
        paddingTop: "39%",
      },
      "& img": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
  },
}));

const dataSlide = [
  {
    link: "",
    image: `${prefix}/images/partner_01.jpg`,
  },
  {
    link: "",
    image: `${prefix}/images/partner_02.jpg`,
  },
  {
    link: "",
    image: `${prefix}/images/partner_03.jpg`,
  },
  {
    link: "",
    image: `${prefix}/images/partner_04.jpg`,
  },
  {
    link: "",
    image: `${prefix}/images/partner_05.jpg`,
  },
  {
    link: "",
    image: `${prefix}/images/partner_01.jpg`,
  },
  {
    link: "",
    image: `${prefix}/images/partner_04.jpg`,
  },
];

const SectionPartner = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <TopicHome topic="ลิงก์ที่เกี่ยวข้อง" />
        <Slider {...settings} className="slidePartner">
          {dataSlide.map((item: any, index: number) => {
            return (
              <Box className="boxPartner">
                <Link href={item.link} key={index}>
                  <img src={item.image} alt="" />
                </Link>
              </Box>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
};

export default SectionPartner;
