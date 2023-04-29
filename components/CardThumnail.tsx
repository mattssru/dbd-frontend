import {
  Box,
  makeStyles,
  Link,
  Typography,
  IconButton,
  Popover,
  Button,
} from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import { TextFieldDefault } from "./common";
import { IconShare } from "./common/icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .image": {
      lineHeight: 0,
      position: "relative",
      width: "100%",
      paddingTop: (props: any) => props.scaleImage || "62%",
      display: "block",
      "& img": {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .detailCard": {
      backgroundColor: "#fff",
      padding: "10px 15px",
      "& a": {
        fontSize: (props: any) => props.fontSizeTopic || '24px',
        lineHeight: (props: any) => props.lineHeightTopic || '24px',
        color: "#000",
        display: "block",
        marginBottom: 5,
        height: (props: any) => props.height,
        maxHeight: (props: any) => props.maxHeight,
        "&:hover": {
          color: "#1F419B",
        },
        [theme.breakpoints.down("xs")]: {
          height: "auto !important",
        },
      },
      "& .flexDes": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: (props: any) => props.marginBottomDes || '0',
        "& p": {
          color: "#9B9B9B",
          fontSize: 20,
          lineHeight: "24px",
        },
        "& button": {
          padding: 0,
        },

      },
      '& .content': {
        '& p ': {
          fontSize: '19px',
          color: '#505050'
        }
      }
    },
  },
  popover: {
    "& .MuiPopover-paper": {
      padding: "15px 25px 25px 25px",
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
        marginBottom: 15,
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

const CardThumnail = (props: any) => {
  const { root } = useStyles(props);
  const { link, image, topic, date, desc } = props;
  const classes = useStyles(props);

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
      <Link href={link} className="image">
        <img src={image} alt="" />
      </Link>
      <Box className="detailCard">
        <Link href={link}>{topic}</Link>
        <Box className="flexDes">
          <Typography component="p">{date}</Typography>

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
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
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
        <Box className="content">
          <Typography component="p">{desc}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardThumnail;
