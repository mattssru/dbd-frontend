import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { ButtonDefault } from "./common/button";
// import { IconAttach } from "./common/icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& label": {
      fontSize: 20,
      lineHeight: "30px",
      fontFamily: "DBHeavent_MedCond",
      color: "#000",
      position: "relative",
      height: 30,
      "& span": {
        color: "#F52929",
        display: "inline-block",
        width: 10,
        textAlign: "right",
      },
    },
  },
  boxFilename: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    fontSize: 22,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  dropZone: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    "& button": {
      padding: "0 10px",
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },
  },
}));

const UploadFile = (props: any) => {
  const classes = useStyles();
  const [fileNames, setFileNames] = useState([]);
  const { visiosButton = true, valueFilename, label, required = false } = props;
  const handleDrop = (acceptedFiles: any) =>
    setFileNames(acceptedFiles.map((file: any) => file.name));

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7} sm={9} md={8}>
          <label>
            {label}
            {required && <span>*</span>}
          </label>
          <Box className={classes.boxFilename}>
            <ul>
              {fileNames.map((fileName) => (
                <li key={fileName}>{fileName}</li>
              ))}
            </ul>
            {valueFilename}
          </Box>
        </Grid>
        {visiosButton && (
          <Grid item xs={5} sm={3} md={4}>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className={classes.dropZone}>
                  <input {...getInputProps()} />
                  <ButtonDefault
                    title="+ Choose File"
                    height="40px"
                    maxWidth="165px"
                    color="primary"
                    borderRadius="5px"
                    // startIcon={<IconAttach />}
                  />
                </div>
              )}
            </Dropzone>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default UploadFile;
