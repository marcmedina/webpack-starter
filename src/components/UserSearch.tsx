import React from 'react';
import { useUsers } from '../hooks/User';
// @ts-ignore
import { Pane, Heading, Autocomplete, TextInput } from 'evergreen-ui';

export function UserSearch(): JSX.Element {
  return (
    <Pane
      elevation={0}
      width={300}
      float="left"
      height="auto"
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={20}
    >
      <Heading
        marginBottom={20}
      >
        Search Users
      </Heading>
      <Autocomplete
        title="Users"
        items={useUsers()}
      >
        {(props: any) => {
          const { getInputProps, getRef, inputValue, openMenu } = props;
          return (
            <TextInput
              placeholder="Open on focus"
              value={inputValue}
              innerRef={getRef}
              {...getInputProps({
                onFocus: () => {
                  openMenu()
                }
              })}
            />
          )
        }}
      </Autocomplete>
    </Pane>
  );
}
