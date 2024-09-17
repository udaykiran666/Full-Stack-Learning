import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [render, forceRender] = useState(0);
    const renderRef = useRef(0);

    const handleReRender = () => {
        forceRender(render+1);
    };

    renderRef.current = renderRef.current + 1;

    return (
        <div>
            <p>This component has rendered {renderRef.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};