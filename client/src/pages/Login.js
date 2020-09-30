import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import network from '../services/network'
import { login } from '../services/auth'

const Box = ({ style={}, ...props }) => (<div style={{ marginBottom: 10, ...style }} {...props} />)

export default () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const onLogin = async () => {
    try {
      const { token } = await network('/api/login', { body: {
        username,
        password
      } })
      login(token)
    } catch(e) {
      setError('error')
    }
  }
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      <Box>
        <TextField onChange={({target}) => setUsername(target.value)} id="username" label="Username" variant="outlined" />
      </Box>
      <Box>
        <TextField type="password" onChange={({target}) => setPassword(target.value)} id="password" label="Password" variant="outlined" />
        {error ? <div id="errorMessage">{error}</div> : undefined}
      </Box>
      <Button id="login" onClick={onLogin} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};