import { useState, useEffect } from "react";
import "./App.css";
import ColourBox from "./components/color-box";
import ColourButton from "./components/button";
import Result from "./components/result";
import { getRandomColours } from "./lib/getColours";
import { shuffle } from "./lib/shuffle";

function App() {
  const [correctColour, setCorrectColour] = useState("");
  const [coloursList, setColoursList] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const colours = getRandomColours();
    setCorrectColour(colours[0]);
    setColoursList(shuffle(colours));
    setCorrect(false);
  }, [correct]);

  const checkResult = (colour: string): void => {
    if (colour == correctColour) {
      setResult(true);
      setCorrect(true);
      return;
    }

    return setResult(false);
  };

  return (
    <>
      <ColourBox colour={correctColour} />
      <div className="button-container">
        {coloursList.map((colour) => (
          <ColourButton
            key={colour}
            colourString={colour}
            checkResult={checkResult}
          />
        ))}
      </div>
      <Result result={result} />
    </>
  );
}

export default App;
