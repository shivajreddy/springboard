import "../styles/RegisterForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import config from "../config.json";
import useLocalStorage from "../hooks/useLocalStorage";
import FormInput from "../components/FormInput";

const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    icon: <AssignmentIndIcon sx={{ margin: "20px" }} />,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password must be 8-20 characters length",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    icon: <PasswordIcon sx={{ margin: "20px" }} />,
  },
  {
    id: 3,
    name: "firstname",
    type: "text",
    placeholder: "First Name",
    errorMessage: "Must provide your First name",
    label: "First Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    icon: <BadgeIcon sx={{ margin: "20px" }} />,
  },
  {
    id: 4,
    name: "lastname",
    type: "text",
    placeholder: "Last Name",
    errorMessage: "Must provide your Last name",
    label: "Last Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    icon: <BadgeIcon sx={{ margin: "20px" }} />,
  },
  {
    id: 5,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Must provide a valid Email",
    label: "Email",
    required: true,
    icon: <EmailIcon sx={{ margin: "20px" }} />,
  },
];

export default function RegisterForm() {
  /** Register a new user */
  let username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    token: string | null;

  // local storage
  const [localStorageToken, setLocalStorageToken] = useLocalStorage("token");

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(
      "this is the formData",
      formData,
      Object.fromEntries(formData.entries())
    );
    username = (
      e.currentTarget.elements.namedItem("form-username") as HTMLInputElement
    ).value;
    password = (
      e.currentTarget.elements.namedItem("form-password") as HTMLInputElement
    ).value;
    firstName = (
      e.currentTarget.elements.namedItem("form-first-name") as HTMLInputElement
    ).value;
    lastName = (
      e.currentTarget.elements.namedItem("form-last-name") as HTMLInputElement
    ).value;
    email = (
      e.currentTarget.elements.namedItem("form-email") as HTMLInputElement
    ).value;
    console.log(username, password, firstName, lastName, email);

    async function makeRequest() {
      try {
        const res = await axios.post(config.BASE_URL + "/auth/register", {
          username,
          password,
          firstName,
          lastName,
          email,
        });
        console.log("this is the response", res);
        token = res.data.token;
        setLocalStorageToken(token);
      } catch (error) {
        console.error(error);
      }
    }
    makeRequest();
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        alignItems: "center",
      }}
      autoComplete="off"
      onSubmit={register}
    >
      <Typography variant="h6" fontWeight={700}>
        Register
      </Typography>
      <div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            id={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            errorMessage={input.errorMessage}
            label={input.label}
            required={input.required}
            icon={input.icon}
          />
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        <AssignmentIndIcon sx={{ margin: "20px" }} />
        <TextField name="form-username" label="Username" variant="standard" />
      </div>
      <div style={{ margin: "10px" }} className="error">
        <PasswordIcon sx={{ margin: "20px" }} />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <BadgeIcon sx={{ margin: "20px" }} />
        <TextField name="firstName" label="First name" variant="standard" />
      </div>
      <div style={{ margin: "10px" }}>
        <BadgeIcon sx={{ margin: "20px" }} />
        <TextField name="lastName" label="Last name" variant="standard" />
        <p></p>
      </div>
      <div style={{ margin: "10px" }}>
        <EmailIcon sx={{ margin: "20px" }} />
        <TextField name="email" label="Email" variant="standard" />
      </div>
      <Button
        color="primary"
        variant="contained"
        sx={{ width: "20vw", alignContent: "center" }}
        type="submit"
      >
        Log in
      </Button>
    </Box>
  );
}
