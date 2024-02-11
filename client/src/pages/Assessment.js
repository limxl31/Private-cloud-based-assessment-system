import React from "react";
import axios from "axios";
//display assessment
const Assessment = () => {
  //function to send get request to retrieve and display assessment questions
  function getAssessment() {
    const payload = {
      student_id: 1234,
      answers: [
        {
          id: 1,
          answer: "a",
        },
        {
          id: 2,
          answer: "hello",
        },
      ],
    };
    //http get request to display page
    axios.post(`http://localhost:5000/submit`, payload).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
  //submit assessment with data by post request
  function handleSubmit() {
    const payload = {
      student_id: 1234,
      answers: [
        {
          id: 1,
          answer: "a",
        },
        {
          id: 2,
          answer: "hello",
        },
      ],
    };
    axios.post(`http://localhost:5000/submit`, payload).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
  return (
    <div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Assessment;
