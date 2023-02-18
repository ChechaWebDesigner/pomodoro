import { useState } from "react";

const FormSelectTime = ({ name, defaultTime = 0 }) => {
  const [time, setTime] = useState(defaultTime);
  return (
    <div>
      <label className="description-input-time">{name}</label>
      <div className="container-input-time">
        <input
          type="number"
          min="1"
          id={`number-${name}`}
          name={`number-${name}`}
          className="input-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          className="btn-spin inner"
          type="button"
          onClick={() => setTime((prevTime) => prevTime + 1)}
        >
          ^
        </button>
        <button
          className="btn-spin outer"
          type="button"
          onClick={() => {
            if (time === 1) return;
            setTime((prevTime) => prevTime - 1);
          }}
        >
          ^
        </button>
      </div>
    </div>
  );
};

export default FormSelectTime;
