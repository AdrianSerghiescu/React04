import React, { Component } from "react";
import "./loginStyles.css";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      verified: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Ok") {
          window.localStorage.setItem("token", data.data);
          window.location.href = "./";
        } else {
          this.setState({
            verified: true,
          });
        }
      });
  }

  render() {
    return (
      <Box pt={8} className="login-body">
        <Box className="login-box">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <Typography className="login-heading" variant="h3">
              Sign In
            </Typography>
            <Box
              mt={2}
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                color: "#8f8f8f",
              }}
            >
              <PersonIcon fontSize="medium" />

              {this.state.verified ? (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#b71c1c" }}
                >
                  User or Password is wrong !
                </Typography>
              ) : (
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Sign into your account
                </Typography>
              )}
            </Box>
            <Box className="input-box">
              <TextField
                onChange={(e) => this.setState({ email: e.target.value })}
                autoComplete="off"
                size="small"
                label="Email Address"
                color="error"
                sx={{
                  "& input": { color: "white" },
                  "& label": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#b71c1c",
                      color: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </Box>
            <Box className="input-box">
              <TextField
                onChange={(e) => this.setState({ password: e.target.value })}
                size="small"
                label="Password"
                type="password"
                color="error"
                sx={{
                  "& input": { color: "white" },
                  "& label": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#b71c1c",
                      color: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </Box>
            <Box className="login-link">
              <Typography className="links">Don't have an account ?</Typography>
              <Link className="links" to="/register">
                Sign Up
              </Link>
            </Box>
            <input
              onClick={this.handleSubmit}
              className="login-input"
              value="Login"
              type="submit"
            />
          </form>
        </Box>
      </Box>
    );
  }
}
