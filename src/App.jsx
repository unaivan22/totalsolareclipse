import React, { useState ,useEffect } from 'react';

import './App.css'

function App() {

  const [x, setX] = useState("");
  const [y, setY] = useState("");
  var moon = document.getElementById("moon");
  const frame = document.getElementById("body");

  function handleMotionEvent(event) {

    // var sun = document.getElementById("sun");

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;

    setX(x);
    setY(y);

    var angle = Math.atan2(y, x);
    var radius = Math.sqrt(x * x + y * y);
    var XColor = radius * 40;

    // outputElement.textContent = `Angle: ${angle.toFixed(2)} degrees, Radius: ${radius.toFixed(2)}`;
    // outputBg.textContent = `Bg: ${XColor}`;

    
    moon.style.top = 0 + radius * 10 * Math.sin(angle.toFixed(2)) + "%";
    moon.style.left = 0 + radius * 10 * Math.cos(angle.toFixed(2)) + "%";
    
    frame.style.background =`rgb(${XColor}, ${XColor}, ${XColor})`;
  }

  useEffect(() => {
    window.addEventListener("devicemotion", handleMotionEvent, true);
  }, [x, y]);



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
