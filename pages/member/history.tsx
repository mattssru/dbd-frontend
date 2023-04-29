import {
  Box,
  Container,
  Grid,
  makeStyles,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { ButtonDefault } from "components/common/button";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import TableDefault from "components/TableDefault";
import MenuAccount from "pages/member/component/MenuAccount";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .btnTable": {
      margin: "0 -2px",
      display: "inline-flex",
      "& button, a": {
        margin: "0 2px",
        width: 79,
      },
    },
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "ข้อมูลสมาชิก", path: "/member" },
  {
    title: "ประวัติการอบรม/สัมมนานค้า",
    path: "/member/history",
  },
];
const tablehead = [
  "ลำดับ",
  "ชื่อโครงการ",
  "สถานะ",
  "มูลค่ายอดจำหน่าย",
  "มูลค่ายอดเจรจาธุรกิจ",
  "จัดการ",
];
const tableBody = [
  {
    cell01: "1",
    cell02: "โครงการอบรม สัมมนา เพื่อพัฒนาศักยภาพบุคลากร",
    cell03: "เข้าร่วม",
    cell04: "-",
    cell05: "-",
  },
  {
    cell01: "2",
    cell02: "โครงการอบรม สัมมนา เพื่อพัฒนาศักยภาพบุคลากร",
    cell03: "เข้าร่วม",
    cell04: "-",
    cell05: "-",
  },
  {
    cell01: "3",
    cell02: "โครงการอบรม สัมมนา เพื่อพัฒนาศักยภาพบุคลากร",
    cell03: "เข้าร่วม",
    cell04: "-",
    cell05: "-",
  },
  {
    cell01: "4",
    cell02: "โครงการอบรม สัมมนา เพื่อพัฒนาศักยภาพบุคลากร",
    cell03: "เข้าร่วม",
    cell04: "-",
    cell05: "-",
  },
];

const HistoryPage = () => {
  const classes = useStyles();
  const renderTable = () => {
    return tableBody.map((item: any, index: number) => {
      return (
        <TableRow key={index}>
          <TableCell align="center" style={{ width: "10%" }}>
            {item.cell01}
          </TableCell>
          <TableCell align="left" style={{ width: "30%" }}>
            {item.cell02}
          </TableCell>
          <TableCell align="center" style={{ width: "15%", color: "#1F419B" }}>
            {item.cell03}
          </TableCell>
          <TableCell align="center" style={{ width: "15%" }}>
            {item.cell04}
          </TableCell>
          <TableCell align="center" style={{ width: "15%" }}>
            {item.cell05}
          </TableCell>
          <TableCell align="center" style={{ width: "15%" }}>
            <Box className="btnTable">
              <ButtonDefault
                title="เสร็จสิ้น"
                color="primary"
                borderRadius="4px"
                height="25px"
                maxWidth="80px"
                fontSize="16px"
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
      titlePage="ประวัติการอบรม/สัมมนา"
      marginTitle="80px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={3} sm={12} xs={12}>
              <MenuAccount />
            </Grid>
            <Grid item md={9} sm={12} xs={12}>
              <TableDefault
                tablehead={tablehead}
                tablebody={renderTable()}
                action="n"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default HistoryPage;
