import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  Select,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    margin: (props: any) => props.margin || 0,
    maxWidth: (props: any) => props.maxWidth,
    "& label": {
      fontSize: 20,
      lineHeight: "30px",
      fontFamily: "DBHeavent_MedCond",
      color: (props: any) => props.colorLabel || "#000",
      transform: "none !important",
      position: "relative",
      height: (props: any) => props.heightLable || "30px",
      display: (props: any) => props.displayLabel || "block",
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        minHeight: 15,
      },
      "& .MuiFormLabel-asterisk": {
        color: "#F52929",
        width: 10,
        display: "inline-block",
        textAlign: "right",
      },
    },
    "& .MuiInputBase-root": {
      "& select": {
        height: (props: any) => props.height || 40,
        padding: (props: any) => props.padding || "0 20px",
        fontSize: (props: any) => props.fontSize || 20,
        borderRadius: (props: any) => props.borderRadius || 5,
        boxShadow: (props: any) =>
          props.boxShadow || "0 2px 4px rgba(0,0,0,0.18)",
        border: (props: any) => props.border || "none",
        marginTop: 0,
        backgroundImage: (props: any) => props.backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left 20px center",
        backgroundColor: "#fff",
      },
      "& .MuiSelect-select:focus": {
        backgroundColor: "#fff",
      },
    },
    "& .MuiInputBase-input.Mui-disabled": {
      color: "#000",
      backgroundColor: "#F2F2F2",
    },
    "& .MuiOutlinedInput-input, & fieldset": {
      top: 0,
      padding: 0,
      border: "none",
    },
    "& .MuiInput-underline:before, .MuiInput-underline:after, legend": {
      display: "none",
    },
    "& svg": {
      display: (props: any) => props.displayIcon,
    },
  },
}));

const SelectDefault = (props: any) => {
  const { root } = useStyles(props);
  const {
    label,
    value,
    onChange,
    id,
    disabled,
    defaultValue,
    children,
    error = null,
    required = false,
  } = props;
  return (
    <FormControl className={`${root}`}>
      <InputLabel>
        {label}
        {required && <span className="MuiFormLabel-asterisk">*</span>}
      </InputLabel>
      <Select
        native
        value={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
        defaultValue={defaultValue}
        variant="outlined"
        fullWidth
      >
        {children}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectDefault;
