import React, { useState } from "react";
import {Button, Card, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import "../../../assets/css/SignIn.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword , setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card
          className="card"
          sx={{
            p: 4,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            SignIn
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Username or Email"
            sx={{ mb: 2 }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            sx={{ mb: 2 }}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#7f00ff",
              width: "100%",
              mt: 2,
              padding: "10px",
            }}
            type="submit"
          >
            LOGIN
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignIn;
