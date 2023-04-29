import React from "react";
import { HomeLayout } from "components/layouts/HomeLayout";
import SectionBanner from "components/homepage/SectionBanner";
import {
  SectionBizclub,
  SectionPartner,
  SectionProduct,
  SectionProvince,
  SectionDepartment,
  SectionShop,
} from "components/homepage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({ root: {} }));

const index = () => {
  const classes = useStyles();
  const renderHomeLayout = () => {
    return (
      <>
        <SectionBanner />
        <SectionProduct />
        <SectionShop />
        <SectionDepartment />
        <SectionProvince />
        <SectionBizclub />
        <SectionPartner />
      </>
    );
  };
  return (
    <>
      <div className={classes.root}>
        <HomeLayout>{renderHomeLayout()}</HomeLayout>
      </div>
    </>
  );
};

export default index;
