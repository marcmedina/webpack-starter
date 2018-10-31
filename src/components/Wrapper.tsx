import React from 'react';
import {UserAdd} from "./UserAdd";
import {UserList} from "./UserList";
import {UserListTwo} from "./UserListTwo";

export function Users(): JSX.Element {
  return (
    <div>
      <UserListTwo/>
      <UserList/>
      <UserAdd/>
    </div>
  );
}
