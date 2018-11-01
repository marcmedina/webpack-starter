import events from './Eventer';

let users: string[] = [];

export function addUser(user: string): void {
  users = [...users, user];
  events.emit('addUser', users);
}

export function getUsers(): string[] {
  return users;
}
