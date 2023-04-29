import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import prefix from "utils/path";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 10px 10px 10px',
        borderBottom: '1px solid #707070',
        color: (props: any) => props.colorPrimary || "#1F419B",
        alignItems: 'center',
        marginBottom: (props: any) => props.marginBottom || "10px",
        '& .control': {
            display: 'flex',
            alignItems: 'center',
        },
        '& span': {
            marginRight: '30px',
            width: '40px',
            textAlign: 'center',
            '& img': {
                height: '50px',
            },
        },
        '& a': {
            float: 'right',
        },
        '& p': {
            color: (props: any) => props.colortext || "#000",
            fontSize: '30px',
            lineHeight: '30px',
            width: (props: any) => props.widthtext || "auto",
            [theme.breakpoints.down("xs")]: {
                fontSize: '23px',
                lineHeight: '23px',
            },
        },
    },
}));

const CardDownload = (props: any) => {
    const { root } = useStyles(props);
    const { link, image, text } = props;
    return (
        <Box className={`${root}`}>
            <Box className="control">
                <Box component="span"><img src={image} alt="" /></Box>
                <Typography component="p">{text}</Typography>
            </Box>
            <Link href={link}>
                <img src={`${prefix}/images/ic-download.svg`} alt="" />
            </Link>
        </Box>
    );
};

export default CardDownload;
