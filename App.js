function App() {
  return (
    <div>
      <div className="calculator">
        <Display />
        <Keypad />
      </div>
    </div>
  );
}
function Keypad() {
  return (
    <div className="keypad">
      <button className="key ac">AC</button>
      <button className="key delete">←</button>
      <button className="key operator">x</button>

      <button className="key">7</button>
      <button className="key">8</button>
      <button className="key">9</button>
      <button className="key operator">/</button>

      <button className="key">4</button>
      <button className="key">5</button>
      <button className="key">6</button>
      <button className="key operator">-</button>

      <button className="key">1</button>
      <button className="key">2</button>
      <button className="key">3</button>
      <button className="key operator">+</button>

      <button className="key zero">0</button>
      <button className="key">.</button>
      <button className="key operator">=</button>
    </div>
  );
}
function Display() {
  return (
    <div className="display">
      <div className="expressions">1x4</div>
      <div className="answer">4444444445678</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
