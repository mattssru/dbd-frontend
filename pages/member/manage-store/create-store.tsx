import { Box, Container, Grid, Hidden, makeStyles } from "@material-ui/core";
import { ControlButton, TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import UploadFile from "components/UploadFile";
import MenuAccount from "pages/member/component/MenuAccount";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .boxIn": {
      backgroundColor: "#F1F4FA",
      borderRadius: 25,
      padding: "40px 40px 70px 40px",
      [theme.breakpoints.down("xs")]: {
        padding: "40px 20px",
      },
    },
    "& .btnForm": {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
    },
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "ข้อมูลสมาชิก", path: "/member" },
  { title: "จัดการร้านค้า", path: "/member/manage-store" },
  { title: "สร้างร้านค้า", path: "/member/manage-store/create-store" },
];

const CreateStorePage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="สร้างร้านค้า"
      marginTitle="80px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={12} xs={12}>
              <MenuAccount />
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <Box className="boxIn">
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="ชื่อธุรกิจ/ร้านค้า" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item xs={12}>
                    <TextFieldDefault
                      label="รายละเอียดธุรกิจ/ร้านค้า"
                      required
                      multiline
                      rows={5}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldDefault label="ที่อยู่ร้านค้า" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="เบอร์ติดต่อร้านค้า" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="อีเมลล์" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="เว็บไซต์" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="E-Commerce" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      className="btnForm"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <ButtonDefault
                        title="+ เพิ่ม E-Commerce"
                        height="40px"
                        maxWidth="165px"
                        color="primary"
                        borderRadius="5px"
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="E-Commerce" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="Facebook" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      className="btnForm"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <ButtonDefault
                        title="+ เพิ่ม E-Facebook"
                        height="40px"
                        maxWidth="165px"
                        color="primary"
                        borderRadius="5px"
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="Facebook" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="Twitter" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      className="btnForm"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <ButtonDefault
                        title="+ เพิ่ม Twitter"
                        height="40px"
                        maxWidth="165px"
                        color="primary"
                        borderRadius="5px"
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="Twitter" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="Line" required />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      className="btnForm"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <ButtonDefault
                        title="+ เพิ่ม Line"
                        height="40px"
                        maxWidth="165px"
                        color="primary"
                        borderRadius="5px"
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="Line" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item md={9} sm={12} xs={12}>
                    <UploadFile label="รูปร้านค้า / โลโก้ร้านค้า" required />
                  </Grid>
                </Grid>
                <ControlButton marginresponsive="60px -5px 0 -5px">
                  <ButtonDefault
                    title="ยกเลิก"
                    color="secondary"
                    maxWidth="140px"
                  />
                  <ButtonDefault
                    title="บันทึก"
                    color="primary"
                    maxWidth="140px"
                  />
                </ControlButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default CreateStorePage;
