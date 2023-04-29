import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: (props: any) => props.fontSizeMain || "60px",
        lineHeight: (props: any) => props.lineHeightMain || "65px",
        color: (props: any) => props.colorPrimary || "#1F419B",
        fontFamily: "DBHeavent_BoldCond",
        marginBottom: (props: any) => props.margin || 25,
        [theme.breakpoints.down("xs")]: {
            fontSize: 28,
            lineHeight: "30px",
            marginBottom: 30,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 46,
            lineHeight: "50px",
            marginBottom: 40,
        },
        "& img" : {
            marginRight:'20px',
            height:'23px',
        },
        "& span": {
            color: (props: any) => props.colorSecondary || "#1F419B",
            fontSize: 40,
            lineHeight: "50px",
            fontFamily: "DBHeavent_MedCond",
            paddingLeft: 20,
            marginLeft: 20,
            position: "relative",
            display: (props: any) => props.display || "none",
            [theme.breakpoints.down("xs")]: {
                fontSize: 28,
                lineHeight: "30px",
                marginLeft: 10,
                paddingLeft: 10,
            },
            "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                top: -4,
                width: 2,
                height: "calc(100% - 10px)",
                backgroundColor: (props: any) => props.colorBorder || "#1F419B",
                [theme.breakpoints.down("xs")]: {
                    top: 4,
                },
            },
        },
    },
}));

const TopicSection = (props: any) => {
    const { root } = useStyles(props);
    const { topic, image, topicSecondary = false } = props;
    return (
        <Typography variant="h2" className={`${root}`}>
            <img src={image} alt="" />
            {topic}
            <span>{topicSecondary}</span>
        </Typography>
    );
};

export default TopicSection;
