import { GamingquestionsEasy } from "../data/questions/Gamingquestion/EasyGamingquestions";
import Code from "../data/questions/wholecode.jsx/Code";
import { MediumGamingQuestions } from "../data/questions/Gamingquestion/MediumGamingQuestions";
import { GamingquestionsHard } from "../data/questions/Gamingquestion/HardGamingQuestion";
import { useLocation } from "react-router-dom";
const Gaming = () => {
  type difficulty = "Easy" | "Medium" | "Hard";
  const location = useLocation();
  const gamingDifficulty = location.state?.difficulty as difficulty;
  const questionMap = {
    Easy: GamingquestionsEasy,
    Medium: MediumGamingQuestions,
    Hard: GamingquestionsHard,
  };
  const difficultyQue = questionMap[gamingDifficulty] || GamingquestionsEasy;
  return <Code questions={difficultyQue} />;
};

export default Gaming;
