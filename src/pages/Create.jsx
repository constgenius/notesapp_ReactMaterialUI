import React from "react"
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';

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
      >
        Submit
      </Button>
      {/* <Button type="submit" variant="contained" color="success" size="large" disableElevation>Submit</Button>
      <Button type="submit" variant="outlined">Submit</Button>
      
      <ButtonGroup color="secondary" variant="contained" disableElevation>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

    </Container>
  )
}

export default Create
