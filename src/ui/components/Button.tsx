import "../styles/components/Button.css";

interface ButtonProps {
    text?: string;
    backgroundColor?: string;
    onClick(): void;
}

function Button(props: ButtonProps) {

    const inlineStyles: Record<string, string | number> = {};

    if (props.backgroundColor) {
        inlineStyles.backgroundColor = props.backgroundColor;
    }

    return (
        <button 
            className="defaultButton"
            style={inlineStyles} 
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;