import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { ControlButton, TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import MenuAccount from "pages/member/component/MenuAccount";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .boxIn": {
      backgroundColor: "#F1F4FA",
      borderRadius: 25,
      padding: "0 20px",
      maxHeight: 475,
      height: "100%",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        padding: "40px 20px",
      },
      "& .formPassword": {
        maxWidth: 350,
        margin: "0 auto",
      },
    },
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "ข้อมูลสมาชิก", path: "/member" },
  { title: "แก้ไขรหัสผ่าน", path: "/member/edit-password" },
];

const EditPasswordPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="แก้ไขรหัสผ่าน"
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
                <Box className="formPassword">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextFieldDefault
                        label="รหัสผ่านเดิม"
                        type="password"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextFieldDefault
                        label="รหัสผ่านใหม่"
                        type="password"
                        required
                      />
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
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default EditPasswordPage;
