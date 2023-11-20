import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList"; // Import the QuestionList component

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;