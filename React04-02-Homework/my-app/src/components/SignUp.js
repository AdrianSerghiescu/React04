import React from "react";
import { Container, Typography, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";

const SignUp = () => {
  return (
    <Container maxWidth="md">
      <Stack component="div" sx={{ mt: 4 }} spacing={2}>
        <Typography variant="h3" color="primary" sx={{ fontWeight: "bold" }}>
          Sign Up
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <PersonIcon style={{ verticalAlign: "middle" }} fontSize="large" />
          Create your account
        </Typography>
      </Stack>
      <Stack component="form" sx={{ mt: 2 }} spacing={2}>
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              height: 50,
            },
          }}
          id="outlined-basic"
          type="email"
          label="Name"
          variant="outlined"
        />
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              height: 50,
            },
          }}
          id="outlined-helperText"
          label="Email Address"
          helperText="This site uses Gravatar so if you want a profile image, use Gravatar email"
        />
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              height: 50,
            },
          }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              height: 50,
            },
          }}
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
      </Stack>
      <Stack component="div" spacing={1}>
        <Button
          variant="contained"
          label="Register"
          sx={{ width: "10%", mt: 2, textTransform: "capitalize" }}
        >
          Register
        </Button>
        <Typography>
          Already have an account ?
          <Button variant="text" sx={{ textTransform: "capitalize" }}>
            Sign In
          </Button>
        </Typography>
      </Stack>
    </Container>
  );
};

export default SignUp;
