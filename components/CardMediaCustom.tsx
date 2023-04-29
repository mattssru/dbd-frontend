import {
  Box,
  makeStyles,
  Link,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

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
      '& .content': {
        '& p ': {
          fontSize: '19px',
          color: '#505050'
        }
      }
    },
  },
  dialogPaper: {
    width: '600px',
    maxWidth: '100%',
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
  },
}));

const CardMedia = (props: any) => {
  const { root } = useStyles(props);
  const { link, image, topic } = props;
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={`${root}`}>
      <Link href={link} className="image" onClick={handleClickOpen}>
        <img src={image} alt="" />
      </Link>
      <Box className="detailCard">
        <Link href={link} onClick={handleClickOpen}>{topic}</Link>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle id="responsive-dialog-title">{topic}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Link href={link} className="image" onClick={handleClickOpen}>
              <img src={image} alt="" />
            </Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CardMedia;
