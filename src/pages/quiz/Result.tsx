import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsList } from "../../components/ResultsList";
import { getCookie, setCookie } from "../../helpers/cookies";

type Props = {
  score: number;
  category: string;
};

export const Result: React.FC<Props> = ({ category, score }) => {
  const [showResultsList, setShowResultsList] = useState(false);
  const navigateToMenu = useNavigate();

  useEffect(() => {
    console.log(category, score);
    const cookieValue = getCookie("result");
    if (cookieValue) {
      setCookie("result", [...cookieValue, { category, score }]);
    } else {
      setCookie("result", [{ category, score }]);
    }
    const cookieValue2 = getCookie("result");

    console.log(cookieValue2);
  }, [score]);

  return (
    <div className="result-content">
      <h2>Your score:</h2>
      <span className=" percent gradient">{`${score * 10}%`}</span>
      <br />
      <span className="points">{score}/10</span>

      <button onClick={() => setShowResultsList(true)} className="btn">
        Show result list
      </button>
      {showResultsList && (
        <ResultsList closeResultsList={() => setShowResultsList(false)} />
      )}
      <button onClick={() => navigateToMenu("/")} className="btn back-btn">
        Back to start
      </button>
    </div>
  );
};
