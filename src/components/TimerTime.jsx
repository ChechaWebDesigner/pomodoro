import format from "../helpers/format";
import { useContext, useEffect, useState } from "react";
import TimeContext from "../context/TimeContext";
import { helpTime } from "../helpers/helpTime";
import { useSetInterval } from "../hooks/useSetInterval";

const TimerTime = ({ item }) => {
  const { time } = useContext(TimeContext);
  const [finished, setFinished] = useState(false);
  const [showRestart, setShowRestart] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(
    time[item].minutes * 60 + time[item].seconds
  );
  useEffect(() => {
    setTotalSeconds(time[item].minutes * 60 + time[item].seconds);
  }, [time]);

  // Porcentaje que lleva completo
  const full =
    helpTime().getTime("time")[item].minutes * 60 +
    helpTime().getTime("time")[item].seconds;

  const transparent = full - totalSeconds;
  const fill = full - transparent;

  let porcentageFill = (fill * 100) / full;
  let porcentageTransparent = (transparent * 100) / full;

  if (porcentageTransparent > 50) {
    porcentageTransparent = porcentageFill;
  }

  const bg = {
    background: `conic-gradient(var(--bg-main-color) ${porcentageFill}%, #000 ${porcentageTransparent}%)`,
  };

  // Start time

  const doSetInterval = () => setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);

  /*
  const doSetInterval = () => {
    // setcurrentTime((prevCurrentTime) => {
    //   return {
    //     ...prevCurrentTime,
    //     seconds: prevCurrentTime.seconds - 1,
    //   };
    // });

    let seconds = currentTime.seconds;
    seconds -= 1;

    console.log(seconds);

    if (currentTime.minutes === 0 && currentTime.seconds === 0) {
      setFinished(true);
      return;
    }

    if (seconds <= 0) {
      setcurrentTime({
        seconds: 59,
        minutes: currentTime.minutes - 1,
      });
    }

    console.log(currentTime);
  };
  */
  const { start, stop, isRunning, restart } = useSetInterval({
    callback: doSetInterval,
    interval: 1000,
    finished,
  });

  const restartAll = () => {
    restart();
    setFinished(true);
    setShowRestart(false);
    setTotalSeconds(
      helpTime().getTime("time")[item].seconds +
        helpTime().getTime("time")[item].minutes * 60
    );
  };

  if (totalSeconds <= 0) {
    restartAll();
  }

  return (
    <div className="container-time" style={bg}>
      <div className="data-time">
        {showRestart && (
          <button
            className="btn-restart btn-clock"
            onClick={() => restartAll()}
          >
            Restart
          </button>
        )}
        <span className="restant-time restant-time">
          {format(Math.trunc(totalSeconds / 60))}:{format(totalSeconds % 60)}
        </span>
        {!isRunning ? (
          <button
            className="btn-start btn-clock"
            onClick={() => {
              setFinished(false);
              setShowRestart(true);
              start();
            }}
          >
            Start
          </button>
        ) : (
          <button className="btn-pause btn-clock" onClick={() => stop()}>
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerTime;
