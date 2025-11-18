import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Quiz Time</h1>
          <p className="text-xl text-gray-600">
            What do you have the most knowledge on?
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/Gaming">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800">
                🎮 Gaming
              </h2>
            </div>
          </Link>

          <Link to="/Coding">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800">
                💻 Coding
              </h2>
            </div>
          </Link>

          <Link to="/Football">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800">
                ⚽ Football
              </h2>
            </div>
          </Link>

          <Link to="/Nigerianhis">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-800">
                Nigerian History
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
