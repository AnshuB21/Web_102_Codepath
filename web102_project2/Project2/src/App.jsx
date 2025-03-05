import { useState } from "react";

import { CardLogic } from "./CardLogic";

function App() {
  return (
    <>
      <center>
        <h1> The ultimate movie quote guesses</h1>
        <h3>How good are you at guessing the movie name? Test it here</h3>
        <p> Number of question : 10</p>
        <div>
          <CardLogic />
        </div>
      </center>
    </>
  );
}

export default App;
