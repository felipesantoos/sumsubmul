import "../styles/components/Button.css";

interface ButtonProps {
    text?: string;
    backgroundColor?: string;
    onClick(): void;
}

function Button({ text, backgroundColor, onClick }: ButtonProps) {

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
            {text}
        </button>
    );
}

export default Button;