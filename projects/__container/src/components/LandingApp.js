import { mountLanding } from 'landingapp/LandingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountLanding(ref.current);
    })

    return <div ref={ref}></div>;
}