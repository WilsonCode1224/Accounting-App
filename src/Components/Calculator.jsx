import "../style/calculator.css";
import { Button, Grid, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { CalculatorContext } from "../context/ForContext";

const Calculator = () => {
  const { result, setResult } = useContext(CalculatorContext);
  const [numA, setNumA] = useState("0"); // 數值1
  const [numB, setNumB] = useState(""); // 數值2
  const [symbol, setSymbol] = useState(""); // 符號

  console.log("result:", result);
  // 按鈕數組
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const addNumber = (number) => {
    if (!symbol) {
      if (numA === "0") {
        setNumA(number);
      } else {
        const newNum = numA + number;
        setNumA(newNum);
      }
    } else {
      // 有符號再向下作
      setNumB(numB + number);
    }
  };

  const calculateResult = () => {
    switch (symbol) {
      case "+":
        setResult(parseFloat(numA) + parseFloat(numB));
        break;
      case "-":
        setResult(parseFloat(numA) - parseFloat(numB));
        break;
      case "*":
        setResult(parseFloat(numA) * parseFloat(numB));
        break;
      case "/":
        setResult(parseFloat(numA) / parseFloat(numB));
        break;
      default:
        // 如果沒有運算符號，或者運算符號不是 +、-、*、/，不做任何操作
        break;
    }
  };

  const addSymbol = (sy) => {
    if (sy === "=") {
      setSymbol(sy);
      calculateResult();
    } else {
      setSymbol(sy);
    }
  };

  const handleClear = () => {
    setNumA("0");
    setNumB("");
    setSymbol("");
    setResult(0);
  };

  const handleDisplay = () => {
    let value = "";

    if (!symbol) {
      value = numA; // ok
    }
    if (symbol === "=") {
      value = symbol;
    }
    if (numA && symbol) {
      value = numB;
    }
    if (numA && numB && symbol === "=") {
      value = result;
    }
    return value;
  };

  return (
    <>
      {"NumA:" + numA} <br />
      {"Symbol:" + symbol} <br />
      {"NumB:" + numB} <br />
      {"Result:" + result}
      <Grid
        sx={{ background: "#00b0ff" }}
        style={{ textAlign: "center" }}
        container
        spacing={2}
      >
        <Grid sx={{ width: "100%" }} item xs={20}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            value={handleDisplay()}
          />
        </Grid>

        {buttons.map((button) => (
          <Grid item xs={3} key={button}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                isNaN(button) ? addSymbol(button) : addNumber(button);
              }}
            >
              {button}
            </Button>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button onClick={handleClear} color="secondary" variant="outlined">
            C
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Calculator;
