import React, { useEffect, useState } from "react"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async(id)=>{
    await fetch("http://localhost:8000/notes/"+id,{
      method:"DELETE"
    })
    const newNotes = notes.filter(note => note.id !=id);
    setNotes(newNotes);
  }

  return (
    <Container>
      
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
    </Container>

  )
}

export default Notes