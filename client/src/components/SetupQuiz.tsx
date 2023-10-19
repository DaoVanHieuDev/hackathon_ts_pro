import React, { useEffect, useState } from "react";
import { Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SetupQuiz() {
  const base_URL = "http://localhost:3000/api/v1";
  const [number, setNumber] = useState(1);
  const [category, setCategory] = useState([]);
  const [category_id, setCategory_id] = useState<number>();
  const [listQuest, setListQuest] = useState([]);
  const [level, setLevel] = useState<number>();
  const navigate = useNavigate();
  const findAllQuestion = () => {
    axios
      .get(`${base_URL}/questions`)
      .then((res) => setListQuest(res.data))
      .catch((err) => console.log(err));
  };
  const findAllCategory = () => {
    axios
      .get(`${base_URL}/categories`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: any = parseInt(e.target.value, 10);
    if (
      !isNaN(inputValue) &&
      inputValue > 0 &&
      inputValue <= listQuest.length
    ) {
      setNumber(inputValue);
    }
  };

  const handleChangeLevel = (e: any) => {
    setLevel(Number(e.target.value));
  };
  const handleNavigate = () => {
    const renderQuestion = {
      category_id: category_id,
      number: number,
      category: category,
      level: level,
    };
    if (category_id) {
      localStorage.setItem("question", JSON.stringify(renderQuestion));
      navigate(`/${category_id}`);
    }
  };

  useEffect(() => {
    findAllQuestion();
    findAllCategory();
  }, []);
  return (
    <div className="flex flex-col w-96 border-2 p-5 shadow bg-white">
      <h3 className="font-bold text-3xl my-2">Setup Quiz</h3>
      <div className="flex flex-col my-2">
        <label>Number of Question</label>
        <Input
          type="number"
          value={number}
          onChange={handleChangeNumber}
        ></Input>
      </div>
      <div className="flex flex-col my-2">
        <label>Category</label>
        <select
          className="border-gray border-2 rounded-md py-2"
          onChange={(e) => setCategory_id(Number(e.target.value))}
        >
          {category.length > 0 &&
            category.map((cu: any) => (
              <option value={cu.category_id}>{cu.name}</option>
            ))}
        </select>
      </div>
      <div className="flex flex-col my-2">
        <label>Difficulty</label>
        <select
          className="border-gray border-2 rounded-md py-2"
          onChange={handleChangeLevel}
        >
          <option value={1}>easy</option>
          <option value={2}>medium</option>
          <option value={3}>hard</option>
        </select>
      </div>
      <button className="bg-orange-400 my-4" onClick={() => handleNavigate()}>
        Start
      </button>
    </div>
  );
}

export default SetupQuiz;
