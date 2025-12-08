import Code from "../data/questions/wholecode.jsx/Code";
import { EasyFootballquestions } from "../data/questions/Footballquestion/EasyFootballquestions";
import { FootballquestionsMedium } from "../data/questions/Footballquestion/MediumFootballQuestion";
import { FootballquestionsHard } from "../data/questions/Footballquestion/HardFootballQuestions";
import { useLocation } from "react-router-dom";
const Football = () => {
  type difficulty = "Easy" | "Medium" | "Hard";
  const location = useLocation();
  const gamingDifficulty = location.state?.difficulty as difficulty;
  const questionMap = {
    Easy: EasyFootballquestions,
    Medium: FootballquestionsMedium,
    Hard: FootballquestionsHard,
  };
  const difficultyQue = questionMap[gamingDifficulty] || EasyFootballquestions;
  return <Code questions={difficultyQue} />;
};

export default Football;
