import { Button, FormControl, FormLabel, Input } from '@vechaiui/react'
import { LoginIcon } from '@heroicons/react/solid'
import React from 'react'
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import AuthPage from './layout/AuthPage'

function doLogin(email: string, password: string) {
  axios.post('/login', {
    email,
    password,
  }).then((response) => {
    localStorage.setItem('token', response.data.token);
    window.location.reload();
  });
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  return (
    <AuthPage title="Login" icon={<LoginIcon />}>

      <form className="Form Login-form" onSubmit={(e) => {
        e.preventDefault();

        setLoading(true);
        doLogin(email, password);
      }}>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input placeholder="foo@bar.baz" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
        </FormControl>

        <FormControl>
          <Button variant="light" loading={loading} className="btn--full">Login</Button>
        </FormControl>

        <FormControl className="FormControl--separator">
          <span className="FormControl-label">OR</span>
        </FormControl>

        <FormControl>
          <Button
            onClick={() => navigate("/register")}
            variant="solid"
            className="btn--full">Sign Up</Button>
        </FormControl>

      </form>

    </AuthPage>
  )
}

export default Login
