import React from "react";
import { Matrix } from "./components/Matrix";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { WavyBackground } from "./components/ui/wavy-background";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <TextGenerateEffect
          words="3X3 Matrix Grid"
          className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 "
        />

        <Matrix />
      </WavyBackground>
    </div>
  );
}

export default App;
