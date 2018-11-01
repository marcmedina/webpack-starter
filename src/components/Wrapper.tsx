import React from 'react';
// @ts-ignore
import { Pane } from 'evergreen-ui';
import { UserAdd } from "./UserAdd";
import { UserList } from "./UserList";
import { UserSearch } from "./UserSearch";

export function Users(): JSX.Element {
  return (
    <Pane>
      <UserList />
      <UserAdd />
      <UserSearch />
    </Pane>
  );
}
