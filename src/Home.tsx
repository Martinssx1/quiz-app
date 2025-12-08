import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Themebutton from "./Theme/Themebutton";

function Home() {
  type Sections = "gaming" | "coding" | "football" | "nigeria";
  const [show, setShow] = useState({
    gaming: false,
    coding: false,
    football: false,
    nigeria: false,
  });
  const navigate = useNavigate();

  function showGame(section: Sections) {
    setShow((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }
  return (
    <div className="min-h-screen  bg-white  dark:bg-gray-900 flex  text-gray-600 dark:text-gray-100 items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold ">Quiz Time</h1>
          <Themebutton />

          <p className="text-xl ">What do you have the most knowledge on?</p>
        </div>

        <div className="space-y-4   ">
          <div
            className="questionscontainer"
            onClick={() => showGame("gaming")}
          >
            <h2 className="text-2xl font-semibold">🎮 Gaming</h2>

            <div
              className={`
         transition-all duration-500
        ${
          show.gaming
            ? "scale-y-100 opacity-100 mt-3 "
            : "scale-y-0 h-0 opacity-0 mt-0"
        }
      `}
            >
              <div className="containerdiff">
                <div
                  className="btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/Gaming", { state: { difficulty: "Easy" } });
                  }}
                >
                  Easy
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Gaming", { state: { difficulty: "Medium" } })
                  }
                >
                  Medium
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Gaming", { state: { difficulty: "Hard" } })
                  }
                >
                  Hard
                </div>
              </div>
            </div>
          </div>
          <div
            className="questionscontainer"
            onClick={() => showGame("coding")}
          >
            <h2 className="text-2xl font-semibold ">💻 Coding</h2>
            <div
              className={`transition-all duration-500
            ${
              show.coding
                ? "scale-y-100 opacity-100 mt-3 "
                : "scale-y-0 h-0 opacity-0 mt-0"
            }
            `}
            >
              <div className="containerdiff">
                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Coding", { state: { difficulty: "Easy" } })
                  }
                >
                  Easy
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Coding", { state: { difficulty: "Medium" } })
                  }
                >
                  Medium
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Coding", { state: { difficulty: "Hard" } })
                  }
                >
                  Hard
                </div>
              </div>
            </div>
          </div>

          <div
            className="questionscontainer"
            onClick={() => showGame("football")}
          >
            <h2 className="text-2xl font-semibold ">⚽ Football</h2>
            <div
              className={`transition-all duration-500
            ${
              show.football
                ? "scale-y-100 opacity-100 mt-3 "
                : "scale-y-0 h-0 opacity-0 mt-0"
            }
            `}
            >
              <div className="containerdiff">
                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Football", { state: { difficulty: "Easy" } })
                  }
                >
                  Easy
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Football", { state: { difficulty: "Medium" } })
                  }
                >
                  Medium
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Football", { state: { difficulty: "Hard" } })
                  }
                >
                  Hard
                </div>
              </div>
            </div>
          </div>

          <div
            className="questionscontainer"
            onClick={() => showGame("nigeria")}
          >
            <h2 className="text-2xl font-semibold ">Nigerian History</h2>
            <div
              className={`transition-all duration-500
            ${
              show.nigeria
                ? "scale-y-100 opacity-100 mt-3 "
                : "scale-y-0 h-0 opacity-0 mt-0"
            }
            `}
            >
              <div className="containerdiff">
                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Nigerianhis", { state: { difficulty: "Easy" } })
                  }
                >
                  Easy
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Nigerianhis", {
                      state: { difficulty: "Medium" },
                    })
                  }
                >
                  Medium
                </div>

                <div
                  className="btn"
                  onClick={() =>
                    navigate("/Nigerianhis", { state: { difficulty: "Hard" } })
                  }
                >
                  Hard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
