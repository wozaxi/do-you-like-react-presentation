import { useState } from "react";
import "./App.css";

import Question from "./components/Question";
import Result from "./components/Result";

const App = () => {
  const [answer, setAnswer] = useState<Answer | null>(null);

  const onChoose = (answer: Answer) => setAnswer(answer);

  const handleTryAgain = () => setAnswer(null);

  return answer ? (
    <Result answer={answer} handleTryAgain={handleTryAgain} />
  ) : (
    <Question handleChoose={onChoose} />
  );
};

export default App;

export type Answer = "yes" | "no";
