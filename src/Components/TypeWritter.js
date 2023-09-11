

import React, { useState, useEffect } from 'react';

const Typewriter = (props) => {
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < props.respond.length) {
            const timeoutId = setTimeout(() => {
                setDisplayText(props.respond.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 30); // Adjust the typing speed here
            return () => clearTimeout(timeoutId);
        }
    }, [charIndex, props]);

    return <div>{displayText}</div>;
};

export default Typewriter;
