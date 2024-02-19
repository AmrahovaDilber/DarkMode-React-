import "./App.css";
import React from "react";
function App() {
  const header = React.createElement(
    "h1",
    { style: { color: "#999", fontSize: "19px", margin: "50px 0 0 50px" } },
    "Solar system planets :"
  );
  const planets = (
    <>
      <ul className="planets-list">
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
      </ul>
    </>
  );

  const slider = (
    <>
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round" onClick={changeTheme}></div>
      </label>
    </>
  );

  function changeTheme() {
    if (document.getElementById("checkbox").checked === true) {
      document.body.classList.remove("dark", "li");
    } else {
      document.body.classList.add("dark", "li");
    }
  }

  return (
    <div className="App">
      {header} {planets} {slider}
    </div>
  );
}

export default App;
