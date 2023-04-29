import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import CardNetwork from "components/CardNetwork";
import InnerLayout from "components/layouts/InnerLayout/InnerLayout";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${prefix}/images/bg_map.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    minHeight: "80vh",
  },
}));

const navi = [
  { title: "", path: "/" },
  { title: "เกี่ยวกับเรา", path: "/about-us" },
  { title: "เครือข่ายธุรกิจ" },
];
const dataNetwork = [
  {
    image: `${prefix}/images/network_01.jpg`,
    topic: "โครงสร้างคณะกรรมการบริหาร เครือข่ายธุรกิจ BIZ CLUB THAILAND",
    imagePartner: `${prefix}/images/partner_network.svg`,
  },
  {
    image: `${prefix}/images/network_02.jpg`,
    topic: "เครือข่ายธุรกิจ MOC BIZ CLUB จังหวัด ",
    imagePartner: `${prefix}/images/partner_network.svg`,
  },
];

const BusinessNetworkPage = () => {
  const classes = useStyles();
  return (
    <InnerLayout
      breadcrumb={navi}
      textBanner="About Us"
      titlePage="เครือข่ายธุรกิจ"
      marginTitle="40px"
    >
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Grid container spacing={3}>
            {dataNetwork.map((item: any, index: number) => {
              return (
                <Grid key={index} item sm={4} xs={12}>
                  <CardNetwork
                    image={item.image}
                    topic={item.topic}
                    imagePartner={item.imagePartner}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </InnerLayout>
  );
};

export default BusinessNetworkPage;
