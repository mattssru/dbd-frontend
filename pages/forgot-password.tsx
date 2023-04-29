import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ControlButton, TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";

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

      "& h2": {
        fontSize: 60,
        lineHeight: "50px",
        color: "#1F419B",
        textAlign: "center",
        marginBottom: 25,
      },
      "& p": {
        fontSize: 24,
        lineHeight: "30px",
      },
    },
  },
}));

const navi = [{ title: "", path: "/" }, { title: "ลืมรหัสผ่าน" }];

const LoginPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="ลืมรหัสผ่าน"
      marginTitle="80px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Box className="rootIn">
            <Typography variant="h2">ลืมรหัสผ่าน</Typography>
            <p>กรุณากรอก E-Mail ที่ลงทะเบียนไว้</p>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldDefault placeholder="Email" margin="0 0 45px 0" />
              </Grid>
            </Grid>
            <ControlButton>
              <ButtonDefault
                title="ยกเลิก"
                backgroundColor="#fff"
                border="1px solid #CED4D6"
                maxWidth="140px"
                colorFont="#1F419B"
                colorhover="#fff"
              />
              <ButtonDefault
                title="ส่งข้อมูล"
                color="primary"
                maxWidth="140px"
              />
            </ControlButton>
          </Box>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default LoginPage;
