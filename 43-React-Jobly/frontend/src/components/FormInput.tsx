import { TextField } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import "./FormInput.css";

interface InputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  required: boolean;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  icon: any;
}

const FormInput = (props: InputProps) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FormEvent<HTMLFormElement>) => {
    setFocused(true);
  };

  const borderColor = props.errorMessage ? "red" : "";

  return (
    <div
      className="formInput"
      style={{ display: "flex", flexDirection: "column", width: "40vw" }}
    >
      {/* <input
        {...inputProps}
        onChange={onChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      /> */}

      <span>{errorMessage}</span>
      <div style={{ margin: "10px" }} className="error">
        {props.icon}
        <TextField
          key={props.id}
          name={props.name}
          label={props.label}
          variant="outlined"
          type={props.type}
          // placeholder={props.placeholder}
          onChange={props.onChange}
          sx={{
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: { borderColor },
            },
            "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: { borderColor },
            },
            "&.Mui-focused fieldset": {
              borderColor: { borderColor },
            },
            "&.Mui-disabled fieldset": {
              borderColor: { borderColor },
            },
            "&.Mui-fieldset": {
              borderColor: { borderColor },
            },
          }}
        />
      </div>
    </div>
  );
};

export default FormInput;
