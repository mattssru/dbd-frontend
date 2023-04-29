import {
  AppBar,
  Box,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Link,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import { IconMenu, IconSearch, IconUser } from "components/common/icon";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    height: 100,
    alignItems: "center",
    [theme.breakpoints.down(991)]: {},
    [theme.breakpoints.down("xs")]: {
      height: 80,
    },
    "& .MuiContainer-root": {
      height: "100%",
    },
    "& .logo": {
      display: "block",
      "& img": {
        width: "100%",
        height: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        height: 50,
      },
    },
    "& .header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .listMenu": {
      "& ul": {
        [theme.breakpoints.down("sm")]: {
          padding: "15px 0",
        },
        "& li": {
          display: "inline-block",
          padding: "0 17.5px",
          "&:last-child": {
            [theme.breakpoints.down("sm")]: {
              borderBottom: "1px solid rgb(255 255 255 / 38%)",
              paddingBottom: 30,
              marginBottom: 10,
            },
            [theme.breakpoints.down("xs")]: {
              paddingBottom: 20,
              marginBottom: 0,
            },
          },
          [theme.breakpoints.down("md")]: {
            padding: "0 11.5px",
          },
          [theme.breakpoints.down("sm")]: {
            display: "block",
            padding: "12px 0",
            margin: "0 20px",
          },
          [theme.breakpoints.down("xs")]: {
            padding: "9px 0",
          },
          "& .btnMenu": {
            fontSize: 24,
            lineHeight: "29px",
            color: "#000",
            [theme.breakpoints.down("sm")]: {
              color: "#fff",
            },
            [theme.breakpoints.down("xs")]: {
              fontSize: 20,
            },
            "&:hover": {
              color: "#1F419B",
              [theme.breakpoints.down("sm")]: {
                color: "#FBA51A",
              },
            },
          },
        },
      },
      "& .iconLogin": {
        [theme.breakpoints.down("sm")]: {
          padding: "0 13px",
        },
        "& svg": {
          [theme.breakpoints.down("xs")]: {
            height: 18,
          },
        },
      },
    },
  },
  drawerpaper: {
    "& .MuiDrawer-paper": {
      width: "50%",
      backgroundColor: "#1F419B",
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
    },
  },
}));

const dataMenu = [
  {
    menu: "หน้าหลัก",
    linkMenu: "/",
  },
  {
    menu: "เกี่ยวกับเรา",
    linkMenu: "",
  },
  {
    menu: "BIZ CLUB THAILAND",
    linkMenu: "",
  },
  {
    menu: "เครือข่าย",
    linkMenu: "",
  },
  {
    menu: "สินค้า",
    linkMenu: `${prefix}/product/product-list`,
  },
  {
    menu: "ข่าวประชาสัมพันธ์",
    linkMenu: `${prefix}/news/news-list`,
  },
  {
    menu: "เรียนรู้",
    linkMenu: `${prefix}/e-learning`,
  },
  {
    menu: "ติดต่อเรา",
    linkMenu: `${prefix}/contact`,
  },
];

const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  const renderlistMenu = () => {
    return dataMenu.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.linkMenu} className="btnMenu">
            {item.menu}
          </Link>
        </li>
      );
    });
  };
  const drawerMenu = () => {
    return (
      <Box className={classes.root}>
        <Box className="listMenu">
          <ul>{renderlistMenu()}</ul>
          <Box className="iconLogin">
            <IconButton>
              <IconSearch />
            </IconButton>
            <IconButton href="/login">
              <IconUser />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Container maxWidth="lg">
        <Box className="header h_100">
          <Link href="/" className="logo">
            <img src={`${prefix}/images/logo.svg`} alt="" />
          </Link>
          <Hidden smDown>
            <Box className="listMenu">
              <ul>
                {renderlistMenu()}
                <li>
                  <IconButton>
                    <IconSearch />
                  </IconButton>
                  <IconButton href="/login">
                    <IconUser />
                  </IconButton>
                </li>
              </ul>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={toggleDrawer}>
              <IconMenu />
            </IconButton>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              className={classes.drawerpaper}
            >
              {drawerMenu()}
            </Drawer>
          </Hidden>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
