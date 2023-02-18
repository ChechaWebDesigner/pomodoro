import { useContext } from "react";
import TimeContext from "../context/TimeContext";
import { helpTime } from "../helpers/helpTime";
import { useColor } from "../hooks/useColor";
import FormInputColor from "./FormInputColor";
import FormSelectTime from "./FormSelectTime";

const FormSettings = ({ hideVisibility }) => {
  const { color, handleColor } = useColor();
  const { time, updateTime } = useContext(TimeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData(e.target);

    let pomodoro = parseInt(newForm.get("number-pomodoro")),
      shortBreak = parseInt(newForm.get("number-short-break")),
      longBreak = parseInt(newForm.get("number-long-break")),
      mainColor = newForm.get("txt-main-color");

    const newTime = {
      pomodoro: {
        minutes: pomodoro,
        seconds: 0,
      },
      "short-break": {
        minutes: shortBreak,
        seconds: 0,
      },
      "long-break": {
        minutes: longBreak,
        seconds: 0,
      },
    };

    document.body.style.setProperty("--bg-main-color", mainColor);
    localStorage.setItem("mainColor", mainColor);
    handleColor(mainColor);
    updateTime({
      newT: true,
      t: newTime,
    });
    helpTime().setTime(newTime);
  };

  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="row-flex-between container-title-settings">
        <h3>Settings</h3>
        <button
          type="button"
          className="btn-close-modal"
          onClick={() => hideVisibility()}
        >
          X
        </button>
      </div>
      <div className="container-time-title">
        <h4 className="uppercase">Time (minutes)</h4>
      </div>
      <div className="time-inputs">
        <FormSelectTime name="pomodoro" defaultTime={time.pomodoro.minutes} />
        <FormSelectTime
          name="short-break"
          defaultTime={time["short-break"].minutes}
        />
        <FormSelectTime
          name="long-break"
          defaultTime={time["long-break"].minutes}
        />
      </div>
      <div className="row-flex-between">
        <h4 className="uppercase">Color</h4>
        <FormInputColor defaultColor={color} />
      </div>
      <div className="container-btn-save">
        <button id="btn-save" type="submit">
          Apply
        </button>
      </div>
    </form>
  );
};

export default FormSettings;
