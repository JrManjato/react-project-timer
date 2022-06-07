import { useState, useEffect } from "react"
import { getRemainingTimeUntilMsTimestamp } from "./CountdownUtil";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountDownTimer = ({countdownTimestampsMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampsMs);
        },1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampsMs]);

    function updateRemainingTime(countdownTimestampsMs) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdownTimestampsMs));
    }
    return(
        <div>
            <span>{remainingTime.days}</span>
            <span>{remainingTime.hours}</span>
            <span>{remainingTime.minutes}</span>
            <span>{remainingTime.seconds}</span>
        </div>
    )
}
export default CountDownTimer;