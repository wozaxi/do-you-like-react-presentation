import { Answer } from "../App";

import Yes from "./Yes";
import No from "./No";

type Props = {
  answer: Answer;
  handleTryAgain: () => void;
};

const Result = ({ answer, handleTryAgain }: Props) =>
  answer === "yes" ? <Yes /> : <No handleTryAgain={handleTryAgain} />;

export default Result;
