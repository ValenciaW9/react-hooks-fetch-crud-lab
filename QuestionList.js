import React from "react";

function QuestionList({ questions, deleteQuestion, updateQuestion }) {
  //
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then(() => deleteQuestion(id))
      .catch((error) => console.log(error));
  };

  const handleDropdownChange = (id, value) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => updateQuestion(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.prompt}</p>
          {/* Other question details */}
          <button onClick={() => handleDelete(question.id)}>Delete</button>
          <select
            value={question.correctIndex}
            onChange={(e) =>
              handleDropdownChange(question.id, parseInt(e.target.value))
            }
          >
            {/* Dropdown options */}
          </select>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;