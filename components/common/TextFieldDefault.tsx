import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    margin: (props: any) => props.margin || 0,
    "& label , & .MuiFormLabel-root.Mui-disabled": {
      fontSize: 20,
      lineHeight: "30px",
      fontFamily: "DBHeavent_MedCond",
      color: (props: any) => props.colorLabel || "#000",
      transform: "none !important",
      position: "relative",
      height: 30,
      display: (props: any) => props.displayLabel || "block",
      "& .MuiFormLabel-asterisk": {
        color: "#F52929",
      },
    },
    "& .MuiInputBase-root": {
      borderRadius: (props: any) => props.borderRadius || 5,
      boxShadow: (props: any) =>
        props.boxShadow || "0 2px 4px rgba(0,0,0,0.18)",
      border: (props: any) => props.border || "none",
      backgroundColor: "#fff",
      "& input": {
        height: (props: any) => props.height || 40,
        fontSize: (props: any) => props.fontSize || 20,
        padding: (props: any) => props.padding || "0 20px",
      },
      "& textarea": {
        fontSize: 24,
        borderRadius: 5,
        border: "none",
        // padding: "12px 20px",
        marginTop: 0,
        backgroundColor: "#fff",
      },
    },
    "& .MuiInputBase-root.Mui-disabled": {
      color: "#000",
      backgroundColor: "#F2F2F2",
    },
    "& .MuiInput-underline:before, .MuiInput-underline:after, legend": {
      display: "none",
    },
    "& fieldset": {
      top: 0,
      padding: 0,
      border: "none",
      backgroundImage: (props: any) => props.startIcon,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left 20px center",
    },
    // "& .MuiOutlinedInput-input, & .MuiOutlinedInput-multiline": {
    //   // padding: 0,
    // },
  },
}));

const TextFieldDefault = (props: any) => {
  const { root } = useStyles(props);
  const {
    label,
    placeholder,
    // maskInput,
    maxLength,
    rows, // ขนาดของ TextArea
    onChange,
    value,
    defaultValue,
    type,
    InputProps,
    required = false,
    disabled = false,
    multiline = false, // ใช้คู่กับ rows
  } = props;
  return (
    <TextField
      className={`${root}`}
      id="standard-full-width"
      label={label}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      type={type}
      onChange={onChange}
      multiline={multiline}
      value={value}
      defaultValue={defaultValue}
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={InputProps}
      inputProps={{
        maxLength: maxLength,
      }}
    />
  );
};

export default TextFieldDefault;
