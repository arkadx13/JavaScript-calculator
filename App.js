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
      <div className="key ac">AC</div>
      <div className="key delete">←</div>
      <div className="key operator">x</div>

      <div className="key">7</div>
      <div className="key">8</div>
      <div className="key">9</div>
      <div className="key operator">/</div>

      <div className="key">4</div>
      <div className="key">5</div>
      <div className="key">6</div>
      <div className="key operator">-</div>

      <div className="key">1</div>
      <div className="key">2</div>
      <div className="key">3</div>
      <div className="key operator">+</div>

      <div className="key zero">0</div>
      <div className="key">.</div>
      <div className="key operator">=</div>
    </div>
  );
}
function Display() {
  return (
    <div className="display">
      <div className="expressions">1x4</div>
      <div className="answer">4</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
