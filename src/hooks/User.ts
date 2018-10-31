// @ts-ignore
import { useState, useEffect } from 'react'

let users: string[] = [];

export function getUsers() {
  const [user, setUser] = useState(users);

  useEffect(() => {
    setUser(user);
  });
  return user;
}

export function addUser(user: string) {
  users.push(user);
}