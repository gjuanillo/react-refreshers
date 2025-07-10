import { useEffect, useState } from "react";

function DigitalClock() {

    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timerId: ReturnType<typeof setInterval> = setInterval(() =>
            setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const formattedTime: string = time.toLocaleTimeString('ja-JP',
        { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }
    )

    return (
        <div className="clock-container">
            <div className="digital-clock">
                {formattedTime}
            </div>
        </div>
    );
}

export default DigitalClock;
