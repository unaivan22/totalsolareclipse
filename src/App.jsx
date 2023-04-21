import React, { useState ,useEffect } from 'react';

import './App.css'

function App() {

  // const dot = document.getElementById("moon");
  // const moveX = 40;
  // const moveY = 0;
  // const moveZ = 1;
  
  // const handleMotion = e => {
  // const x = Math.round(e.accelerationIncludingGravity.x) * moveX;
  // const y = Math.round(e.accelerationIncludingGravity.y) * moveY;
  // const z = Math.round(e.accelerationIncludingGravity.z) * moveZ;
  
  // dot.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`;
  
  // }

  // useEffect(() => {
  //   window.addEventListener("devicemotion", handleMotion);
  // });

  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const dot = document.getElementById("moon");

  function handleMotionEvent(event) {
    console.log("handle motion event", event);

    var x = event.accelerationIncludingGravity.x * 12;
    var y = event.accelerationIncludingGravity.y * 2;
    var z = event.accelerationIncludingGravity.z;

    setX(x);
    setY(y);
    setZ(z);

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
