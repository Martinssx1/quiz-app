import { useState, useEffect } from "react";
import { Formatted } from "../time/time";
import { useNavigate } from "react-router-dom";
import type { Questions } from "../Questions";

interface quizprops {
  questions: Questions[];
}

function Code({ questions }: quizprops) {
  const [selectedItem, setSelectedItem] = useState("");
  const [active, setactive] = useState(true);
  const [count, setCount] = useState(() => {
    const savedscore = localStorage.getItem("score");
    return savedscore ? Number(savedscore) : 0;
  });
  const [timesUp, setTimesUp] = useState(false);

  const [remainingTime, setRemainingTime] = useState(() => {
    const savedtime = localStorage.getItem("timer");
    return savedtime ? Number(savedtime) : 300;
  });
  const navigate = useNavigate();

  const [currentindex, setcurrentindex] = useState(() => {
    const savedindex = localStorage.getItem("index");
    return savedindex ? Number(savedindex) : 0;
  });

  useEffect(() => {
    localStorage.setItem("index", String(currentindex));
    localStorage.setItem("timer", String(remainingTime));
    localStorage.setItem("score", String(count));
  }, [currentindex, remainingTime, count]);

  function next() {
    if (currentindex < questions.length - 1) {
      if (questions[currentindex].answer === selectedItem) {
        setCount((prev) => prev + 1);
      }
      setcurrentindex((Prev) => Prev + 1);
      setSelectedItem("");
    }
  }

  const indexquestions = questions[currentindex];

  function rightwrong(_e: React.MouseEvent, item: string) {
    setSelectedItem(item);
  }
  useEffect(() => {
    if (!active) return;

    const id = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === 0) {
          setactive(false);
          setTimesUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [active]);

  function finish() {
    if (questions[currentindex].answer === selectedItem) {
      setCount((prev) => prev + 1);
    }
    setactive(false);
    setTimesUp(true);
  }

  function home() {
    navigate("/");
    localStorage.removeItem("timer");
    localStorage.removeItem("index");
    localStorage.removeItem("score");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        {active && (
          <>
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                  Question {currentindex + 1} of {questions.length}
                </span>
                <span> {Formatted(remainingTime)}</span>
                <span>Score: {count}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentindex + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {indexquestions.question}
              </h2>

              <div className="space-y-3">
                {indexquestions.options.map((item, i) => (
                  <div
                    key={i}
                    onClick={(e) => rightwrong(e, item)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedItem === item
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          selectedItem === item
                            ? "border-blue-600 bg-blue-600"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedItem === item && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={home}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Exit Quiz
              </button>
              {currentindex < questions.length - 1 ? (
                <button
                  onClick={next}
                  disabled={!selectedItem}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedItem
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next Question →
                </button>
              ) : (
                <button
                  onClick={finish}
                  disabled={!selectedItem}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedItem
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Finish Quiz ✓
                </button>
              )}
            </div>
          </>
        )}
        {timesUp && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-6">
              {count >= 8 ? "🎉" : count >= 5 ? "👍" : "📚"}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h1>
            <div className="text-6xl font-bold text-blue-600 mb-6">
              {count}/{questions.length}
            </div>
            <p className="text-xl text-gray-600 mb-8">
              {count >= 8
                ? "Outstanding! You're a gaming expert! 🏆"
                : count >= 5
                ? "Good job! You know your games! 👏"
                : "Keep playing and learning! 💪"}
            </p>
            <button
              onClick={home}
              className="px-8 py-3 bg-blue-600  text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Code;
