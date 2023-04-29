import { Box, Container, makeStyles, Grid, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prefix from "utils/path";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import CardList from "components/CardList";
import { SelectDefault, TextFieldDefault } from "components/common";
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
    { title: "ข่าวประชาสัมพันธ์" },
];

const dataProduct = [
    {
        image: `${prefix}/images/img-list-01.png`,
        date: "20 ตุลาคม 2565",
        title: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-02.png`,
        date: "20 ตุลาคม 2565",
        title: "เชิญสัมมนาเชิงปฏิบัติการ Synergizing Collaboration ",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-03.png`,
        date: "20 ตุลาคม 2565",
        title: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-04.png`,
        date: "20 ตุลาคม 2565",
        title: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-05.png`,
        date: "20 ตุลาคม 2565",
        title: "เชิญสัมมนาเชิงปฏิบัติการ Synergizing Collaboration ",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-06.png`,
        date: "20 ตุลาคม 2565",
        title: "เชิญสัมมนาเชิงปฏิบัติการ Synergizing Collaboration ",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-07.png`,
        date: "20 ตุลาคม 2565",
        title: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-08.png`,
        date: "20 ตุลาคม 2565",
        title: "เชิญสัมมนาเชิงปฏิบัติการ Synergizing Collaboration ",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-09.png`,
        date: "20 ตุลาคม 2565",
        title: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-10.png`,
        date: "20 ตุลาคม 2565",
        title: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-11.png`,
        date: "20 ตุลาคม 2565",
        title: "ขอเชิญเข้าร่วมงานสัมมนาเชิงปฏิบัติการ “การสร้าง...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-12.png`,
        date: "20 ตุลาคม 2565",
        title: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-13.png`,
        date: "20 ตุลาคม 2565",
        title: "ขอเชิญเข้าร่วมงานสัมมนาเชิงปฏิบัติการ “การสร้าง...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-14.png`,
        date: "20 ตุลาคม 2565",
        title: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-15.png`,
        date: "20 ตุลาคม 2565",
        title: "ขอเชิญเข้าร่วมงานสัมมนาเชิงปฏิบัติการ “การสร้าง...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-16.png`,
        date: "20 ตุลาคม 2565",
        title: "ขอเชิญเข้าร่วมงานสัมมนาเชิงปฏิบัติการ “การสร้าง...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-17.png`,
        date: "20 ตุลาคม 2565",
        title: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-18.png`,
        date: "20 ตุลาคม 2565",
        title: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-19.png`,
        date: "20 ตุลาคม 2565",
        title: "กรมพัฒนาธุรกิจการค้า มอบของขวัญให้ประชาชน...",
        view: '490',
    },
    {
        image: `${prefix}/images/img-list-20.png`,
        date: "20 ตุลาคม 2565",
        title: "การประกาศเจตนารณ์ เรื่อง ข้าราชการและเจ้าหน้าที่...",
        view: '490',
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

const traininglits = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <InnerLayout
            breadcrumb={navi}
            textBanner="News & Event"
            titlePage="ข่าวประชาสัมพันธ์"
            marginTitle="20px"
        >
            <Container maxWidth="lg">
                <Box className={classes.tabList}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                        >
                            <Tab label="ข่าวกรม" {...a11yProps(0)} />
                            <Tab label="ข่าวสำนักงานพาณิชย์จังหวัด" {...a11yProps(1)} />
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
                                        <option value="">โครงการ / อบรม / สัมมนา</option>
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
                                                <CardList
                                                    image={item.image}
                                                    title={item.title}
                                                    date={item.date}
                                                    view={item.view}
                                                    desc={item.desc}
                                                    ratioImage="62%"
                                                    heighttopic="48px"
                                                    link={`${prefix}/training/training-detail`}
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
                                        <option value="">โครงการ / อบรม / สัมมนา</option>
                                    </SelectDefault>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <SelectDefault borderRadius="30px">
                                        <option value="">ภูมิภาค</option>
                                    </SelectDefault>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <SelectDefault borderRadius="30px">
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
                                                <CardList
                                                    image={item.image}
                                                    title={item.title}
                                                    date={item.date}
                                                    view={item.view}
                                                    desc={item.desc}
                                                    ratioImage="62%"
                                                    heighttopic="48px"
                                                    link={`${prefix}/training/training-detail`}
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

export default traininglits;
