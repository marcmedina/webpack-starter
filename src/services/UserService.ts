import events from './Eventer';

let users: string[] = [];

export function addUser(user: string): void {
  users = [...users, user];
  events.emit('addUser', users);
  console.log("addUser", users);
}

export function getUsers(): string[] {
  console.log("getUsers", users);
  return users;
}

events.on("addUser", (user) => {
  console.log("User Listener called", user);
});