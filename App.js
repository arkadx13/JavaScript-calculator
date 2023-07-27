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
      <button id="clear" className="key ac">
        AC
      </button>
      <button className="key delete">←</button>
      <button id="multiply" className="key operator">
        x
      </button>

      <button id="seven" className="key">
        7
      </button>
      <button id="eight" className="key">
        8
      </button>
      <button id="nine" className="key">
        9
      </button>
      <button id="divide" className="key operator">
        /
      </button>

      <button id="four" className="key">
        4
      </button>
      <button id="five" className="key">
        5
      </button>
      <button id="six" className="key">
        6
      </button>
      <button id="subtract" className="key operator">
        -
      </button>

      <button id="one" className="key">
        1
      </button>
      <button id="two" className="key">
        2
      </button>
      <button id="three" className="key">
        3
      </button>
      <button id="add" className="key operator">
        +
      </button>

      <button id="zero" className="key zero">
        0
      </button>
      <button id="decimal" className="key">
        .
      </button>
      <button id="equals" className="key operator">
        =
      </button>
    </div>
  );
}
function Display() {
  return (
    <div className="display-container">
      <div className="expressions">1x4</div>
      <div id="display" className="answer">
        0
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
