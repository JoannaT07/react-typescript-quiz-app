import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedCategory } from "../../models/SelectedCategory";

type Props = {
  questions?: SelectedCategory[];
  questionId: number;
  setQuestionId: React.Dispatch<React.SetStateAction<number>>;
  answers: string[];
  correctAnswerIndex: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const Question: React.FC<Props> = ({
  questions,
  questionId,
  setQuestionId,
  answers,
  correctAnswerIndex,
  setScore,
}) => {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState<any>();

  const addClassName = (index: number) => {
    if (index === correctAnswerIndex) return "right";
    if (index === selectedAnswer) return "wrong";
  };

  const handleAnswerClick = (index: number) => {
    
      setSelectedAnswer(index);
      if (index === correctAnswerIndex) setScore((prevstate) => prevstate + 1);
      setTimeout(() => {
      setQuestionId(questionId + 1);
      setSelectedAnswer(undefined);
    }, 1000);
  };

  return questions?.length ? (
    <div className="question-body">
      <span className="question">{questions[questionId].question}</span>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={selectedAnswer ? () => {} : () => handleAnswerClick(index)}
            className={`answer-btn ${!selectedAnswer ? "hover" : ""} 
              // ${selectedAnswer === undefined ? "" : addClassName(index)}`}
          >
            {answer}
          </button>
        ))}
      </div>
        <button onClick={() => navigate("/")} className="quit-btn">
          Quit
        </button>
    </div>
  ) : null;
};
