import { ReactNode } from "react";
import "../styles/components/Button.css";

interface ButtonProps {
    children?: ReactNode;
    backgroundColor?: string;
    onClick(): void;
}

function Button({ children, backgroundColor, onClick }: ButtonProps) {

    const inlineStyles: Record<string, string | number> = {};

    if (backgroundColor) {
        inlineStyles.backgroundColor = backgroundColor;
    }

    return (
        <button 
            className="defaultButton"
            style={inlineStyles} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;