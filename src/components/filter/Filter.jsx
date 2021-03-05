import React from 'react';
import { InputFn } from '../../lib/InputFn';

export function Filter({ value, onChangeFilter }) {
  return (
    <>
      <InputFn
        value={value}
        type="text"
        placeholder="Enter contact name"
        onChange={onChangeFilter}
        titleNameInput="Find contact by name:"
      />
    </>
  );
}
