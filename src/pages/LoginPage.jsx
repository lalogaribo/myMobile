import React from "react";
import { Avatar, 
         Grid, 
         Paper, 
         TextField,
         Checkbox,
         FormControlLabel,
         Button,
         Typography,
         Link,
         Alert,
         Stack } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const onClickButton = () => {
  return(
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="info">
            This is an info alert — check it out!
        </Alert>
    </Stack>
  );
}

export const LoginPage = () => {
    
  const paperStyle = {padding :20, height:"70vh", width:250, margin: "20px auto" };
  const avatarStyle = {backgroundColor:"#1978d2"};
  const textFieldStyle = {margin :"10px 0 0 0"}
  const linkStyle = {margin: "10px 0 0 0"}
  return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
           <Grid align="center">
             <Avatar style={avatarStyle}><LockIcon /></Avatar>
             <h2>Iniciar Sesión</h2>
           </Grid>
           <TextField id="correo" 
                      label="Correo" 
                      placeholder="nombre@correo.com" 
                      variant="outlined" />

           <TextField id="password" 
                      label="Pasword" 
                      placeholder="Password" 
                      variant="outlined"
                      type="password"
                      style={textFieldStyle}
                       />
          
            <FormControlLabel control={<Checkbox defaultChecked size="10px"/>} 
                              label="Remember me"
                               />

            <Button variant="contained" 
                    fullWidth
                    onClick={onClickButton} >Iniciar Sesión</Button>

            <Typography style={linkStyle}>
              <Link href="/" >
                ¿olvidaste tu contraseña?
              </Link>
            </Typography>
          

        </Paper>
      </Grid>
    );
  }
