// @ts-ignore
import { useState, useEffect } from 'react'

let users: string[] = [];
let proxy: () => void;

export function getUsers() {
  const [user, setUser]: [string[], (user: string[]) => void] = useState(users);

  useEffect(() => {
    proxy = () => setUser(user);
  });
  return user;
}

export function addUser(user: string) {
  users.push(user);
  proxy();
}