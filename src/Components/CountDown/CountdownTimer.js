import React from 'react';
import { useEffect, useState } from 'react';

// useCountdown
const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);
  
    return getReturnValues(countDown);
};
  
  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };

//DateTimeDisplay
const DateTimeDisplay = ({ value, type}) => {
    return (
      <div className='countdown'>
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };


//CountdownTimer

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <span
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'}  />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'}  />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'}  />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </span>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
   // alert("Times out");
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
