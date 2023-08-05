function App() {
  const [displayAnswer, setDisplayAnswer] = React.useState("0");
  const [expression, setExpression] = React.useState("");

  //functions for Keys
  const handleClear = () => {
    setDisplayAnswer("0");
    setExpression("");
  };

  const handleDelete = () => {
    setExpression((prev) => {
      if (prev === "" && prev === null) {
        return;
      }
      return prev.slice(0, prev.length - 1);
    });

    setDisplayAnswer((prev) => {
      if (prev === "" && prev === null) {
        return;
      }
      return prev.slice(0, prev.length - 1);
    });
  };

  const handleKeyPress = (e) => {
    setExpression((prev) => {
      let lastInputSymbol = prev[prev.length - 1];
      const operators = ["*", "/", "-", "+"];

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

      //if previous display digit is zero (at default/reset)
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

      //if last input symbol-- operator
      if (operators.includes(lastInputSymbol)) {
        //if pressing decimal point after an operator
        if (e === ".") return prev + "0" + e;

        // Remove extra operators if they are entered consecutively (except negative sign)
        if (operators.includes(e)) {
          if (e === "-" && lastInputSymbol === "-") {
            return prev;
          } else if (e === "-" && !prev.endsWith("-")) {
            // Handle negative sign after other operator
            return prev + e;
          } else if (
            prev[prev.length - 2] !== "-" &&
            lastInputSymbol === "-" &&
            e !== "-"
          ) {
            return prev.slice(0, prev.length - 2) + e;
          } else {
            return prev.slice(0, prev.length - 1) + e;
          }
        }
      }

      //if last input symbol-- number
      if (e === "." && checkLastNumberHasDecimal()) {
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

  const handleCalculate = () => {
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
          handleClear={handleClear}
          handleDelete={handleDelete}
          handleKeyPress={handleKeyPress}
          handleCalculate={handleCalculate}
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

function Keypad({
  handleClear,
  handleKeyPress,
  handleDelete,
  handleCalculate,
}) {
  return (
    <div className="keypad">
      <button id="clear" className="key ac" onClick={handleClear}>
        AC
      </button>
      <button className="key delete" onClick={handleDelete}>
        ←
      </button>
      <button
        id="multiply"
        className="key operator"
        onClick={() => handleKeyPress("*")}
      >
        x
      </button>

      <button id="seven" className="key" onClick={() => handleKeyPress("7")}>
        7
      </button>
      <button id="eight" className="key" onClick={() => handleKeyPress("8")}>
        8
      </button>
      <button id="nine" className="key" onClick={() => handleKeyPress("9")}>
        9
      </button>
      <button
        id="divide"
        className="key operator"
        onClick={() => handleKeyPress("/")}
      >
        ÷
      </button>

      <button id="four" className="key" onClick={() => handleKeyPress("4")}>
        4
      </button>
      <button id="five" className="key" onClick={() => handleKeyPress("5")}>
        5
      </button>
      <button id="six" className="key" onClick={() => handleKeyPress("6")}>
        6
      </button>
      <button
        id="subtract"
        className="key operator"
        onClick={() => handleKeyPress("-")}
      >
        -
      </button>

      <button id="one" className="key" onClick={() => handleKeyPress("1")}>
        1
      </button>
      <button id="two" className="key" onClick={() => handleKeyPress("2")}>
        2
      </button>
      <button id="three" className="key" onClick={() => handleKeyPress("3")}>
        3
      </button>
      <button
        id="add"
        className="key operator"
        onClick={() => handleKeyPress("+")}
      >
        +
      </button>

      <button
        id="zero"
        className="key zero"
        onClick={() => handleKeyPress("0")}
      >
        0
      </button>
      <button id="decimal" className="key" onClick={() => handleKeyPress(".")}>
        .
      </button>
      <button id="equals" className="key operator" onClick={handleCalculate}>
        =
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
