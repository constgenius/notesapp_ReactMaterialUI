import React from "react"
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        onClick={()=>console.log("You Clicked Me")}
        type="submit"
        color="secondary"
        variant="contained"
        // startIcon={<SendIcon/>}
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
      
      {/* Icons */}
      <br/>
      <AcUnitIcon/>
      <AcUnitIcon color="secondary" fontSize="large"/>
      <AcUnitIcon color="secondary" fontSize="small"/>
      <AcUnitIcon color="action" fontSize="large"/>
      <AcUnitIcon color="error" fontSize="large"/>
      <AcUnitIcon color="disabled" fontSize="large"/>

    </Container>
  )
}

export default Create
