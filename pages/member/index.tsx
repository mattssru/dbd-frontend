import {
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import {
  ControlButton,
  RadioDefault,
  SelectDefault,
  TextFieldDefault,
} from "components/common";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import UploadFile from "components/UploadFile";
import MenuAccount from "pages/member/component/MenuAccount";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .rightMember": {
      "& h2": {
        color: "#1F419B",
        fontSize: 42,
        lineHeight: "50px",
        fontFamily: "DBHeavent_BoldCond",
        marginBottom: 20,
        [theme.breakpoints.down("xs")]: {
          fontSize: 30,
          lineHeight: "34px",
        },
      },
      "& .boxIn": {
        backgroundColor: "#F1F4FA",
        borderRadius: 25,
        padding: "40px 40px 70px 40px",
        [theme.breakpoints.down("xs")]: {
          padding: "40px 20px",
        },
      },
      "& .formRegister": {
        marginBottom: 60,
        "& .textRequired": {
          fontSize: 20,
          lineHeight: "20px",
          fontFamily: "DBHeavent_MedCond",
          color: "#000",
          position: "relative",
          marginBottom: 15,
          "& span": {
            color: "#F52929",
            width: 10,
            display: "inline-block",
            textAlign: "right",
          },
        },
        "& h3": {
          fontSize: 35,
          lineHeight: "30px",
          position: "relative",
          fontFamily: "DBHeavent_BoldCond",
          marginBottom: 30,
          [theme.breakpoints.down("xs")]: {
            fontSize: 30,
          },
          "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            right: 0,
            width: "calc(70% - 20px)",
            height: 3,
            backgroundColor: "#323232",
            [theme.breakpoints.down("sm")]: {
              width: "calc(65% - 20px)",
            },
            [theme.breakpoints.down("xs")]: {
              display: "none",
            },
          },
        },
        "& .typeRegister": {
          marginBottom: 15,
          display: "flex",
          flexDirection: "row",
          position: "relative",
          [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
          },
          "& .inputOther": {
            position: "absolute",
            top: 0,
            right: 0,
            maxWidth: 300,
            [theme.breakpoints.down("xs")]: {
              position: "relative",
              marginTop: 15,
            },
            [theme.breakpoints.down(501)]: {
              maxWidth: "100%",
            },
          },
          "& .MuiFormGroup-root": {
            display: "flex",
            flexDirection: "row",
            "& label": {
              marginRight: 30,
            },
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
            },
          },
        },
        "& .btnForm": {
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        },
      },
    },
  },
}));

const navi = [{ title: "", path: "/" }, { title: "ข้อมูลสมาชิก" }];

const MemberPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="ข้อมูลสมาชิก : นิติบุคคล"
      marginTitle="80px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={12} xs={12}>
              <MenuAccount />
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <Box className="rightMember">
                <Typography variant="h2">ข้อมูลสมาชิก : นิติบุคคล</Typography>
                <Box className="boxIn">
                  <Box className="formRegister">
                    <Typography variant="h3">ข้อมูลการประกอบธุรกิจ</Typography>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault
                          label="เลขทะเบียนนิติบุคคล"
                          required
                        />
                      </Grid>
                      <Hidden xsDown>
                        <Grid item sm={6} xs={12}></Grid>
                      </Hidden>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="ชื่อนิติบุคคล" required />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="รหัสหมวดธุรกิจ" required />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault
                          label="คำอธิบาย (รหัสหมวดธุรกิจ)"
                          required
                        />
                      </Grid>
                      <Hidden xsDown>
                        <Grid item sm={6} xs={12}></Grid>
                      </Hidden>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="ภาคธุรกิจ" required>
                          <option value="">1</option>
                          <option value="">2</option>
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="ประเภทธุรกิจ" required>
                          {/* <option value="">1</option>
                      <option value="">2</option> */}
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault
                          label="ศูนย์เครือข่ายธุรกิจ BIZ CLUB"
                          required
                        >
                          {/* <option value="">1</option>
                      <option value="">2</option> */}
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="">
                          {/* <option value="">1</option>
                      <option value="">2</option> */}
                        </SelectDefault>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="p" className="textRequired">
                          ระเภทผู้กรอกข้อมูล
                          <span>*</span>
                        </Typography>
                        <Box className="typeRegister">
                          <RadioGroup>
                            <RadioDefault label="กรรมการบริษัท" value="1" />
                            <RadioDefault
                              label="ตัวแทน : ต้องอัพโหลดไฟล์หนังสือมอบอำนาจให้เป็นตัวแทน เพื่อตรวจสอบความถูกต้อง"
                              value="2"
                            />
                          </RadioGroup>
                        </Box>
                      </Grid>
                      <Grid item md={9} sm={12} xs={12}>
                        <UploadFile label="ไฟล์แนบเอกสารตัวแทน" required />
                      </Grid>
                      <Grid item md={9} sm={12} xs={12}>
                        <UploadFile label="รูปโลโก้ธุรกิจ" required />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className="formRegister">
                    <Typography variant="h3">ข้อมูลส่วนบุคคล</Typography>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="เลขที่บัตรประชาชน" required />
                      </Grid>
                      <Hidden xsDown>
                        <Grid item sm={6} xs={12}></Grid>
                      </Hidden>
                      <Grid item md={8} sm={10} xs={12}>
                        <Typography component="p" className="textRequired">
                          เลือกประเภทผู้กรอกข้อมูล
                          <span>*</span>
                        </Typography>
                        <Box className="typeRegister">
                          <RadioGroup defaultValue="1">
                            <RadioDefault label="นาย" value="1" />
                            <RadioDefault label="นาง" value="2" />
                            <RadioDefault label="นางสาว" value="3" />
                            <RadioDefault label="อื่นๆ" value="4" />
                          </RadioGroup>
                          <Box className="inputOther">
                            <TextFieldDefault label="" maxWidth="300px" />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="ชื่อ" required />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="นามสกุล" required />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault
                          label="เบอร์โทรศัพท์/เบอร์มือถือ"
                          required
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="อีเมล์" required />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFieldDefault
                          label="ที่อยู่ที่สามารถติดต่อได้"
                          required
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="จังหวัด" required>
                          <option value="">กรุงเทพ</option>
                          <option value="">นนทบุรี</option>
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="อำเภอ/เขต" required>
                          {/* <option value="">1</option>
                      <option value="">2</option> */}
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="ตำบล/แขวง" required>
                          {/* <option value="">1</option>
                      <option value="">2</option> */}
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="รหัสไปรษณีย์" required />
                      </Grid>
                      <Grid item md={9} sm={12} xs={12}>
                        <UploadFile label="รูปผู้สมัคร" required />
                      </Grid>
                    </Grid>
                    <ControlButton marginresponsive="60px -5px 0 -5px">
                      <ButtonDefault
                        title="ยกเลิก"
                        backgroundColor="#fff"
                        border="1px solid #CED4D6"
                        maxWidth="140px"
                        colorFont="#1F419B"
                        colorhover="#fff"
                      />
                      <ButtonDefault
                        title="บันทึก"
                        color="secondary"
                        maxWidth="140px"
                      />
                    </ControlButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default MemberPage;
