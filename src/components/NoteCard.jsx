import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card sx={{
        border: note.category === 'work' ? '1px solid red' : 'none',
      }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
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
    </div>
  )
}

export default NoteCard