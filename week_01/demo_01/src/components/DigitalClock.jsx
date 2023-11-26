import { useState } from 'react';
import './DigitalClock.css';

function DigitalClock ({ utc = 0 }) {
  const [timeStr, setTimeStr] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTimeStr(new Date().toLocaleTimeString());
  }, 500);

  return (
    <>
      <div className={`digital-clock`}>
        {timeStr}
      </div>
    </>
  )
}

export default DigitalClock;