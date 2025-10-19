import { useState, useEffect } from "react";

export default function ProgressBar({ timer, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        console.log("set timeout");
        const timeout = setTimeout(onTimeout, timer);
        return () => clearTimeout(timeout);
    }, [timer, onTimeout]);

    useEffect(() => {
        console.log("set interval");
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <progress
            id="question-time"
            value={remainingTime}
            max={timer}
        ></progress>
    );
}
