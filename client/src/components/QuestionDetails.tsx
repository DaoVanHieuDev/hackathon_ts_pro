import axios from "axios";
import React, { useEffect, useState } from "react";

function QuestionDetails() {
  const base_URL = "http://localhost:3000/api/v1";
  const [question, setQuestion] = useState<any>([]);
  const { category_id } = JSON.parse(
    localStorage.getItem("question") as string
  );
  const findAllQuestion = () => {
    axios
      .get(`${base_URL}/questions/${category_id}/answers`)
      .then((res) => setQuestion(res.data))
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    if (category_id) {
      findAllQuestion();
    }
  }, []);
  return (
    <div className="flex flex-col w-1/2 border-2 p-5 shadow bg-white">
      <p className="text-right text-green-400 my-3">Correct Answer:2/7</p>
      <h1 className="text-center text-2xl font-semibold my-2">
        {question.length > 0 && question[0].content}
      </h1>
      {question.length > 0 &&
        question.map((qu: any) => (
          <div className="flex flex-col justify-center items-center">
            <button className="bg-blue-300 border w-3/4 my-2">
              {qu.contentAns}
            </button>
          </div>
        ))}
      <div className="flex flex-col justify-end items-end">
        <button className="bg-orange-400 my-4 w-1/4">Next Questions</button>
      </div>
    </div>
  );
}

export default QuestionDetails;
