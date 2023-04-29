import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 700,
    margin: "0 auto",
    padding: "35px 15px 50px 15px",
    backgroundColor: "#F1F4FA",
    borderRadius: 25,
    "& .rootIn": {
      maxWidth: 400,
      margin: "0 auto",
      "& .logo": {
        lineHeight: 0,
        marginBottom: 20,
        "& img": {
          transform: "translate(15%, 0)",
          height: 98,
          maxWidth: "100%",
        },
      },
      "& h2": {
        fontSize: 60,
        lineHeight: "50px",
        color: "#1F419B",
        textAlign: "center",
        marginBottom: 25,
      },
      "& .actionLogin": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 30,
        "& a": {
          color: "#172B4D",
          fontSize: 20,
          lineHeight: "30px",
          "&:hover": {
            color: "#FBA51A",
          },
        },
      },
      "& .register": {
        fontSize: 25,
        lineHeight: "24px",
        display: "block",
        textAlign: "center",
        textDecoration: "underline !important",
        "&:hover": {
          color: "#FBA51A",
        },
      },
    },
  },
}));

const navi = [{ title: "", path: "/" }, { title: "เข้าสู่ระบบ" }];

const LoginPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="เข้าสู่ระบบ"
      marginTitle="80px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Box className="rootIn">
            <Box className="logo">
              <img src={`${prefix}/images/logo_login.svg`} alt="" />
            </Box>
            <Typography variant="h2">เข้าสู่ระบบ</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldDefault
                  placeholder="User name"
                  startIcon={`url(${prefix}/images/icon_user.svg)`}
                  padding="0 0 0 60px"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldDefault
                  placeholder="Password"
                  type="password"
                  startIcon={`url(${prefix}/images/icon_password.svg)`}
                  padding="0 0 0 60px"
                  margin="0 0 20px 0"
                />
              </Grid>
            </Grid>
            <Box className="actionLogin">
              <Box></Box>
              <Link href="/forgot-password">Forgot Password ?</Link>
            </Box>
            <ButtonDefault
              title="เข้าสู่ระบบ"
              color="primary"
              maxWidth="200px"
              margin="0 auto 25px"
              href={`${prefix}/member`}
            />
            <Link href="/register" className="register">
              สมัครสมาชิก MOC Biz Club
            </Link>
          </Box>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default LoginPage;
