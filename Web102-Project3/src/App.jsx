import { useState } from "react";
import { CardLogic } from "./CardLogic";

function App() {
  //pass the streak as a prop to the component , it used it to manange in its file
  const [streak, setStreak] = useState(0);
  const [longestStreak, SetLongestStreak] = useState(0);
  return (
    <>
      <center>
        <h1>The Ultimate Movie Quote Guesses</h1>
        <h3>How good are you at guessing the movie name? Test it here</h3>
        <p>Number of questions: 10</p>
        <h2>🔥 Current Streak: {streak}</h2>

        <h3>Longest Streak : {longestStreak}</h3>
        <div style={{ paddingTop: "10px" }}>
          <CardLogic
            streak={streak}
            setStreak={setStreak}
            longestStreak={longestStreak}
            SetLongestStreak={SetLongestStreak}
          />
        </div>
      </center>
    </>
  );
}

export default App;
