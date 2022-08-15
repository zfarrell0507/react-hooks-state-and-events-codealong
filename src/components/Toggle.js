import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleSwitch(event) {
    setIsOn((isOn) => !isOn)
  }

  return <button onClick={handleSwitch}>{isOn ? "OFF" : "ON"}</button>;
}

export default Toggle;
