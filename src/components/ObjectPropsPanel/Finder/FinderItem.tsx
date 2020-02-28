import React, { useState, useCallback } from "react";

import {
  ListItem,
  InputBase,
  ListItemSecondaryAction,
  IconButton,
  ClickAwayListener
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

/** Component props */
interface Props {
  name: string;
  renameObject: (name: string) => void;
  removeObject: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const FinderItem = (props: Props) => {
  const { name, renameObject, removeObject } = props;

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(name);

  /** Handles click for turn on edit mode */
  const handleClick = useCallback(() => {
    setEdit(true);
  }, []);

  /** Handles click away for turn off edit mode */
  const handleClickAway = useCallback(() => {
    if (edit && name !== value) {
      renameObject(value);
    }
    setEdit(false);
  }, [value, edit]);

  /** Handles input changes */
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ListItem>
        <InputBase
          value={value}
          disabled={!edit}
          onChange={handleChange}
          onClick={handleClick}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={removeObject}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </ClickAwayListener>
  );
};
