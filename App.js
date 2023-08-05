function App() {
  const [displayAnswer, setDisplayAnswer] = React.useState("0");
  const [expression, setExpression] = React.useState("");

  //functions for Keys
  const clear = () => {
    setDisplayAnswer("0");
    setExpression("");
  };

  const deletePrev = () => {
    setExpression((prev) => {
      if (prev === "" && prev === null) {
        return;
      }
      return prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
    });

    setDisplayAnswer((prev) => {
      if (prev === "" && prev === null) {
        return;
      }
      return prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
    });
  };

  const keyPress = (e) => {
    setExpression((prev) => {
      let prevArr = prev.split("");
      let last2InputSymbol = prevArr.slice(-2);
      let lastInputSymbol = prevArr[prevArr.length - 1];
      const operators = ["*", "/", "-", "+"];
      const nonNegativeOperator = ["*", "/", "+"];

      //function to check if string ends with  operator

      function endsWithOperator() {
        for (const operator of operators) {
          if (prev.endsWith(operator)) {
            return true;
          }
        }
        return false;
      }
      //function to check if last number string has decimal

      function checkLastNumberHasDecimal() {
        const numbers = prev.split(/[\+\-\*\/]/);
        const lastNumber = numbers[numbers.length - 1];
        return lastNumber.includes(".");
      }

      function isAnOperator(x) {
        nonNegativeOperator.includes(x);
      }

      //--check last input--

      //if empty string
      if (prev === "") {
        //if starts with decimal
        if (e === ".") {
          if (endsWithOperator() || checkLastNumberHasDecimal()) {
            return prev;
          }
          return prev + "0" + e;
        }
        //if starts with operators
        if (operators.includes(e)) {
          return prev;
        }
      }

      //if previous display digit is zero - default at reset
      if (prev === "0") {
        if (e === "0") return prev;

        if (/[0-9.]/.test(e)) {
          if (e === ".") {
            if (checkLastNumberHasDecimal()) {
              return prev;
            }
            return "0" + e;
          }
          return e;
        }
      }

      //if last input-- operator
      if (!/[0-9.]/.test(lastInputSymbol)) {
        //if pressing decimal point after an operator
        if (e === ".") return prev + "0" + e;

        if (operators.includes(e) && operators.includes(lastInputSymbol)) {
          if (e === "-" && lastInputSymbol === "-") {
            return prev;
          } else {
            return (
              prev
                .split("")
                .slice(0, prev.length - 1)
                .join("") + e
            );
          }
        }
      }

      //if last input-- number
      if (e === "." && (endsWithOperator() || checkLastNumberHasDecimal())) {
        return prev;
      }

      return prev + e;
    });

    setDisplayAnswer((prev) => {
      const operators = ["*", "/", "-", "+"];
      //function to check if last number string has decimal

      function checkLastNumberHasDecimal() {
        const numbers = prev.split(/[\+\-\*\/]/);
        const lastNumber = numbers[numbers.length - 1];
        return lastNumber.includes(".");
      }

      //--check last input--

      //if first digit is zero or reset state
      if (prev === "0") {
        if (e === "0") return prev;

        if (operators.includes(e)) {
          return prev;
        }

        if (/[1-9.]/.test(e)) {
          if (e === ".") {
            if (checkLastNumberHasDecimal()) {
              return prev;
            }
            return "0" + e;
          }

          return e;
        }
      }

      //when pressing operator
      if (!/[0-9.]/.test(e)) {
        return "0";
      }

      if (/^-?\d+(\.\d*)?$/.test(prev)) {
        if (e === ".") {
          if (checkLastNumberHasDecimal()) {
            return prev;
          }
          return prev + e;
        }

        if (/[0-9]/.test(e)) {
          return prev + e;
        }
      }
    });
  };

  const calculate = () => {
    try {
      const result = new Function("return " + expression)();
      setExpression(result.toString());
      setDisplayAnswer(result.toString());
    } catch (error) {
      if (expression === "" && displayAnswer === "0") {
        return prev;
      }
      setDisplayAnswer("Error");
    }
  };

  return (
    <div>
      <div className="calculator">
        <Display answer={displayAnswer} expression={expression} />
        <Keypad
          ac={clear}
          deletePrev={deletePrev}
          keyPress={keyPress}
          calculate={calculate}
        />
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

function Keypad({ ac, keyPress, deletePrev, calculate }) {
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
        onClick={() => keyPress("/")}
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
      <button id="equals" className="key operator" onClick={calculate}>
        =
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
