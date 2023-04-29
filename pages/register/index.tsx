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
import { IconBack } from "components/common/icon";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import UploadFile from "components/UploadFile";
import React, { useState } from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F1F4FA",
    borderRadius: 25,
    padding: "80px 15px 70px 15px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 20px",
    },
    "& .rootIn": {
      maxWidth: 875,
      margin: "0 auto",
      "& .typeRegister": {
        marginBottom: 15,
        display: "flex",
        flexDirection: "row",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
        },
        "& label": {
          marginRight: 50,
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
      "& .formRegister": {
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
}));

const navi = [{ title: "", path: "/" }, { title: "สมัครสมาชิก" }];

const RegisterPage = () => {
  const classes = useStyles();
  const [register, setRegister] = useState("legalEntity");
  const [step, setStep] = useState("stepFirst");

  const handleChangForm = (e: any) => {
    return setRegister(e.target.value);
  };
  const handleStep = () => {
    setStep("stepSecond");
  };
  const handleBackStep = () => {
    setStep("stepFirst");
  };

  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="สมัครสมาชิก"
      marginTitle="60px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Box className="rootIn">
            {step === "stepFirst" ? (
              <Box className="stepFirst">
                <Box className="typeRegister">
                  <RadioDefault
                    label="นิติบุคคล"
                    value="legalEntity"
                    name="register"
                    checked={register === "legalEntity"}
                    onChange={handleChangForm}
                  />
                  <RadioDefault
                    label="ทะเบียนพาณิชย์"
                    value="commercial"
                    name="register"
                    checked={register === "commercial"}
                    onChange={handleChangForm}
                  />
                  <RadioDefault
                    label="บุคคลธรรมดา"
                    value="personal"
                    name="register"
                    checked={register === "personal"}
                    onChange={handleChangForm}
                  />
                </Box>
                {register === "legalEntity" && (
                  <Box className="formRegister">
                    <Typography variant="h3">ข้อมูลการประกอบธุรกิจ</Typography>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault
                          label="เลขทะเบียนนิติบุคคล"
                          required
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <Box
                          className="btnForm"
                          style={{ justifyContent: "flex-start" }}
                        >
                          <ButtonDefault
                            title="ตรวจสอบหมายเลขนิติบุคคล"
                            height="40px"
                            maxWidth="230px"
                            color="primary"
                            borderRadius="5px"
                          />
                        </Box>
                      </Grid>
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
                          เลือกประเภทผู้กรอกข้อมูล
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
                )}
                {register === "commercial" && (
                  <Box className="formRegister">
                    <Typography variant="h3">ข้อมูลการประกอบธุรกิจ</Typography>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="เลขทะเบียนพาณิชย์" required />
                      </Grid>
                      <Hidden xsDown>
                        <Grid item sm={6} xs={12}></Grid>
                      </Hidden>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="ชื่อธุรกิจ" required />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="รหัสหมวดธุรกิจ" required />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="ภาคธุรกิจ" required>
                          {/* <option value="">1</option>
                      <option value="">2</option> */}
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
                      <Grid item md={9} sm={12} xs={12}>
                        <UploadFile label="เอกสารทะเบียนพาณิชย์" required />
                      </Grid>
                      <Grid item md={9} sm={12} xs={12}>
                        <UploadFile label="รูปโลโก้ธุรกิจ" required />
                      </Grid>
                    </Grid>
                  </Box>
                )}
                {register === "personal" && (
                  <Box className="formRegister">
                    <Typography variant="h3">ข้อมูลการประกอบธุรกิจ</Typography>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="ชื่อธุรกิจ" required />
                      </Grid>
                      <Hidden xsDown>
                        <Grid item sm={6} xs={12}></Grid>
                      </Hidden>
                      <Grid item sm={6} xs={12}>
                        <SelectDefault label="ภาคธุรกิจ" required>
                          {/* <option value="">1</option>
                   <option value="">2</option> */}
                        </SelectDefault>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextFieldDefault label="ประเภทธุรกิจ" required />
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
                      <Grid item md={9} sm={12} xs={12}>
                        <UploadFile label="เอกสารทะเบียนพาณิชย์" required />
                      </Grid>
                    </Grid>
                  </Box>
                )}
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
                    title="ถัดไป"
                    color="secondary"
                    maxWidth="140px"
                    onClick={handleStep}
                  />
                </ControlButton>
              </Box>
            ) : (
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
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
                      <Grid item md={9} sm={8} xs={12}>
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <TextFieldDefault label="ชื่อ" required />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <TextFieldDefault label="นามสกุล" required />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={3} sm={4}>
                        <Box className="btnForm">
                          <ButtonDefault
                            title="ตรวจสอบชื่อ - นามสกุล"
                            height="40px"
                            maxWidth="180px"
                            color="primary"
                            borderRadius="5px"
                            fontS
                            ize="20px"
                          />
                        </Box>
                      </Grid>
                    </Grid>
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
                      {/* <option value="">1</option>
                      <option value="">2</option> */}
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
                  <Grid item sm={6} xs={12}>
                    <Box className="capha">
                      <img src={`${prefix}/images/capha.svg`} alt="" />
                    </Box>
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: "30px",
                        textDecoration: "underline",
                        color: "#1F419B",
                        textAlign: "right",
                        fontFamily: "DBHeavent_MedCond",
                      }}
                    >
                      คลิกที่ภาพเพื่อเปลี่ยนรหัสยืนยัน
                    </p>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="กรอกรหัสยืนยัน" required />
                    <p
                      style={{
                        color: "#F06F23",
                        fontSize: 20,
                        lineHeight: "20px",
                        paddingTop: 10,
                      }}
                    >
                      * กรุณากรอกข้อมูลที่มีสัญลักษณ์นี้
                      ให้ครบทุกช่องเพื่อประโยชน์ของตัวท่านเอง
                    </p>
                  </Grid>
                </Grid>
                <ControlButton marginresponsive="60px -5px 0 -5px">
                  <Hidden xsDown>
                    <ButtonDefault
                      title="ย้อนกลับ"
                      backgroundColor="transparent"
                      backgroundColorHover="transparent"
                      backgroundHover="transparent"
                      border="none"
                      colorFont="#1F419B"
                      colorhover="#1F419B"
                      startIcon={<IconBack />}
                      maxWidth="110px"
                      onClick={handleBackStep}
                    />
                  </Hidden>
                  <ButtonDefault
                    title="ยกเลิก"
                    backgroundColor="#fff"
                    border="1px solid #CED4D6"
                    maxWidth="140px"
                    colorFont="#1F419B"
                    colorhover="#fff"
                  />
                  <ButtonDefault
                    title="ตกลง"
                    color="primary"
                    maxWidth="140px"
                    href="/member"
                  />
                </ControlButton>
                <Hidden smUp>
                  <ButtonDefault
                    title="ย้อนกลับ"
                    backgroundColor="transparent"
                    backgroundColorHover="transparent"
                    backgroundHover="transparent"
                    border="none"
                    colorFont="#1F419B"
                    colorhover="#1F419B"
                    startIcon={<IconBack />}
                    maxWidth="100%"
                    margin="15px 0 0 0"
                    onClick={handleBackStep}
                  />
                </Hidden>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default RegisterPage;
