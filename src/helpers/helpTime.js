const newTime = {
  pomodoro: {
    minutes: 1,
    seconds: 0,
  },
  "short-break": {
    minutes: 5,
    seconds: 0,
  },
  "long-break": {
    minutes: 15,
    seconds: 0,
  },
};

export const helpTime = () => {
  const setTime = (t) => localStorage.setItem("time", JSON.stringify(t));

  const getTime = () => {
    if (!localStorage.getItem("time")) {
      localStorage.setItem("time", JSON.stringify(newTime));
      return newTime;
    }

    return JSON.parse(localStorage.getItem("time"));
  };

  return {
    setTime,
    getTime,
  };
};
