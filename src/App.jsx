import React, { useState ,useEffect } from 'react';

import './App.css'

function App() {

  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  
  const frame = document.getElementById("body");
  const dot = document.getElementById("moon");

  function handleMotionEvent(event) {
    console.log("handle motion event", event);

    var x = event.accelerationIncludingGravity.x * 12;
    var y = event.accelerationIncludingGravity.y * 2;
    var z = event.accelerationIncludingGravity.z;


    var x1 = event.accelerationIncludingGravity.x * 1;
    var y1 = event.accelerationIncludingGravity.y * 1;
    var z1 = event.accelerationIncludingGravity.z * 1;

    setX(x1);
    setY(y1);
    setZ(z1);


    setX(x);
    setY(y);
    setZ(z);

    frame.style.background =`rgb(${x1}, ${y1}, ${z1})`;
    dot.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`;
  }

  useEffect(() => {
    window.addEventListener("devicemotion", handleMotionEvent, true);
  }, [x, y, z]);



  return (
    <>
      <div id="sun">
        <div id="moon">
        </div>
      </div>
    </>
  )
}

export default App
