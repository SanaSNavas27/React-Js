import React, { useState, useEffect } from 'react';

function SingleColor({ rgb, weight, index, hexColor }) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(','); // Ensure rgb is an array
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        
        // Cleanup timeout on component unmount
        return () => clearTimeout(timeout);
    }, [alert]); // Depend on `alert` so it resets properly

    return (
        <article
            className={`color ${index > 10 ? 'color-light' : ''}`} // Fixed className syntax
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p> {/* Corrected className */}
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    );
}

export default SingleColor;
