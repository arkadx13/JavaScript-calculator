function App() {
  const [displayAnswer, setAnswer] = React.useState(1234543);
  const [expression, setExpression] = React.useState("56x3+56");

  //functions for Keys
  const clear = () => {
    setAnswer(0);
    setExpression("");
  };

  const deletePrev = () => {
    setExpression((prev) => {
      if (prev === "" && prev === null) {
        return;
      }
      let arrayExp = prev.split("");
      let lastIndex = arrayExp.length - 1;
      console.log(arrayExp);
      console.log(arrayExp.slice(0, lastIndex));
      let result = arrayExp.slice(0, lastIndex);
      return result.join("");
    });
  };

  const keyPress = (e) => {
    setExpression((prev) => prev + e);
  };

  return (
    <div>
      <div className="calculator">
        <Display answer={displayAnswer} expression={expression} />
        <Keypad ac={clear} deletePrev={deletePrev} keyPress={keyPress} />
      </div>
    </div>
  );
}

function Display({ answer, expression }) {
  return (
    <div className="display-container">
      <div className="expressions">{expression}</div>
      <div id="display" className="answer">
        {answer}
      </div>
    </div>
  );
}

function Keypad({ ac, keyPress, deletePrev }) {
  return (
    <div className="keypad">
      <button id="clear" className="key ac" onClick={ac}>
        AC
      </button>
      <button className="key delete" onClick={deletePrev}>
        ←
      </button>
      <button
        id="multiply"
        className="key operator"
        onClick={() => keyPress("*")}
      >
        x
      </button>

      <button id="seven" className="key" onClick={() => keyPress("7")}>
        7
      </button>
      <button id="eight" className="key" onClick={() => keyPress("8")}>
        8
      </button>
      <button id="nine" className="key" onClick={() => keyPress("9")}>
        9
      </button>
      <button
        id="divide"
        className="key operator"
        onClick={() => keyPress("÷")}
      >
        ÷
      </button>

      <button id="four" className="key" onClick={() => keyPress("4")}>
        4
      </button>
      <button id="five" className="key" onClick={() => keyPress("5")}>
        5
      </button>
      <button id="six" className="key" onClick={() => keyPress("6")}>
        6
      </button>
      <button
        id="subtract"
        className="key operator"
        onClick={() => keyPress("-")}
      >
        -
      </button>

      <button id="one" className="key" onClick={() => keyPress("1")}>
        1
      </button>
      <button id="two" className="key" onClick={() => keyPress("2")}>
        2
      </button>
      <button id="three" className="key" onClick={() => keyPress("3")}>
        3
      </button>
      <button id="add" className="key operator" onClick={() => keyPress("+")}>
        +
      </button>

      <button id="zero" className="key zero" onClick={() => keyPress("0")}>
        0
      </button>
      <button id="decimal" className="key" onClick={() => keyPress(".")}>
        .
      </button>
      <button id="equals" className="key operator">
        =
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
