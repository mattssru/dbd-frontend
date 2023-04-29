import {
  Box,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Popover,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import { IconShare } from "./common/icon";
import TextFieldDefault from "./common/TextFieldDefault";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .content': {
      '& p ': {
        fontSize: '19px',
        color: '#505050'
      }
    },
    "& .imgThumnail": {
      width: "100%",
      position: "relative",
      display: "block",
      marginBottom: 10,
      paddingTop: (props: any) => props.ratioImage,
      overflow: "hidden",
      "& img": {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        "&:hover": {
          transition: "all 0.2s ease-in",
        },
      },
    },
    "& .date": {
      color: "#C4C4C4",
      fontSize: 16,
      lineHeight: "19px",
      marginBottom: 10,
      display: (props: any) => props.displayLine || "inline-flex",
      [theme.breakpoints.down("xs")]: {
        fontSize: 13,
      },
      "& p:first-child": {
        // borderRight: "1px solid #C4C4C4",
        paddingRight: 10,
        marginRight: 10,
        position: "relative",
        display: (props: any) => props.displayDate,
        [theme.breakpoints.down("xs")]: {
          paddingRight: 5,
          marginRight: 5,
        },
        "&::after": {
          content: "''",
          width: 1,
          height: "calc(100% - 5px)",
          position: "absolute",
          backgroundColor: "#C4C4C4",
          right: 0,
          top: "50%",
          transform: "translate(-0%, -50%)",
        },
      },
      "& p:last-child": {
        display: "flex",
        alignItems: "center",
        "& img": {
          marginRight: 5,
        },
      },
    },
    "& .title": {
      fontSize: 22,
      lineHeight: "24px",
      color: "#000",
      marginBottom: 10,
      display: "block",
      height: (props: any) => props.heighttopic,
      maxHeight: 48,
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        fontSize: 15,
        lineHeight: "16px",
      },
      "&:hover": {
        color: "#4D207E",
      },
    },
    "& .time": {
      color: "#4D207E",
      fontSize: 16,
      lineHeight: "19px",
    },
    "& .btnShare": {
      textAlign: "right",
      marginBottom: 10,
      display: (props: any) => props.displayLine,
      "& button": {
        padding: "0 10px 0 10px",
        [theme.breakpoints.down("xs")]: {
          padding: "0 5px 0 5px",
        },
      },
    },
  },
  popover: {
    "& .MuiPopover-paper": {
      padding: "15px 25px 30px 25px",
      borderRadius: 10,
      boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
      backgroundColor: "#fff",
      maxWidth: 300,
      width: "100%",
      marginTop: 15,
      "& h3": {
        fontSize: 24,
        lineHeight: "24px",
        color: "#000",
        marginBottom: 25,
      },
      "& .socailShare": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
      },
      "& .btnShare_2": {
        textAlign: "center",
        cursor: "pointer",
        "& img": {
          height: 40,
          marginBottom: 3,
        },
        "& span": {
          display: "block",
          fontSize: 15,
          lineHeight: "20px",
          fontFamily: "DBHeavent_Cond",
        },
      },
      "& .copyClipboard": {
        position: "relative",
        "& .btnCopy": {
          position: "absolute",
          right: 0,
          top: 4,
          padding: 0,
          color: "#1AABE0",
          fontSize: 14,
        },
      },
    },
  },
}));

const CardList = (props: any) => {
  const { root } = useStyles(props);
  const classes = useStyles(props);
  const { link, image, time, date, view, title, desc, visionTime = true } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box className={`${root}`}>
      <Link href={link} className="imgThumnail">
        <img src={image} alt="" />
      </Link>
      <Link href={link} className="title">
        {title}
      </Link>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box className="date">
            <p>{date}</p>
            <p>
              <img src={`${prefix}/images/view_gray.svg`} alt="" />
              {view}
            </p>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="btnShare">
            <IconButton aria-describedby={id} onClick={handleClick}>
              <IconShare />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              className={classes.popover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography variant="h3">แชร์</Typography>
              <Box className="socailShare">
                <Box className="btnShare_2">
                  <img src={`${prefix}/images/share_facebook.svg`} alt="" />
                  <span>Facebook</span>
                </Box>
                <Box className="btnShare_2">
                  <img src={`${prefix}/images/share_youtube.svg`} alt="" />
                  <span>Youtube</span>
                </Box>
                <Box className="btnShare_2">
                  <img src={`${prefix}/images/share_twii.svg`} alt="" />
                  <span>Twitter</span>
                </Box>
                <Box className="btnShare_2">
                  <img src={`${prefix}/images/share_line.svg`} alt="" />
                  <span>Line</span>
                </Box>
              </Box>
              <Box className="copyClipboard">
                <TextFieldDefault
                  value="https://youtu.be/XuO2Y3XptZY"
                  fontSize="16px"
                  height="30px"
                  borderRadius="1px"
                  border="1px solid #D4D3D4"
                  boxShadow="none"
                  disabled
                />
                <Button className="btnCopy">คัดลอก</Button>
              </Box>
            </Popover>
          </Box>
        </Grid>
      </Grid>
      <Box className="content">
        <Typography component="p">{desc}</Typography>
      </Box>
      {visionTime && <Box className="time">{time}</Box>}
    </Box>
  );
};

export default CardList;
