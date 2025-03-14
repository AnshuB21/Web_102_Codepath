export const Card = ({ question, answer, Flipped }) => {
  return (
    <>
      <div className={Flipped ? "Filpped" : "NotFilpped"}>
        <div className="Question">
          <h3>{question}</h3>
        </div>
        <div className="Answer">
          <h3>{answer}</h3>
        </div>
      </div>
    </>
  );
};
