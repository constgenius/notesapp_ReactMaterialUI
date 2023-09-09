import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import { Avatar, IconButton, Typography } from '@mui/material';

const NoteCard = ({ note, handleDelete }) => {

  const getAvatarBackgroundColor = () => {
    switch (note.category) {
      case 'work':
        return 'red';
      case 'money':
        return 'green';
      case 'todos':
        return 'blueviolet';
      default:
        return 'blue'
    }
  }

  return (

    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        avatar={
          <Avatar sx={{ backgroundColor: getAvatarBackgroundColor() }}>{note.category[0].toUpperCase()}</Avatar>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant='body2' color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard