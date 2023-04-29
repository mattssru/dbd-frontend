import React from "react";
import dynamic from "next/dynamic";
import { Box, Container, makeStyles } from "@material-ui/core";
import BreadcrumpDefault from "components/BreadcrumpDefault";
import { BannerInner } from "@components/*";
import TopicHome from "components/common/TopicHome";

const useStyles = makeStyles((theme) => ({
  article: {
    paddingBottom: 100,
    [theme.breakpoints.down(1024)]: {
      minHeight: "inherit",
      paddingBottom: 50,
    },
  },
}));

const Header = dynamic(import("../Header"));
const Footer = dynamic(import("../Footer"));

const InnerLayout = (props: any) => {
  const classes = useStyles();
  const {
    textBanner,
    children,
    titlePage,
    marginTitle,
    breadcrumb = [],
  } = props;
  return (
    <Box>
      <Header />
      <article className={classes.article}>
        <section>
          <BannerInner textBanner={textBanner} />
          <Container maxWidth="lg">
            <BreadcrumpDefault items={breadcrumb} />
            <TopicHome topic={titlePage} margin={marginTitle} />
          </Container>
          {children}
        </section>
      </article>
      <Footer />
    </Box>
  );
};

export default InnerLayout;
