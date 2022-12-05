import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { getCookie } from "../helpers/cookies";

type Props = {
  // showResultsList: boolean;
  closeResultsList: () => void;
};

export const ResultsList: React.FC<Props> = ({closeResultsList}) => {
  // if (!showResultsList) return null;
  const cookies = getCookie('result');

  return ReactDOM.createPortal(
    <div className="modal-shadow">
      <div className="result-list-content">
        <div className="flex">
          <AiOutlineClose onClick={closeResultsList} className="close-btn" />
          <h3 className="gradient">Your results</h3>
        </div>
        <p id="result-msg">History is empty</p>
        <ol className="history-list">
          {cookies?.map(result =>
            <li>{result.category}<span style={{fontWeight: "bold"}}>{`${result.score*10}%`}</span></li>
          )}
        </ol>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};
