import { data } from "./data.js";
import { Card } from "./Card";
import { useState } from "react";

export const CardLogic = ({
  streak,
  setStreak,
  longestStreak,
  SetLongestStreak,
}) => {
  const [Flipped, setFlipped] = useState(false);
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [guessBg, setGuessBg] = useState("revert");
  var max = 0;

  const AnswerPreview = () => {
    setFlipped(!Flipped);
    console.log(Flipped);
  };
  //Set the next button and the handle the input form params, the button will handle the input text box to be empty again
  const NextQuestion = () => {
    setFlipped(false);
    setCount((prev) => (prev + 1 >= data.length ? 0 : prev + 1));
    setGuess("");
    setGuessBg("revert");
  };

  const PreviousQuestion = () => {
    setFlipped(false);
    setCount((prev) => (prev - 1 < 0 ? data.length - 1 : prev - 1));
    setGuess("");
    setGuessBg("revert");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Flipped == false) {
      if (
        guess.toLowerCase().trim() == data[count].answer.toLowerCase().trim()
      ) {
        setGuessBg("lightgreen");
        setGuess("Correct answer");
        setStreak((prevStreak) => {
          const newStreak = prevStreak + 1;
          // Update the longest streak if newStreak exceeds it
          SetLongestStreak((prevLongest) => Math.max(prevLongest, newStreak));
          return newStreak;
        });
      } else {
        setGuessBg("red");
        setGuess("wrong answer");
        setStreak(0);
      }
    } else {
      setGuess("Flipped! Guessing Disabled!");
      setGuessBg("red");
    }
  };

  return (
    <div className="CardContainer">
      <button onClick={AnswerPreview}>
        <Card
          Flipped={Flipped}
          question={data[count].question}
          answer={data[count].answer}
        />
      </button>
      <div>
        <form style={{ paddingTop: "10px" }} onSubmit={handleSubmit}>
          <label htmlFor="guess">Guess Answer: </label>
          <input
            type="text"
            id="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            style={{ background: guessBg }}
          />
          <input type="submit" className="stylesubmit" />
        </form>
      </div>
      <div className="Buttons">
        <button onClick={PreviousQuestion}>Previous</button>
        <button onClick={NextQuestion}>Next</button>
      </div>
    </div>
  );
};
