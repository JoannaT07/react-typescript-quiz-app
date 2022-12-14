import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { SelectedCategory } from "../../models/SelectedCategory";
import { Question } from "./Question";
import { CATEGORIES, getCategories } from "../../data/categories";
import { Result } from "./Result";

export const Quiz: React.FC = () => {
  const { category } = useParams<string>();
  const [questions, setQuestions] = useState<SelectedCategory[]>([]);
  const [questionId, setQuestionId] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const correctAnswerIndex = useRef(0);

  useEffect(() => {
    const categoryObj = CATEGORIES.find(
      (categoryObj) => categoryObj.category === category
    );
    if (categoryObj) {
      getCategories(categoryObj?.id).then((res) => setQuestions(res));
    }
  }, [category]);

  useEffect(() => {
    console.log(questionId)
    if (questions?.length && questionId <= 9) {
      let answers: string[] = [...questions[questionId].incorrect_answers];
      correctAnswerIndex.current = Math.floor(Math.random() * 4);
      answers.splice(
        correctAnswerIndex.current,
        0,
        questions[questionId].correct_answer
      );
      console.log("q",questions)
      console.log("a",answers)
      console.log("correct",correctAnswerIndex.current)
      setAnswers(answers);
    }
  }, [questionId, questions]);

  return questions.length ? (
    questionId > 9 ? (
      <Result category={category!} score={score} />
    ) : (
      <div className="quiz-content">
        <div className="quiz-header">
          <span className="selected-category gradient">{category}</span>
          <div className="counter">{`${questionId + 1}/10`}</div>
        </div>
        <Question
          questions={questions}
          questionId={questionId}
          setQuestionId={setQuestionId}
          answers={answers}
          correctAnswerIndex={correctAnswerIndex.current}
          setScore={setScore}
        />
      </div>
    )
  ) : null;
};
