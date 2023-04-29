import { Box, Container, makeStyles } from "@material-ui/core";
import TopicHome from "components/common/TopicHome";
import React from "react";
import prefix from "utils/path";
import { CardBizclub } from "..";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 0 50px 0",
    "& .slideBizclub": {
      "& .slick-list": {
        margin: "0 -48px",
        paddingBottom: 50,
        paddingTop: 10,
        [theme.breakpoints.down("xs")]: {
          paddingBottom: 30,
        },
      },
      "& .slick-dots": {
        position: "relative",
        bottom: 0,
        "& li.slick-active button:before": {
          color: "#FBA51A",
        },
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
  },
}));

const dataSlide = [
  {
    image: `${prefix}/images/bizculb_01.svg`,
    title: "สุขภาพดียุคดิจิทัล",
    number: "65.3",
    des: "ดี",
  },
  {
    image: `${prefix}/images/bizculb_02.svg`,
    title: "ดิจิทัลคอมเมิร์ช",
    number: "59.8",
    des: "ดี",
  },
  {
    image: `${prefix}/images/bizculb_03.svg`,
    title: "กฎหมายดิจิทัล",
    number: "52.1",
    des: "พื้นฐาน",
  },
  {
    image: `${prefix}/images/bizculb_04.svg`,
    title: "ความปลอดภัยยุคดิจิทัล",
    number: "56.6",
    des: "พื้นฐาน",
  },
  {
    image: `${prefix}/images/bizculb_05.svg`,
    title: "การรู้เท่าทันสื่อและสารสนเทศ",
    number: "68.1",
    des: "ดี",
  },
  {
    image: `${prefix}/images/bizculb_04.svg`,
    title: "ความปลอดภัยยุคดิจิทัล",
    number: "56.6",
    des: "พื้นฐาน",
  },
];

const SectionBizclub = () => {
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
        <TopicHome topic="สรุปยอดรวมประเภทธุรกิจ Biz Club" />
        <Slider {...settings} className="slideBizclub">
          {dataSlide.map((item: any, index: number) => {
            return (
              <Box className="boxBizculb" key={index}>
                <CardBizclub
                  image={item.image}
                  title={item.title}
                  number={item.number}
                  des={item.des}
                />
              </Box>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
};

export default SectionBizclub;
