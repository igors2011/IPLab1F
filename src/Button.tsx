import React from 'react';
export {};

interface ButtonProps {
    text: string;
    onClick: () => any;
}

var Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
};
export default Button;