import React from 'react';
import { Button } from 'baseui/button';
import { useStyletron } from "baseui";

const Foot = ({ onSave, onCancel }) => {
  const [css] = useStyletron();

  return (
    <div className={css({display: 'flex', gap: '25px', justifyContent: 'flex-end', marginTop: '60px'})}>
      <Button onClick={onCancel} className={css({width: '85px'})}>Cancel</Button>
      <Button onClick={onSave} className={css({width: '85px'})}>Save</Button>
    </div>
  );
};

export default Foot;