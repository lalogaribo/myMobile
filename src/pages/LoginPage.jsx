import React from "react";
import { Avatar, 
         Grid, 
         Paper, 
         TextField,
         Checkbox,
         FormControlLabel,
         Button, } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';



export const LoginPage = () => {
    
  const paperStyle = {padding :20, height:"70vh", width:200, margin: "20px auto" };
  const avatarStyle = {backgroundColor:"#1978d2"};
  const textFieldStyle ={margin :"10px 0 0 0"}
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

            <Button variant="contained" fullWidth>Iniciar Sesión</Button>
          

        </Paper>
      </Grid>
    );
  }
