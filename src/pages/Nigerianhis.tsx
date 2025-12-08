import Code from "../data/questions/wholecode.jsx/Code";
import { EasyNigerianquestions } from "../data/questions/Nigerianquestion/EasyNigerianquestions";
import { NigerianhistoryquestionsHard } from "../data/questions/Nigerianquestion/HardNigerianQuestion";
import { useLocation } from "react-router-dom";
import { NigerianhistoryquestionsMedium } from "../data/questions/Nigerianquestion/MediumNigerianQuestion";

const Nigerianhis = () => {
  type difficulty = "Easy" | "Medium" | "Hard";
  const location = useLocation();
  const gamingDifficulty = location.state?.difficulty as difficulty;
  const questionMap = {
    Easy: EasyNigerianquestions,
    Medium: NigerianhistoryquestionsMedium,
    Hard: NigerianhistoryquestionsHard,
  };
  const difficultyQue = questionMap[gamingDifficulty] || EasyNigerianquestions;
  return <Code questions={difficultyQue} />;
};

export default Nigerianhis;
