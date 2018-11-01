// @ts-ignore
import { useState, useEffect } from 'react';
import { getUsers } from '../services/UserService';
import events from '../services/Eventer';


export function useUsers() {
  const [users, setUsers]: [string[], (user: string[]) => void] = useState(getUsers());

  useEffect(() => {
    events.on('addUser', setUsers);

    return () => {
      console.log("Removing listener");
      events.removeListener('addUser', () => {
        console.log("Removed");
      });
    }
  });

  return users;
}
