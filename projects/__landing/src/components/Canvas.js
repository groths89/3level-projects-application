import React, { useRef, useEffect } from 'react';

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        context.beginPath()
        context.moveTo(150,50)
        context.lineTo(450,50)
        context.stroke()
        context.lineTo(500,200)
        context.stroke()
        context.lineTo(100,200)
        context.stroke()
        context.closePath()
    }, [])

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;