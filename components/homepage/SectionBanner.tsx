import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { SelectDefault, TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import { IconSearch } from "components/common/icon";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 60,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 35,
    },
    "& .leftBanner": {
      lineHeight: 0,
      height: 490,
      backgroundImage: `url(${prefix}/images/banner.png)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("sm")]: {
        height: 472.5,
      },
      [theme.breakpoints.down("xs")]: {
        height: 280,
        display: "flex",
        alignItems: "center",
      },
      "& .textBanner": {
        paddingTop: 70,
        paddingLeft: 20,
        [theme.breakpoints.down("md")]: {
          paddingLeft: 0,
        },
        [theme.breakpoints.down("xs")]: {
          paddingTop: 0,
        },
        "& h2": {
          fontSize: 100,
          lineHeight: "80px",
          color: "#fff",
          fontFamily: "DBHeavent_BoldCond",
          marginBottom: 5,
          [theme.breakpoints.down("sm")]: {
            fontSize: 80,
            marginBottom: 0,
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: 56,
            lineHeight: "56px",
          },
        },
        "& h3": {
          fontSize: 60,
          lineHeight: "60px",
          color: "#fff",
          fontFamily: "DBHeavent_BoldCond",
          marginBottom: 30,
          [theme.breakpoints.down("sm")]: {
            fontSize: 40,
            lineHeight: "40px",
            marginBottom: 20,
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: 30,
            lineHeight: "30px",
          },
        },
        "& button": {
          [theme.breakpoints.down("xs")]: {
            maxWidth: 150,
          },
        },
      },
    },
    "& .rightBanner": {
      backgroundColor: "#1F419B",
      padding: "60px 20px",
      [theme.breakpoints.down("xs")]: {
        padding: "30px 20px",
      },
      "& .boxIn": {
        maxWidth: 285,
        margin: "0 auto",
        "& select": {
          backgroundPosition: "right 20px center",
          color: "#a2a2a2",
          fontSize: 24,
          fontFamily: "DBHeavent_MedCond",
          [theme.breakpoints.down("sm")]: {
            fontSize: 20,
          },
          [theme.breakpoints.down("xs")]: {
            height: 45,
          },
        },
        "& .MuiInputBase-root": {
          fontFamily: "DBHeavent_MedCond !important",
          [theme.breakpoints.down("sm")]: {
            fontSize: 20,
          },
          "& input": {
            [theme.breakpoints.down("xs")]: {
              height: 45,
              fontSize: 20,
            },
          },
        },
      },
      "& h2": {
        color: "#fff",
        fontSize: 40,
        lineHeight: "48px",
        fontFamily: "DBHeavent_BoldCond",
        marginBottom: 20,
        [theme.breakpoints.down("sm")]: {
          fontSize: 34,
          lineHeight: "40px",
          marginBottom: 10,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 32,
          lineHeight: "32px",
        },
      },
      "& .listTag": {
        display: "inline-flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 30,
        "& .tag": {
          color: "#fff",
          fontSize: 16,
          lineHeight: "17px",
          display: "block",
          [theme.breakpoints.down("sm")]: {
            fontSize: 14,
          },
          "&:hover": {
            color: "#FBA51A",
          },
        },
      },
      "& button": {
        [theme.breakpoints.down("xs")]: {
          height: 40,
          fontSize: 24,
        },
      },
    },
  },
}));

const SectionBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={0}>
        <Grid item sm={8} xs={12}>
          <Box className="leftBanner">
            <Container maxWidth="sm">
              <Box className="textBanner">
                <Typography variant="h2">MOC Biz Club</Typography>
                <Typography variant="h3">
                  ศูนย์รวมธุรกิจและพันธมิตรทางการค้า (Business Club)
                </Typography>
                <ButtonDefault
                  title="รายละเอียด"
                  color="secondary"
                  maxWidth="185px"
                  height="40px"
                />
              </Box>
            </Container>
            {/* <img src={`${prefix}/images/banner.png`} alt="" /> */}
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box className="rightBanner">
            <Box className="boxIn">
              <Typography variant="h2">ค้นหาของดีประจำจังหวัด</Typography>
              <SelectDefault
                label="Search by Categories"
                placeholder="หมวดหมู่สินค้า"
                height="55px"
                borderRadius="27px"
                fontSize="24px"
                colorLabel="#fff !important"
                margin="0 0 20px 0"
                backgroundImage={`url(${prefix}/images/select_search.svg)`}
                displayIcon="none"
              >
                <option value="">หมวดหมู่สินค้า</option>
                <option value="">หมวดหมู่สินค้า</option>
                <option value="">หมวดหมู่สินค้า</option>
              </SelectDefault>
              <TextFieldDefault
                label="Quick Product Search"
                placeholder="พิมพ์ชื่อสินค้าหรือจังหวัด"
                height="55px"
                borderRadius="27px"
                fontSize="24px"
                colorLabel="#fff !important"
                margin="0 0 10px 0"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconSearch />
                    </InputAdornment>
                  ),
                }}
              />
              <Box className="listTag">
                <Link href="#" className="tag">
                  #กระเป๋า
                </Link>
                <Link href="#" className="tag">
                  #เมล็ดพันธุ์กาแฟ
                </Link>
                <Link href="#" className="tag">
                  #เครื่องประดับ
                </Link>
                <Link href="#" className="tag">
                  #เครื่องนุ่งห่ม
                </Link>
              </Box>
              <ButtonDefault
                title="ค้นหา"
                color="secondary"
                fontSize="30px"
                maxWidth="130px"
                margin="0 auto"
                borderRadius="27px"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionBanner;
