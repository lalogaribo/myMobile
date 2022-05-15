import React from "react";
import { Grid,
         Paper,
         Avatar,
         TextField,
         Button,
          } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const HomePage = () => {
  
  const paperStyle = {padding :20, height:"50vh", width:250, margin: "20px auto" };
  const avatarStyle = {backgroundColor:"#1978d2"};
  const textFieldStyle = {margin: "10px 0 0 0"}
  const buttonStyle = {margin: "10px 0 0 0" }
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
             <Avatar style={avatarStyle}><SearchIcon /></Avatar>
             <h2>Bienvenido</h2>
             <p>Por favor ingresa el numero de folio a consultar</p>
           </Grid>

           <TextField id="folio" 
                      label="Folio" 
                      placeholder="Numero de Folio" 
                      variant="outlined"
                      fullWidth 
                      style={textFieldStyle}/>

           <Button variant="contained" 
                    fullWidth
                    style={buttonStyle}
                     >
                       Consultar
           </Button>

        </Paper>
    </Grid>
  );
};
