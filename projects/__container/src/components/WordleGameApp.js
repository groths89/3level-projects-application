import { mountW } from 'wordle/WordleApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountW(ref.current);
    }, [])

    return <div ref={ref}></div>;
}