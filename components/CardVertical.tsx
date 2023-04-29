import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        '& .BoxVision': {
            position: 'relative'
        },
        '& .image': {
            position: 'relative',
            width: '100%',
            paddingTop: '135%',
            '& span': {
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }
            }
        },
        '& .text': {
            position: 'absolute',
            bottom: '50px',
            width: '240px',
            textAlign: (props: any) => props.textAlignDes,
            left: '50%',
            transform: 'translateX(-50%)',
            '& p': {
                fontSize: '35px',
                lineHeight: '38px',
                color: '#fff',
            },
            '& span': {
                width: '55px',
                height: '55px',
                backgroundColor: '#FBA51A',
                borderRadius: '100%',
                textAlign: 'center',
                display:'inline-block',
                position:'relative',
                marginBottom:'10px',
                '& img': {
                    position:'absolute',
                    top:'11px',
                    left:'12px',
                    width:'30px',
                }
            },
        }
    },
}));

const CardVertical = (props: any) => {
    const { root } = useStyles(props);
    const { topic, image, subimage, visionImage = false } = props;
    return (
        <Box className={`${root}`}>
            <Box className="BoxVision">
                <Box className="image">
                    <span>
                        <img src={image} alt="" />
                    </span>
                </Box>
                <Box className="text">
                    {visionImage && <span>
                        <img src={subimage} alt="" />
                    </span>}
                    <Typography>{topic}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CardVertical;
