import React, { useState } from "react";

function NewQuestion({ addQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: [],
    correctIndex: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        addQuestion(data);
        setFormData({
          prompt: "",
          answers: [],
          correctIndex: 0,
        });
      });
  };

  // Form input change handlers

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewQuestion;
