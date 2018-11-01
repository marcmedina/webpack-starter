import React, {ChangeEvent} from 'react';
// @ts-ignore
import { useState, useEffect } from 'react'
import { addUser } from '../services/UserService';
// @ts-ignore
import { Pane, Heading, Button, TextInput } from 'evergreen-ui'

export function UserAdd(): JSX.Element {
  const [username, setUsername]: [string, (username: string) => void] = useState("");

  return (
    <Pane
      elevation={0}
      float="left"
      width={300}
      height="auto"
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={20}
    >
      <Heading
        marginBottom={20}
      >
        Add Users
      </Heading>
      <TextInput
        width="100%"
        height={48}
        placeholder="Enter a username to add"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <Button
        height={48}
        appearance="primary"
        marginTop={16}
        onClick={() => {
          addUser(username);
          setUsername("");
        }}
      >
        Add User
      </Button>
    </Pane>
  );
}