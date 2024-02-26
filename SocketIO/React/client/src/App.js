import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { TextField, Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const socket = io.connect('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat((currentChat) => [...currentChat, msg]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Real-Time Chat
      </Typography>
      <form onSubmit={sendMessage} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          label="Type a message..."
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
      <List>
        {chat.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
