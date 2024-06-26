import React from 'react';
import { SIZE } from "baseui/input";
import { useStyletron } from "baseui";
import { Textarea } from 'baseui/textarea';

const Override = {
    Input: {
        style: {
            height: '650px',
            '@media (max-width: 1280px)': {
                height: '300px',
            }
        }
    }
}

const Description = ({ value, onChange }) => {
    const [css] = useStyletron();
    return (
        <div>
            <span className={css({ fontSize: '25px', fontWeight: 'bold' })}>Description</span>
            <Textarea
                id="body"
                placeholder="Write your note here..."
                value={value}
                size={SIZE.large}
                onChange={onChange}
                overrides={Override}
            />
        </div>
    )
}

export default Description
