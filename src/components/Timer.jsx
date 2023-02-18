import TimerTime from "./TimerTime";

const Timer = ({ item }) => {
  return (
    <div className="container-pomodoro" id={item}>
      {item === "pomodoro" && <TimerTime item={item} />}
      {item === "short-break" && <TimerTime item={item} />}
      {item === "long-break" && <TimerTime item={item} />}
    </div>
  );
};

export default Timer;
