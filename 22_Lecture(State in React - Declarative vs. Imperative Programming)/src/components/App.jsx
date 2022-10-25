import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;

// UI = f(State)

// Here if we click on the "Change to strike through" or "CHange back" then it's not gonna work and the reason is that we cannot dive into the state of a functin and change it's value.... But we can do this using Hooks concept

// We can change the text decoration also by using imperative propgramming by the following way

// document.getElementById("root").style.textDecoration = "line-through";
