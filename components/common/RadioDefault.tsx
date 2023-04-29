import {
  FormControlLabel,
  makeStyles,
  Radio,
  RadioProps,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-body1": {
      color: "#273244",
      fontSize: 22,
      fontFamily: "DBHeavent_MedCond",
    },
  },
  checkBox: {
    color: "#273244",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "100%",
    width: 20,
    height: 20,
    backgroundColor: "#f5f8fa",
    border: "1px solid #707070",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#fff",
    "&:before": {
      display: "block",
      backgroundColor: "#1F419B",
      width: 16,
      height: 16,
      content: '""',
      borderRadius: "100%",
    },
  },
});

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.checkBox}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const RadioDefault = (props: any) => {
  const classes = useStyles();
  const { value, label, checked, name, onChange } = props;
  return (
    <FormControlLabel
      className={classes.root}
      value={value}
      onChange={onChange}
      control={<StyledRadio />}
      label={label}
      name={name}
      checked={checked}
    />
  );
};

export default RadioDefault;
