import { useEffect, useState } from "react";

type Position = {
    x: number;
    y: number;
};

function MouseTracker() {
    const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className="mouse-tracker">
            <h1>Mouse Position</h1>
            <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
    )

}

export default MouseTracker;
