import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { getCookie } from "../helpers/cookies";

type Props = {
  closeResultsList: () => void;
};

export const ResultsList: React.FC<Props> = ({ closeResultsList }) => {
  const cookies = getCookie("result");

  return ReactDOM.createPortal(
    <div className="modal-shadow">
      <div className="result-list-content">
        <div className="flex">
          <AiOutlineClose onClick={closeResultsList} className="close-btn" />
          <h3 className="gradient">Your results</h3>
        </div>
        {cookies ? (
          <ol className="result-list">
            {cookies
              ?.reverse()
              .slice(0, 5)
              .map((result) => (
                <li>
                  <span style={{ textTransform: "capitalize" }}>
                    {result.category}
                  </span>
                  <span style={{ fontWeight: "bold" }}>{`${
                    result.score * 10
                  }%`}</span>
                </li>
              ))}
          </ol>
        ) : (
          <p id="result-msg">History is empty</p>
        )}
      </div>
    </div>,
    document.getElementById("portal")!
  );
};
