import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <>
      <label>Minutes</label>
      <input type="number" value={minutes} onChange={onMinutesChange} />
      <label>Hours</label>
      <input type="number" value={hours} onChange={onHoursChange} />
    </>
  );
}

export default App;
