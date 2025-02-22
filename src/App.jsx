import Header from "./components/Header/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;


  return (
    <>
      <Header />
      <UserInput userInput= {userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
