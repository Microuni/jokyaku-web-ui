import { UserIcon } from '@heroicons/react/outline';
import { Button, FormControl, FormLabel, Input, useMessage } from '@vechaiui/react';
import Avatar from 'boring-avatars';
import React, { FormEventHandler } from 'react';
import axios from '../utils/axios';
import SessionContext from '../utils/session';
import Page from './layout/Page';

function Account() {
  const session = React.useContext(SessionContext)
  const [firstName, setFirstName] = React.useState(session.user!.firstName)
  const [lastName, setLastName] = React.useState(session.user!.lastName)
  const [email, setEmail] = React.useState(session.user!.email)
  const [bornOn, setBotnOn] = React.useState(session.user!.bornOn)
  const [isLoading, setIsLoading] = React.useState(false)
  const message = useMessage()

  const save = (e: any) => {
    e.preventDefault()

    axios
      .withToast({
        call: message,
        success: 'Account Info Saved!',
        error: 'Invalid Data, try again later...'
      })
      .patch(`/users-service/users/${session.user!.id}`, {
        firstName, lastName, email, bornOn
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Page title="Profile Informations" icon={<UserIcon />} sidebar="true">
      <div className="AccountForm">
        <form className='Form' onSubmit={save}>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input id="firstName" value={firstName} onInput={(e: any) => setFirstName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input id="lastName" value={lastName} onInput={(e: any) => setLastName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" value={email} onInput={(e: any) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="bornOn">Birthdate</FormLabel>
            <Input type='date' id="bornOn" value={bornOn.split('T')[0]} onInput={(e: any) => setBotnOn(e.target.value)} />
          </FormControl>
          <FormControl>
            <Button
              variant='light'
              color='primary'
              loading={isLoading}>Save</Button>
          </FormControl>
        </form>
        <div className="AccountForm-avatar">
          <Avatar
            size={150}
            name={session.user!.fullName}
            variant='beam'/>
          <Button variant='light' color='positive'>Upload Profile Picture</Button>
          <Button variant='light' color='danger'>Remove Profile Picture</Button>
        </div>
      </div>
    </Page>
  );
}

export default Account;

