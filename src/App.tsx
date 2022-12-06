import "../src/style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./pages/menu/Menu";
import { Quiz } from "./pages/quiz/Quiz";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Menu />}
          />
          <Route path="/:category" element={<Quiz />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
