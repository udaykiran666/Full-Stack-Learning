import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputref = useRef()
    useEffect(() => {
        inputref.current.focus();  // Focus the input field when the component mounts
    }, []);

    const handleButtonClick = () => {
        inputref.current.focus();  // Focus the input field when the button is clicked
    };

    return (
        <div>
            <input ref={inputref} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
