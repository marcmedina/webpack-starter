import React from 'react';
import {UserAdd} from "./UserAdd";
import {UserList} from "./UserList";

export function Users(): JSX.Element {
  return (
    <div>
      <UserList/>
      <UserAdd/>
    </div>
  );
}
