import {
  Box,
  Container,
  Grid,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { ButtonDefault } from "components/common/button";
import { IconDelete, IconEdit, IconProduct } from "components/common/icon";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import TableDefault from "components/TableDefault";
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
      "& .flexTopic": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      "& .btnTable": {
        margin: "0 -2px",
        display: "inline-flex",
        "& button, a": {
          margin: "0 2px",
          width: 79,
        },
      },
    },
  },
}));

const tablehead = ["ลำดับ", "ชื่อสินค้า", "สถานะ", "จัดการ"];
const tableBody = [
  {
    cell01: "1",
    cell02: "ร้านบ้านขนมหวาน",
    cell03: "เผยแพร่",
  },
  {
    cell01: "2",
    cell02: "การแจ้งเตือนข้อความ",
    cell03: "เผยแพร่",
  },
  {
    cell01: "3",
    cell02: "ร้านบ้านขนมหวาน",
    cell03: "ไม่เผยแพร่",
  },
];
const navi = [
  { title: "", path: "/" },
  { title: "ข้อมูลสมาชิก", path: "/member" },
  { title: "จัดการร้านค้า", path: "/member/manage-store" },
];

const ManageStorePage = () => {
  const classes = useStyles();
  const renderTable = () => {
    return tableBody.map((item: any, index: number) => {
      return (
        <TableRow key={index}>
          <TableCell align="center" style={{ width: "10%" }}>
            {item.cell01}
          </TableCell>
          <TableCell align="left" style={{ width: "50%" }}>
            {item.cell02}
          </TableCell>
          <TableCell align="center" style={{ width: "10%", color: "#1F419B" }}>
            {item.cell03}
          </TableCell>
          <TableCell align="center" style={{ width: "30%" }}>
            <Box className="btnTable">
              <ButtonDefault
                title="แก้ไข"
                color="primary"
                borderRadius="4px"
                height="25px"
                fontSize="16px"
                startIcon={<IconEdit />}
                href="/member/manage-store/create-store"
              />
              <ButtonDefault
                title="สินค้า"
                backgroundColor="#2AA3EF"
                borderRadius="4px"
                height="25px"
                fontSize="16px"
                startIcon={<IconProduct />}
                href="/member/manage-store/manage-product"
              />
              <ButtonDefault
                title="ลบ"
                color="secondary"
                borderRadius="4px"
                height="25px"
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
            <Grid item md={3} sm={4} xs={12}>
              <MenuAccount />
            </Grid>
            <Grid item md={9} sm={8} xs={12}>
              <Box className="rightMember">
                <Box className="flexTopic">
                  <Typography variant="h2">จัดการร้านค้า</Typography>
                  <ButtonDefault
                    title="+ เพิ่มร้านค้า"
                    height="40px"
                    maxWidth="150px"
                    color="primary"
                    borderRadius="5px"
                    href="/member/manage-store/create-store"
                  />
                </Box>
                <TableDefault
                  tablehead={tablehead}
                  tablebody={renderTable()}
                  action="n"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default ManageStorePage;
