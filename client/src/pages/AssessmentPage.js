import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const AssessmentPage = () => {
  // State to store assessment questions
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);

  useEffect(() => {
    // Function to fetch assessment questions from backend
    const fetchAssessmentQuestions = async () => {
      try {
        // Make GET request to backend endpoint (/AssessmentPage)
        const response = await axios.get(
          "http://localhost:5000/AssessmentPage"
        );

        // Update state with assessment questions received from backend
        setAssessmentQuestions(response.data);
      } catch (error) {
        console.error("Error fetching assessment questions:", error);
      }
    };

    // Call fetchAssessmentQuestions when component mounts
    fetchAssessmentQuestions();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h1>Assessment Questions</h1>
      <ul>
        {/* Map over assessmentQuestions array and render each question */}
        {assessmentQuestions.map((question, index) => (
          <li key={index}>
            <h2>Question {question.id}</h2>
            <p>{question.question}</p>
            {/* Add additional rendering logic for other question properties */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssessmentPage;
