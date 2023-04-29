import {
  AppBar,
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";
import { SelectDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import TopicHome from "components/common/TopicHome";
import React from "react";
import prefix from "utils/path";
import { CardProduct } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    "& *::-webkit-scrollbar": {
      backgroundColor: "transparent",
      height: 8,
      borderRadius: "12px",
    },
    "& *::-webkit-scrollbar-thumb": {
      backgroundColor: "#a0a0a0",
      borderRadius: "12px",
    },
    margin: "0 0 50px 0",
    "& .bodyTabs": {
      paddingTop: 45,
      [theme.breakpoints.down("xs")]: {
        paddingTop: 30,
      },
    },
    "& .MuiTabs-flexContainer": {
      maxWidth: 1250,
      overflowX: "scroll",
    },
    "& .MuiAppBar-root": {
      backgroundColor: "transparent",
      boxShadow: "none",
      position: "relative",
    },
    "& .MuiTab-root": {
      fontSize: 25,
      color: "#A0A0A0",
      opacity: 1,
      height: 50,
      borderRadius: 25,
      minWidth: 125,
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      backgroundColor: "#1F419B",
      color: "#fff",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .listProduct": {
      marginBottom: 50,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30,
      },
    },
    "& .fillterSelect": {
      maxWidth: 120,
      position: "absolute",
      top: 5,
      right: 0,
      [theme.breakpoints.down("xs")]: {
        position: "relative",
        top: 0,
        marginLeft: "auto",
        marginTop: 25,
      },
    },
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const dataProduct = [
  {
    image: `${prefix}/images/product_01.jpg`,
    type: "กระเป๋า",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "สุรันแฮนด์เมค",
    province: "พระนครศรีอยุธยา",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_02.jpg`,
    type: "พืชผลเกษตร",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "ข้าวหอมมะลิใหม่",
    province: "สุรินทร์",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_03.jpg`,
    type: "เครื่องสำอาง",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "สบู่ใยใหม",
    province: "ปทุมธานี",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_04.jpg`,
    type: "เครื่องดื่ม",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "กาแฟบางบอน",
    province: "เชียงราย",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_05.jpg`,
    type: "วัฒนธรรมไทย",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "บ้านรักษ์หัวโขน",
    province: "กรุงเทพฯ",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_06.jpg`,
    type: "เครื่องประดับ",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "ร้านประดับไทย",
    province: "ร้านประดับไทย",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_07.jpg`,
    type: "เครื่องปั้นดินเผา",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "ร้านจานชามเซรามิค",
    province: "สมุทรสาคร",
    link: `${prefix}/product/product-detail`,
  },
  {
    image: `${prefix}/images/product_08.jpg`,
    type: "เครื่องนุ่งห่ม",
    topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
    shopName: "เฮือนบุญผ้าฝ้าย",
    province: "เชียงใหม่",
    link: `${prefix}/product/product-detail`,
  },
];

const SectionProduct = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <TopicHome topic="สินค้า MOC Biz Club" />
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="ดูทั้งหมด" {...a11yProps(0)} />
            <Tab label="ภาคเหนือ" {...a11yProps(1)} />
            <Tab label="ภาคตะวันออกเฉียงเหนือ" {...a11yProps(2)} />
            <Tab label="ภาคกลาง" {...a11yProps(3)} />
            <Tab label="ภาคตะวันออก" {...a11yProps(4)} />
            <Tab label="ภาคใต้" {...a11yProps(5)} />
          </Tabs>
          <Box className="fillterSelect">
            <SelectDefault
              backgroundImage={`url(${prefix}/images/ic_select.svg)`}
              boxShadow="none"
              border="1px solid #CED4D6"
              borderRadius="20px"
              height="40px"
              padding="0 0 0 50px"
              displayIcon="none"
              displayLabel="none"
            >
              <option value="">ตัวกรอง</option>
              <option value="">ตัวกรอง 1</option>
              <option value="">ตัวกรอง 2</option>
              <option value="">ตัวกรอง 3</option>
            </SelectDefault>
          </Box>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Box className="bodyTabs">
            <Box className="listProduct">
              <Grid container spacing={3}>
                {dataProduct.map((item: any, index: number) => {
                  return (
                    <Grid item md={3} sm={4} xs={12} key={index}>
                      <CardProduct
                        image={item.image}
                        type={item.type}
                        topic={item.topic}
                        shopName={item.shopName}
                        province={item.province}
                        link={`${prefix}/product/product-detail`}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <ButtonDefault
              title="ดูทั้งหมด"
              color="secondary"
              height="40px"
              maxWidth="130px"
              margin="0 auto"
              href={`${prefix}/product/product-list`}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="bodyTabs">ภาคเหนือ</Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="bodyTabs">ภาคตะวันออกเฉียงเหนือ</Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box className="bodyTabs">ภาคกลาง</Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box className="bodyTabs">ภาคตะวันออก</Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box className="bodyTabs">ภาคใต้</Box>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default SectionProduct;
