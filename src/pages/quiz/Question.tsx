import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedCategory } from "../../models/SelectedCategory";

type Props = {
  questions?: SelectedCategory[];
  questionId: number;
  setQuestionId: (arg: number) => void;
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
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const navigate = useNavigate();

  const addClassName = (index: number) => {
    if (index === correctAnswerIndex) return "right";
    if (index === selectedAnswer) return "wrong";
    if (index !== correctAnswerIndex) return "inactive";
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
      <span
        className="question"
        dangerouslySetInnerHTML={{ __html: questions[questionId].question }}
      />
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={selectedAnswer ? () => {} : () => handleAnswerClick(index)}
            className={`answer-btn ${selectedAnswer === undefined ? "hover" : addClassName(index)}`}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></button>
        ))}
      </div>
      <button onClick={() => navigate("/")} className="quit-btn">
        Quit
      </button>
    </div>
  ) : null;
};
