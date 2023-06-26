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
      <div class="group one">
  <div class="cloud one"></div>
  <div class="cloud two"></div>
  <div class="cloud three"></div>
  <div class="cloud four"></div>
</div>
<div class="group two">
  <div class="cloud one"></div>
  <div class="cloud two"></div>
  <div class="cloud three"></div>
  <div class="cloud four"></div>
</div>
<svg width="0" height="0">
  <filter id="filter-one">
    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="2904"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="170"></feDisplacementMap>
  </filter>
  <filter id="filter-two">
    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="8822"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="180"></feDisplacementMap>
  </filter>
  <filter id="filter-three">
    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="7569"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="170"></feDisplacementMap>
  </filter>
  <filter id="filter-four">
    <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed="8517"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="100"></feDisplacementMap>
  </filter>
</svg>
    </>
  )
}

export default App
