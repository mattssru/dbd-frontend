import {
  Box,
  Container,
  Grid,
  Hidden,
  InputAdornment,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { ControlButton, TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import { IconDelete } from "components/common/icon";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import TableDefault from "components/TableDefault";
import MenuAccount from "pages/member/component/MenuAccount";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .boxIn": {
      backgroundColor: "#F1F4FA",
      borderRadius: 25,
      padding: "40px 40px 70px 40px",
      [theme.breakpoints.down("xs")]: {
        padding: "40px 20px",
      },
      "& .upLoadImage": {
        marginBottom: 45,
        "& label": {
          fontSize: 20,
          lineHeight: "30px",
          fontFamily: "DBHeavent_MedCond",
          marginBottom: 8,
          "& span": {
            color: "#F52929",
            width: 10,
            display: "inline-block",
            textAlign: "right",
          },
        },
      },
    },
    "& .btnForm": {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
    },
    "& .flexTopic": {
      "& h2": {
        color: "#1F419B",
        fontSize: 42,
        lineHeight: "50px",
        fontFamily: "DBHeavent_BoldCond",
        marginBottom: 20,
      },
    },
    "& .btnTable": {
      margin: "0 -2px",
      display: "inline-flex",
      "& button, a": {
        margin: "0 2px",
        width: 79,
      },
    },
    "& .imgTable": {
      maxWidth: 75,
      maxHeight: "100%",
    },
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "ข้อมูลสมาชิก", path: "/member" },
  { title: "จัดการร้านค้า", path: "/member/manage-store" },
  { title: "เพิ่มสินค้า", path: "/member/manage-store/create-store" },
];
const tablehead = ["ลำดับ", "รูปสินค้า", "จัดการ"];
const tableBody = [
  {
    cell01: "1",
    cell02: `${prefix}/images/imgTable.png`,
  },
  {
    cell01: "2",
    cell02: `${prefix}/images/imgTable.png`,
  },
];

const CreateProductPage = () => {
  const classes = useStyles();
  const renderTable = () => {
    return tableBody.map((item: any, index: number) => {
      return (
        <TableRow key={index}>
          <TableCell align="center" style={{ width: "10%" }}>
            {item.cell01}
          </TableCell>
          <TableCell align="center" style={{ width: "50%" }}>
            <img src={item.cell02} alt="" className="imgTable" />
          </TableCell>
          <TableCell align="center" style={{ width: "30%" }}>
            <Box className="btnTable">
              <ButtonDefault
                title="ลบ"
                color="secondary"
                borderRadius="4px"
                height="25px"
                maxWidth="80px"
                fontSize="16px"
                startIcon={<IconDelete />}
              />
            </Box>
          </TableCell>
        </TableRow>
      );
    });
  };
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="BizClub Account"
      titlePage="จัดการร้านค้า/สินค้า"
      marginTitle="80px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={12} xs={12}>
              <MenuAccount />
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <Box className="flexTopic">
                <Typography variant="h2">เพิ่มสินค้า</Typography>
              </Box>
              <Box className="boxIn">
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault label="ชื่อสินค้า" required />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item xs={12}>
                    <TextFieldDefault
                      label="ร้ายละเอียดสินค้า"
                      required
                      multiline
                      rows={5}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextFieldDefault
                      label="ราคาสินค้า"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">บาท</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={6} xs={12}></Grid>
                  </Hidden>
                  <Grid item xs={12}>
                    <Box className="upLoadImage">
                      <label>
                        รูปสินค้า
                        <span>*</span>
                      </label>
                      <ButtonDefault
                        title="+ เพิ่มรูปสินค้า"
                        height="40px"
                        maxWidth="165px"
                        color="primary"
                        borderRadius="5px"
                      />
                    </Box>
                  </Grid>
                </Grid>
                <TableDefault
                  tablehead={tablehead}
                  tablebody={renderTable()}
                  action="n"
                />
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

export default CreateProductPage;
