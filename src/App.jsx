import React, { useState ,useEffect } from 'react';

import './App.css'

function App() {

  const [x, setX] = useState("");
  const [y, setY] = useState("");

  function handleMotionEvent(event) {

    // var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");
    const frame = document.getElementById("body");


    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;

    setX(x);
    setY(y);

    var angle = Math.atan2(y, x);
    var radius = Math.sqrt(x * x + y * y);
    
    outputElement.textContent = `Angle: ${angle.toFixed(2)} degrees, Radius: ${radius.toFixed(2)}`;

    moon.style.top = 50 + radius * Math.sin(angle) + "%";
    moon.style.left = 50 + radius * Math.cos(angle) + "%";
    
    var XColor = radius * 40;
    outputBg.textContent = `Bg: ${XColor}`;
      
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
      <p id='output'></p>
  <p id='bg'></p>
    </>
  )
}

export default App
