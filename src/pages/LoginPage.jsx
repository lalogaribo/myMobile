import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const onClickButton = () => {
  return alert("aun no funciona esto!");
};

export const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 250,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1978d2" };
  const textFieldStyle = { margin: "10px 0 0 0" };
  const linkStyle = { margin: "15px 0 0 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Iniciar Sesión</h2>
        </Grid>
        <TextField
          id="correo"
          label="Correo"
          placeholder="nombre@correo.com"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="password"
          label="Pasword"
          placeholder="Password"
          variant="outlined"
          type="password"
          style={textFieldStyle}
          fullWidth
        />

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />

        <Button variant="contained" fullWidth onClick={onClickButton}>
          Iniciar Sesión
        </Button>

        <Link href="/login" style={linkStyle}>
          ¿olvidaste tu contraseña?
        </Link>
        <br />
        <Link href="/signup" style={linkStyle}>
          Crear cuenta
        </Link>
      </Paper>
    </Grid>
  );
};
