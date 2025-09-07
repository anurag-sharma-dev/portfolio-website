import React from "react";
import GlobeBackground from "./components/GlobeBackground";

function App() {
  return (
    <GlobeBackground>
      <div className="flex flex-col items-center justify-center h-screen text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🌍 Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl text-amber-500">
          I am Anurag Sharma — Full Stack Develop
        </p>
      </div>
    </GlobeBackground>
  );
}

export default App;
