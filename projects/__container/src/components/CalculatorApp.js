import { mountC } from 'calculator/CalculatorApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountC(ref.current);
    }, [])

    return <div ref={ref}></div>;
}