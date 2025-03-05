import { data } from "./data.js";
import { Card } from "./Card";
import { useState } from "react";
export const CardLogic = () => {
  const [Filpped, setFilpped] = useState(false);
  const [count, setCount] = useState(0);

  const AnswerPreview = () => {
    setFilpped(!Filpped);
  };
  const NextQuestion = () => {
    setFilpped(false);
    setCount(count + 1 >= data.length - 1 ? 0 : count + 1);
  };
  const PreviousQuestion = () => {
    setFilpped(false);
    setCount(count - 1 < 0 ? data.length - 1 : count - 1);
  };
  return (
    <>
      <div className="CardContainer">
        <button onClick={AnswerPreview}>
          <Card
            Filpped={Filpped}
            question={data[count].question}
            answer={data[count].answer}
          />
        </button>
        <div className="Buttons">
          <button onClick={NextQuestion}> Next</button>
          <button onClick={PreviousQuestion}>Previous</button>
        </div>
      </div>
    </>
  );
};
