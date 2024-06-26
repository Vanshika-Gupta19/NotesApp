import React from 'react';
import { Input } from 'baseui/input';
import { useStyletron } from "baseui";
import { SIZE } from "baseui/input";

const Title = ({ value, onChange, autoFocus }) => {
  const [css] = useStyletron();

  return (
    <div>
      <span className={css({ marginLeft: '5px', fontSize: '25px', fontWeight: 'bold' })}>Title</span>
      <Input
        type="text"
        id="title"
        placeholder="Title of Note"
        value={value}
        size={SIZE.large}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Title;