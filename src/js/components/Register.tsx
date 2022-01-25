import { UserAddIcon } from '@heroicons/react/outline';
import { Button, FormControl, FormLabel, Input } from '@vechaiui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import AuthPage from './layout/AuthPage';
import Page from './layout/Page'

function doRegister(data: any) {
  axios.post('/register', {
    ...data,
    profession: '',
    bornOn: '2000-01-01'
  }).then(response => {
    localStorage.setItem('token', response.data.token);
    window.location.assign('/');
  })
}

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  return (
    <AuthPage title="Register" icon={<UserAddIcon />}>

        <form className="Form Register-form" onSubmit={(e) => {
          e.preventDefault();

          setLoading(true);
          doRegister({ firstName, lastName, email, password, passwordConfirmation })
        }}>

          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Foo" onChange={(e) => setFirstName(e.target.value)} />
          </FormControl>

          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Bar" onChange={(e) => setLastName(e.target.value)} />
          </FormControl>

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

          <FormControl id="passwordConfirmation">
            <FormLabel>Password Confirmation</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </FormControl>

          <FormControl>
            <Button variant="light" loading={loading} className="btn--full">Register</Button>
          </FormControl>

          <FormControl className="FormControl--separator">
            <span className="FormControl-label">OR</span>
          </FormControl>

          <FormControl>
            <Button
              onClick={() => navigate("/login")}
              variant="solid"
              className="btn--full">Login</Button>
          </FormControl>

        </form>

    </AuthPage>
  )
}

export default Register
