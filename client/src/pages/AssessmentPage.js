import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import CodeEditor from "./CodeEditor";

const AssessmentPage = () => {
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    const fetchAssessmentQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/AssessmentPage"
        );
        setAssessmentQuestions(response.data);
        setLoading(false);
      } catch (error) {
        setError(
          "Error fetching assessment questions. Please try again later."
        );
        setLoading(false);
      }
    };

    fetchAssessmentQuestions();
  }, []);

  const handleInputChange = (questionId, value) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("http://localhost:5000/submit", {
        answers: userAnswers,
      });
      console.log("Response from backend:", response.data);
      // Clear userAnswers state or handle success state as needed
    } catch (error) {
      console.error("Error submitting answers:", error);
      // Handle error state
    }
  };

  return (
    <div>
      <Header />
      <h1>Assessment Questions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Use onSubmit event to prevent page reload */}
          <ul>
            {assessmentQuestions.map((question, index) => (
              <li key={question.id}>
                <h2>Question {index + 1}</h2>
                {question.type === "Code" ? (
                  <div>
                    <p>{question.question}</p>
                    <CodeEditor index={question.id} />
                  </div>
                ) : question.type === "MCQ" ? (
                  <div>
                    <p>{question.question}</p>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                      {question.options.map((option, optionIndex) => (
                        <li key={optionIndex}>
                          <input
                            style={{ width: 10 }}
                            type="radio"
                            id={`mcq_${index}_${optionIndex}`}
                            name={`mcq_${index}`}
                            value={option}
                            onChange={(e) =>
                              handleInputChange(question.id, e.target.value)
                            }
                          />
                          <label htmlFor={`mcq_${index}_${optionIndex}`}>
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : question.type === "Structured" ? (
                  <div>
                    <p>{question.question}</p>
                    <textarea
                      placeholder="Enter your answer here..."
                      rows={10}
                      cols={80}
                      onChange={(e) =>
                        handleInputChange(question.id, e.target.value)
                      }
                    />
                  </div>
                ) : (
                  <p>{question.question}</p>
                )}
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button> {/* Change type to "submit" */}
        </form>
      )}
    </div>
  );
};

export default AssessmentPage;
