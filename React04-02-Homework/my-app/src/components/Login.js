import React from "react";
import { Container, Typography, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";

const Login = () => {
  return (
    <Container maxWidth="md">
      <Stack component="div" sx={{ mt: 4 }} spacing={2}>
        <Typography variant="h3" color="primary" sx={{ fontWeight: "bold" }}>
          Sign In
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <PersonIcon style={{ verticalAlign: "middle" }} fontSize="large" />
          Sign into your account
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
          label="Email Address"
          variant="outlined"
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
      </Stack>
      <Stack component="div" spacing={1}>
        <Button
          variant="contained"
          label="Login"
          sx={{ width: "10%", mt: 2, textTransform: "capitalize" }}
        >
          Login
        </Button>
        <Typography>
          Don't have an account ?
          <Button variant="text" sx={{ textTransform: "capitalize" }}>
            Sign Up
          </Button>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Login;
