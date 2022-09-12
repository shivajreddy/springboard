import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Typography } from "@mui/material";

export default function RegisterForm() {
  /** Register a new user */
  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = (
      e.currentTarget.elements.namedItem("form-username") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("form-password") as HTMLInputElement
    ).value;
    const firstname = (
      e.currentTarget.elements.namedItem("form-first-name") as HTMLInputElement
    ).value;
    const lastname = (
      e.currentTarget.elements.namedItem("form-last-name") as HTMLInputElement
    ).value;
    const email = (
      e.currentTarget.elements.namedItem("form-email") as HTMLInputElement
    ).value;
    console.log(username, password, firstname, lastname, email);
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
      <div style={{ margin: "10px" }}>
        <AssignmentIndIcon sx={{ margin: "20px" }} />
        <TextField name="form-username" label="Username" variant="standard" />
      </div>
      <div style={{ margin: "10px" }}>
        <PasswordIcon sx={{ margin: "20px" }} />
        <TextField
          name="form-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <BadgeIcon sx={{ margin: "20px" }} />
        <TextField
          name="form-first-name"
          label="First name"
          variant="standard"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <BadgeIcon sx={{ margin: "20px" }} />
        <TextField name="form-last-name" label="Last name" variant="standard" />
      </div>
      <div style={{ margin: "10px" }}>
        <EmailIcon sx={{ margin: "20px" }} />
        <TextField name="form-email" label="Email" variant="standard" />
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
