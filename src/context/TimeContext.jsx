import { useState } from "react";
import { createContext } from "react";
import { helpTime } from "../helpers/helpTime";

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(helpTime().getTime());

  const updateTime = ({ newT = false, t, nameT }) => {
    // Lo que hacemos es ver si esta cambiando todos los datos o unicamente uno dse ellos
    newT ? setTime(t) : setTime({ ...time, [nameT]: t });
  };

  return (
    <TimeContext.Provider value={{ time, updateTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContext;
