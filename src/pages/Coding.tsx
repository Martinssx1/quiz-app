import { useLocation } from "react-router-dom";
import { Codingquestions } from "../data/questions/codingquestions/EasyCodingquestions";
import Code from "../data/questions/wholecode.jsx/Code";
import { CodingquestionsMedium } from "../data/questions/codingquestions/MediumCodingQuestion";
import { CodingquestionsHard } from "../data/questions/codingquestions/HardCodingQuestion";

const Coding = () => {
  type difficulty = "Easy" | "Medium" | "Hard";
  const location = useLocation();
  const gamingDifficulty = location.state?.difficulty as difficulty;
  const questionMap = {
    Easy: Codingquestions,
    Medium: CodingquestionsMedium,
    Hard: CodingquestionsHard,
  };
  const difficultyQue = questionMap[gamingDifficulty] || Codingquestions;
  return <Code questions={difficultyQue} />;
};

export default Coding;
