import React from 'react';
import {useUsers} from '../hooks/User';
// @ts-ignore
import { Pane, Heading, UnorderedList, ListItem, Text } from 'evergreen-ui';

export function UserList(): JSX.Element {
  const users = useUsers().map((user: string, key: number) =>
    <ListItem key={key}>{user}</ListItem>
  );
  return (
    <Pane
      elevation={1}
      float="right"
      width={300}
      height="auto"
      margin={24}
      display="flex"
      justifyContent="left"
      alignItems="left"
      flexDirection="column"
      padding={20}
    >
      <Heading
        size={600}
        marginTop={0}
      >
        Users
      </Heading>
      {users.length ? (
        <UnorderedList
          icon="user"
          iconColor="muted"
        >
          {users}
        </UnorderedList>
        ) : (
        <Text size={400} color="muted">No users</Text>
      )}
    </Pane>
  );
}
