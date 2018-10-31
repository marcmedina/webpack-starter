import React from 'react';
import { addUser } from '../hooks/user';

let username:string = "";

export function UserAdd(): JSX.Element {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => { username = event.target.value; }}
      />
      <button
        onClick={() => {
          addUser(username);
        }}
      >
        Add User
      </button>
    </div>
  );
}