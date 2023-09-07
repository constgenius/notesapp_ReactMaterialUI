import React from "react"
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn:{
    fontSize:60,
    backgroundColor: "voilet",
    "&:hover":{
      background:'blue'
    }
  },
  title:{
    textDecoration: 'underline',
    marginBottom: 20
  }
})

const Create = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        className={classes.btn}
        onClick={()=>console.log("You Clicked Me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
      

    </Container>
  )
}

export default Create
