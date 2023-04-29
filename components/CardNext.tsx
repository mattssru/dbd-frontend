import { Box, Button, IconButton, makeStyles, Popover, Typography } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";
import { TextFieldDefault } from "./common";
import { IconShare } from "./common/icon";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px 20px 15px 160px",
        position: 'relative',
        height: '130px',
        display: 'block',
        [theme.breakpoints.down("xs")]: {
            position: 'relative'
        },
        '& .imageList': {
            position: 'absolute',
            left: '0',
            top: '15px',
            width: '150px',
            height: '95px',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        },
        '& .title': {
            fontSize: '16px',
            lineHeight: '20px',
            color: '#000',
        },
        '& .datedetail': {
            color: '#4D207E',
            fontSize: '15px',
            lineHeight: '18px',
        },
        '& .detail': {
            fontSize: '18px',
            lineHeight: '22px',
            color: '#4D207E',
            marginBottom: '30px',
        },
        "& .date": {
            color: "#C4C4C4",
            fontSize: 16,
            lineHeight: "19px",
            position: 'absolute',
            bottom: '15px',
            marginBottom: 10,
            display: (props: any) => props.displayLine || "inline-flex",
            [theme.breakpoints.down("xs")]: {
                fontSize: 13,
            },
            "& p": {
                // borderRight: "1px solid #C4C4C4",
                paddingRight: 10,
                marginRight: 10,
                position: "relative",
                display: (props: any) => props.displayDate,
                [theme.breakpoints.down("xs")]: {
                    paddingRight: 5,
                    marginRight: 5,
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
        '& .btnShare': {
            '& button': {
                padding: '0',
            }
        }
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

const CardNext = (props: any) => {
    const classes = useStyles(props);
    const { title, image, date, datedetail, view, visiondate = true } = props;
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
        <Box className={classes.root}>
            <Box className="imageList">
                <img src={image} alt="" />
            </Box>
            <Box className="title">{title}</Box>
            <Box className="datedetail">{datedetail}</Box>
            {visiondate && (
                <Box className="date">
                    <p>{date}</p>
                    <p>
                        <img src={`${prefix}/images/view_gray.svg`} alt="" />
                        {view}
                    </p>
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
                </Box>
            )}

        </Box>
    );
};

export default CardNext;
