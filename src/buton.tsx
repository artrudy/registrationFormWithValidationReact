import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset';
}

const defaultProps: Partial<ButtonProps> = {
  type: 'button',
};


function Button({ children, type }: ButtonProps) {
    return (
        <button type={type}>
            {children}
        </button>
    )
}
Button.defaultProps = defaultProps;

export default Button;