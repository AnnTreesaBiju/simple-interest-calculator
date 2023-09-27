import { useState } from 'react';
import './App.css';
import { TextField, Stack, Button } from "@mui/material";

function App() {
  // to asses contents in textbox we use state
  // if the contents in textbox has no relation we use multiple state 
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  // validate state
  const [isPrincipleValid, setPrincipleIsValid] = useState(true)
  const [isRateValid, setRateIsValid] = useState(true)
  const [isYearValid, setYearIsValid] = useState(true)

  // to chechk the validation or not
  const validateInput = (e) => {
    const { value, name } = e.target
    // !!:- js property used to change expression to boolen :- true, flase
    // regular Expresion:- /^[0-9]+$/:- use check string
    if (!!value.match(/^[0-9]+$/)) {
      // valid expression
      if (name === "principle") {
        // to see the value in text box
        setPrinciple(value)
        setPrincipleIsValid(true)
      } else if (name === "rate") {
        setRate(value)
        setRateIsValid(true)
      } else {
        setYear(value)
        setYearIsValid(true)
      }
    }
    else {
      // Invalid expression
      if (name === "principle") {
        setPrinciple(value)
        // to see *Invalid Input
        setPrincipleIsValid(false)
      } else if (name === "rate") {
        setRate(value)
        setRateIsValid(false)
      } else {
        setYear(value)
        setYearIsValid(false)
      }

    }
  }



  // submit btn fun
  const handleSubmit = (e) => {
    // to prevent refres the page 
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the Form")
    } else {
      setInterest(principle * rate * year / 100)
    }
  }
  // reset btn function
  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setPrincipleIsValid(true)
    setRateIsValid(true)  
    setYearIsValid(true)
  }
  // to chechk the validation
  return (
    <div style={{ height: "100vh" }} className="d-flex w-100 justify-content-center align-items-center bg-black">
      <div style={{ width: "30%" }} className=" bg-light p-5 rounded">
        <div className='heading'>
          <h3>Simple Calculator</h3>
          <p>Calcuate your simple interest easily</p>
        </div>
        <div style={{ height: "150px" }} className="intrest-card d-flex flex-column w-100 justify-content-center align-items-center bg-info rounded text-light shadow">
          <h1>₹ {" "} {interest}</h1>
          <p className='fw-bold'>Total Simple Intrest</p>

        </div>
        {/* for submit form :- onSumbit */}
        {/* and type of the button should be submit */}
        <form onSubmit={handleSubmit}>
          <div>
            <TextField style={{ width: "100%", marginTop: "30Px" }} id="outlined-basic" label="₹ Principle Amout" variant="outlined" value={principle || ""} name='principle' onChange={(e) => validateInput(e)} />
          </div>
          {/* validation checking */}
          {
            // ! :- not , flase ,not true
            !isPrincipleValid &&
            <div className='mt-2 text-danger' > *Invalid Input</div>
          }
          <div>
            <TextField style={{ width: "100%", marginTop: "20Px" }} id="outlined-basic2" label="Rate of intrest (p a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e) => validateInput(e)} />
          </div>
          {/* validation checking */}
          {
            // ! :- not , flase ,not true
            !isRateValid &&
            <div className='mt-2 text-danger' > *Invalid Input</div>
          }



          <div>
            <TextField style={{ width: "100%", marginTop: "20Px" }} id="outlined-basic3" label="Time Period (Yr)" variant="outlined" value={year || ""} name='year' onChange={(e) => validateInput(e)} />
          </div>
          {/* validation checking */}
          {
            // ! :- not , flase ,not true
            !isYearValid &&
            <div className='mt-2 text-danger' > *Invalid Input</div>
          }
          <div className="btn-cls mt-3">
            <Stack direction="row" spacing={2}>
              <Button type='submit' style={{ width: "200px", height: "50px" }}  variant="contained" disabled={isPrincipleValid && isRateValid && isYearValid?false:true }>CALCULATE</Button>
              <Button onClick={handleReset} style={{ width: "200px", height: "50px" }} variant="outlined">RESET</Button>

            </Stack>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
