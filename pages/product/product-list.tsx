import { Box, Container, makeStyles, Grid, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import CardProduct from "components/CardProduct";
import {  SelectDefault, TextFieldDefault } from "components/common";
import { ButtonDefault } from "components/common/button";
import PaginationCustom from "components/PaginationCustom";
// import { ButtonDefault } from "components/common/button";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    BoxContact: {
        position: 'relative',
        backgroundColor: '#F1F4FA',
        borderRadius: '25px',
        padding: '45px 60px',
        marginBottom: '20px',
        [theme.breakpoints.down("xs")]: {
            padding: '15px 25px',
        },
    },
    sectionproduct: {
        marginBottom: '30px',
    },
    fillterSearch: {
        backgroundColor: '#D9E8F4',
        padding: '30px 55px 40px 55px',
        marginBottom: 30,
        [theme.breakpoints.down('xs')]: {
            padding: '30px 20px',
        },
        '& .btnSearch': {
            display: "flex",
            height: "100%",
            alignItems: "flex-end",
        },
    },
    tabList: {
        margin: "0 0 0 0",
        "& .bodyTabs": {
            paddingTop: 45,
        },
        "& .MuiTabs-flexContainer": {
            maxWidth: 1250,
            overflowY: "scroll",
        },
        "& .MuiAppBar-root": {
            backgroundColor: "transparent",
            boxShadow: "none",
            position: "relative",
        },
        "& .MuiTab-root": {
            fontSize: 25,
            color: "#B1AFAF",
            backgroundColor: '#F0F4F5',
            opacity: 1,
            height: 50,
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            minWidth: 125,
        },
        "& .MuiTab-textColorInherit.Mui-selected": {
            backgroundColor: "#1F419B",
            borderRadius: '0',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            color: "#fff",
        },
        "& .MuiTabs-indicator": {
            display: "none",
        },
    },
    TotalResult: {
        marginBottom: '30px',
        '& p': {
            fontSize: '25px',
            color: '#000000',
        }
    }
}));

const navi = [
    { title: "", path: "/" },
    { title: "สินค้า" },
];

const dataProduct = [
    {
        image: `${prefix}/images/product_01.jpg`,
        type: "กระเป๋า",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "สุรันแฮนด์เมค",
        province: "พระนครศรีอยุธยา",
    },
    {
        image: `${prefix}/images/product_02.jpg`,
        type: "พืชผลเกษตร",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "ข้าวหอมมะลิใหม่",
        province: "สุรินทร์",
    },
    {
        image: `${prefix}/images/product_03.jpg`,
        type: "เครื่องสำอาง",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "สบู่ใยใหม",
        province: "ปทุมธานี",
    },
    {
        image: `${prefix}/images/product_04.jpg`,
        type: "เครื่องดื่ม",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "กาแฟบางบอน",
        province: "เชียงราย",
    },
    {
        image: `${prefix}/images/product_05.jpg`,
        type: "วัฒนธรรมไทย",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "บ้านรักษ์หัวโขน",
        province: "กรุงเทพฯ",
    },
    {
        image: `${prefix}/images/product_06.jpg`,
        type: "เครื่องประดับ",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "ร้านประดับไทย",
        province: "ร้านประดับไทย",
    },
    {
        image: `${prefix}/images/product_07.jpg`,
        type: "เครื่องปั้นดินเผา",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "ร้านจานชามเซรามิค",
        province: "สมุทรสาคร",
    },
    {
        image: `${prefix}/images/product_08.jpg`,
        type: "เครื่องนุ่งห่ม",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "เฮือนบุญผ้าฝ้าย",
        province: "เชียงใหม่",
    },
    {
        image: `${prefix}/images/product_01.jpg`,
        type: "กระเป๋า",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "สุรันแฮนด์เมค",
        province: "พระนครศรีอยุธยา",
    },
    {
        image: `${prefix}/images/product_02.jpg`,
        type: "พืชผลเกษตร",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "ข้าวหอมมะลิใหม่",
        province: "สุรินทร์",
    },
    {
        image: `${prefix}/images/product_03.jpg`,
        type: "เครื่องสำอาง",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "สบู่ใยใหม",
        province: "ปทุมธานี",
    },
    {
        image: `${prefix}/images/product_04.jpg`,
        type: "เครื่องดื่ม",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "กาแฟบางบอน",
        province: "เชียงราย",
    },
    {
        image: `${prefix}/images/product_05.jpg`,
        type: "วัฒนธรรมไทย",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "บ้านรักษ์หัวโขน",
        province: "กรุงเทพฯ",
    },
    {
        image: `${prefix}/images/product_06.jpg`,
        type: "เครื่องประดับ",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "ร้านประดับไทย",
        province: "ร้านประดับไทย",
    },
    {
        image: `${prefix}/images/product_07.jpg`,
        type: "เครื่องปั้นดินเผา",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "ร้านจานชามเซรามิค",
        province: "สมุทรสาคร",
    },
    {
        image: `${prefix}/images/product_08.jpg`,
        type: "เครื่องนุ่งห่ม",
        topic: "Ployrung Handmade Chiangmai กระเป๋าผ้าฝ้าย งานฝีมือ เชียงใหม่",
        shopName: "เฮือนบุญผ้าฝ้าย",
        province: "เชียงใหม่",
    },
];

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

const ProductList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="Product"
            titlePage="สินค้า"
            marginTitle="60px"
        >
            <Container maxWidth="lg">
                <Box className={classes.tabList}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                        >
                            <Tab label="สินค้า" {...a11yProps(0)} />
                            <Tab label="ภูมิภาค" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box className="bodyTabs">
                        <Box className={classes.fillterSearch}>
                            <Grid container spacing={3}>
                                <Grid item md={4} sm={6} xs={12}>
                                    <TextFieldDefault placeholder="กรอกคำค้นหา" borderRadius="30px" />
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <SelectDefault borderRadius="30px" heightLable="auto">
                                        <option value="">หมวดหมู่สินค้า</option>
                                    </SelectDefault>
                                </Grid>
                                <Grid item md={2} sm={6} xs={12}>
                                    <Box className="btnSearch">
                                        <ButtonDefault
                                            title="ค้นหา"
                                            background="#1F419B"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item md={2} sm={6} xs={12}>
                                    <Box className="btnSearch">
                                        <ButtonDefault
                                            title="ล้างคำค้นหา"
                                            background="#fff"
                                            colorFont="#000"
                                            colorhover="#fff"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.TotalResult}>
                            <Typography>ผลการค้นหาทั้งหมด 500 รายการ</Typography>
                        </Box>
                        <Box className={classes.sectionproduct}>
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
                            <PaginationCustom
                                count={8}
                                boundaryCount={2}
                                siblingCount={0}
                                margin="60px auto 0"
                            />
                        </Box>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box className="bodyTabs">
                        <Box className={classes.fillterSearch}>
                            <Grid container spacing={3}>
                                <Grid item md={6} sm={6} xs={12}>
                                    <TextFieldDefault placeholder="กรอกคำค้นหา" borderRadius="30px" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <SelectDefault borderRadius="30px" heightLable="auto">
                                        <option value="">หมวดหมู่สินค้า</option>
                                    </SelectDefault>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <SelectDefault borderRadius="30px" heightLable="auto">
                                        <option value="">ภูมิภาค</option>
                                    </SelectDefault>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <SelectDefault borderRadius="30px" heightLable="auto">
                                        <option value="">จังหวัด</option>
                                    </SelectDefault>
                                </Grid>
                                <Grid item md={2} sm={6} xs={12}>
                                    <Box className="btnSearch">
                                        <ButtonDefault
                                            title="ค้นหา"
                                            background="#1F419B"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item md={2} sm={6} xs={12}>
                                    <Box className="btnSearch">
                                        <ButtonDefault
                                            title="ล้างคำค้นหา"
                                            background="#fff"
                                            colorFont="#000"
                                            colorhover="#fff"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.TotalResult}>
                            <Typography>ผลการค้นหาทั้งหมด 500 รายการ</Typography>
                        </Box>
                        <Box className={classes.sectionproduct}>
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
                            <PaginationCustom
                                count={8}
                                boundaryCount={2}
                                siblingCount={0}
                                margin="60px auto 0"
                            />
                        </Box>
                    </Box>
                </TabPanel>
            </Container>
        </InnerLayout >
    );
};

export default ProductList;
