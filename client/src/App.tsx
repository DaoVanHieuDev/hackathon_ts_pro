import React from "react";
import SetupQuiz from "./components/SetupQuiz";
import { Route, Routes } from "react-router-dom";
import QuestionDetails from "./components/QuestionDetails";
function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 h-screen">
      <Routes>
        <Route path="/" element={<SetupQuiz />}></Route>
        <Route path="/:id" element={<QuestionDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
