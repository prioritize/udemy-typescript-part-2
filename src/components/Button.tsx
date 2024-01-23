import {ComponentPropsWithoutRef} from "react";

interface ButtonProps extends ComponentPropsWithoutRef<'button'>{
    el: 'button',
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'>{
    el: 'anchor'
} 

function Button(props: ButtonProps | AnchorProps) {
    if (props.el === 'anchor') {
        return (<a className={"button"} {...props}>

        </a>
        );
    }
    return (
        <button className={"button"} {...props}>

        </button>
    );
}

export default Button;