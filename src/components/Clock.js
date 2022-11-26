import { useState, useEffect, useRef } from "react";
function Clock() {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  const count = useRef(0);
  useEffect(() => {
    // Alert shows twice :(
    // if (count.current < 1) {
    //   alert("It's time to hydrate my Nibba");
    //   console.log(count.current);
    // }
    count.current++;
    console.log(count.current);
    const timerId = setInterval(refreshClock, 1000);
    // const interval = setInterval(() => {
    //   alert("It's time to hydrate my Nibba");
    // }, 300000);
    return function cleanup() {
      clearInterval(timerId);
      //clearInterval(interval);
    };
  }, []);

  return <span>{date.toLocaleTimeString()}</span>;
}
export default Clock;
