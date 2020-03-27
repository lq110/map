import React, { useState } from "react";
import usedebounce from "./index";
function Debounce() {
  let [a, seta] = useState("");
  let [b, setb] = useState("");
  return (
    <div>
      <input onChange={e => seta(e.target.value)} />
      <h1>{a}</h1>
      <br />
      <h1>{b}</h1>
    </div>
  );
}
export default Debounce;
