import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPodium } from "react-icons/io";
import { CATEGORIES } from "../../data/categories";
import { ResultsList } from "../../components/ResultsList";

export const Menu: React.FC = () => {
  const [showResultsList, setShowResultsList] = useState(false);
  let navigateToQuiz = useNavigate();

  const handleCategoryClick = (e: React.MouseEvent) => {
    navigateToQuiz(`/${e.currentTarget.id}`);
  };

  return (
    <div className="menu-content">
      <div className="header">
        <span className="icon">
          <IoMdPodium onClick={() => setShowResultsList(true)} className="gi-icon" />
          {showResultsList && (
            <ResultsList closeResultsList={() => setShowResultsList(false)} />
          )}
        </span>
        <h1 className="gradient">QuizApp</h1>
      </div>
      <div className="category-container">
        <h3>Select a category</h3>
        <ul className="category-list">
          {CATEGORIES.map((category) => {
            return (
              <li
                className="btn btn-category"
                onClick={handleCategoryClick}
                id={category.category}
                value={category.id}
              >
                {category.category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
