import React, { useEffect, useState } from "react";
import styles from "../styles/Timer.module.css";

export const Timer: React.FC = () => {
    const [secondsLeft, setSecondsLeft] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft((prevSeconds) => {
                if (prevSeconds === 1) {
                    // Resets the timer when the count reaches 1
                    return 60;
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles["timer"]}>
            <span>Next price update: {secondsLeft}s</span>
        </div>
    )
}