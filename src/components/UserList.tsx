import React from 'react';
import {getUsers} from '../hooks/user';

export function UserList(): JSX.Element {
  const users = getUsers().map((user: string, key: number) =>
    <p key={key}>{user}</p>
  );
  return (
    <div>
      My Users:
      {users}
    </div>
  );
}
