import React from 'react';
import {getUsers} from '../hooks/user';

export function UserListTwo(): JSX.Element {
  return (
    <div>
      {getUsers().toString()}
    </div>
  );
}
