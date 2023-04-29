import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        padding: '10px 10px 10px 10px',
        color: (props: any) => props.colorPrimary || "#1F419B",
        alignItems: 'center',
        marginBottom: (props: any) => props.marginBottom || "20px",
        '& span': {
            marginRight: '20px',
            width: '40px',
            textAlign: 'center',
            '& img': {
                height: '30px',
            },
        },
        '& a': {
            color: '#000000',
            fontSize: '30px',
            lineHeight: '30px',
            '&:hover': {
                color: '#1F419B',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: '23px',
                lineHeight: '23px',
            },
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
        '& .textSecond' : {
            color:'#000'
        }
    },
}));

const DetailContact = (props: any) => {
    const { root } = useStyles(props);
    const { link, textlink, image, text, textsecond } = props;
    return (
        <Box className={`${root}`}>
            <Box component="span"><img src={image} alt="" /></Box>
            <Link href={link}>{textlink}</Link>
            <Typography component="p">{text}</Typography>
            <Typography className="textSecond">{textsecond}</Typography>
        </Box>
    );
};

export default DetailContact;
