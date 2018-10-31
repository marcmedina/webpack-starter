import React, {ChangeEvent} from 'react';
// @ts-ignore
import { useState, useEffect } from 'react'
import { addUser } from '../hooks/user';

export function UserAdd(): JSX.Element {
  const [username, setUsername]: [string, (username: string) => void] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <button
        onClick={() => {
          addUser(username);
          setUsername("");
        }}
      >
        Add User
      </button>
    </div>
  );
}