// import {type ReactNode} from "react";
import {type ComponentPropsWithoutRef, forwardRef} from "react";

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    label: string,
    id: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({label, id, ...props}: InputProps, ref) {
    return (
        <p>
            <label htmlFor={id}> {label}</label>
            <input id={id} {...props} ref={ref}/>
        </p>
    );
});

export default Input;