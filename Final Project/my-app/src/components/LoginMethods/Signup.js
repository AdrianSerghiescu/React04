import React, { Component } from "react";
import "./registerStyles.css";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import app from "./FirebaseConfig";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth(app);
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      mobile: "",
      verifyButton: false,
      verifyOtp: false,
      otp: "",
      verified: false,
      checked: false,
      checkedCode: false,
      checkedPhone: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
  }

  onCaptchaVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          this.onSignInSubmit();
        },
      },
      auth
    );
  }

  onSignInSubmit() {
    this.onCaptchaVerify();
    const phoneNumber = "+40" + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        this.setState({ verifyOtp: true, checked: true });
      })
      .catch((error) => {});
  }

  verifyCode() {
    window.confirmationResult
      .confirm(this.state.otp)
      .then((result) => {
        const user = result.user;
        console.log(user);
        this.setState({
          checked: false,
          verified: true,
          verifyOtp: false,
          checkedCode: false,
        });
      })
      .catch((error) => {
        this.setState({
          checkedCode: true,
        });
      });
  }

  changeMobile(e) {
    this.setState({ mobile: e.target.value }, function () {
      if (this.state.mobile.length === 10) {
        this.setState({
          verifyButton: true,
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.verified) {
      const { fname, lname, email, password } = this.state;
      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userInfo");
          if (data.status === "Ok") {
            window.localStorage.setItem("token", data.data);
            window.location.href = "./";
          } else {
            alert("Email is already used !");
          }
        });
    } else {
      this.setState({
        checkedPhone: true,
      });
    }
  }
  render() {
    return (
      <Box pt={14} className="register-body">
        <Box id="recaptcha-container"></Box>
        <Box className="register-box">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <Typography className="register-heading" variant="h3">
              Register
            </Typography>
            <Box
              mt={1}
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                color: "#8f8f8f",
              }}
            >
              <PersonIcon fontSize="medium" />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {this.state.checkedPhone ? (
                  <span style={{ color: "red" }}>
                    Please verify your phone number.
                  </span>
                ) : (
                  "Create your account"
                )}
              </Typography>
            </Box>
            <Box className="input-register-box">
              <TextField
                onChange={(e) => this.setState({ fname: e.target.value })}
                label="First Name"
                variant="outlined"
                autoComplete="off"
                size="small"
                required
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
            <Box className="input-register-box">
              <TextField
                onChange={(e) => this.setState({ lname: e.target.value })}
                label="Last Name"
                autoComplete="off"
                size="small"
                required
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
            <Box className="input-register-box">
              <TextField
                onChange={(e) => this.setState({ email: e.target.value })}
                label="Email"
                size="small"
                autoComplete="off"
                required
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
            <Box className="input-register-box">
              <TextField
                onChange={(e) => this.changeMobile(e)}
                label="Mobile"
                autoComplete="off"
                size="small"
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
              {this.state.verifyButton ? (
                <input
                  onClick={this.onSignInSubmit}
                  className="register-input"
                  value={this.state.verified ? "Verified" : "Verify !"}
                  type="button"
                />
              ) : null}
            </Box>{" "}
            {this.state.checked ? (
              <span style={{ color: "white" }}>Code was sent</span>
            ) : null}
            {this.state.verifyOtp ? (
              <Box className="input-register-box">
                <TextField
                  onChange={(e) => this.setState({ otp: e.target.value })}
                  label="Verification code"
                  type="password"
                  autoComplete="off"
                  size="small"
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
                <input
                  onClick={this.verifyCode}
                  className="register-input"
                  value="Enter code"
                  type="button"
                />
              </Box>
            ) : null}
            {this.state.checkedCode ? (
              <span style={{ color: "white" }}>Invalid Code</span>
            ) : null}
            <Box className="input-register-box">
              <TextField
                onChange={(e) => this.setState({ password: e.target.value })}
                label="Password"
                type="password"
                required
                size="small"
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
              <Typography className="links">
                Already have an account ?
              </Typography>
              <Link className="links" to="/login">
                Sign In
              </Link>
            </Box>
            <input
              onClick={this.handleSubmit}
              className="login-input"
              value="Register"
              type="submit"
            />
          </form>
        </Box>
      </Box>
    );
  }
}
