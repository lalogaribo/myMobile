import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  Alert,
  Collapse,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export const RegisterPage = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 250,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1978d2" };
  const textFieldStyle = { margin: "10px 0 0 0" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(true);
      navigate("/");
    } catch (error) {
      setOpen(true);
      setError(error.message);
    }
  };

  const errors = {
    "Firebase: Error (auth/email-already-in-use).":
      "This email is already in use!",
  };

  const renderAlert = () => {
    return (
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {errors[error]}
        </Alert>
      </Collapse>
    );
  };

  const renderForm = () => {
    return (
      <FormControl>
        {error && renderAlert()}
        <TextField
          id="correo"
          label="Correo"
          placeholder="nombre@correo.com"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Pasword"
          placeholder="Password"
          variant="outlined"
          type="password"
          style={textFieldStyle}
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Crear Cuenta
        </Button>
      </FormControl>
    );
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Crear Cuenta</h2>
          {loading ? <CircularProgress /> : renderForm()}
        </Grid>
      </Paper>
    </Grid>
  );
};
