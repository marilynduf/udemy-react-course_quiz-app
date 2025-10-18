import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const currentQuestion = QUESTIONS[activeQuestionIndex].text;

    function handleOnclick(answer) {
        setUserAnswers((prevState) => [...prevState, answer]);
    }

    const display = QUESTIONS[activeQuestionIndex].answers.map(
        (answer, index) => (
            <li key={index} className="answer">
                <button onClick={() => handleOnclick(answer)} key={answer}>
                    {answer}
                </button>
            </li>
        )
    );

    return (
        <div id="quiz">
            <div id="question">
                <h2>{currentQuestion}</h2>
                <ul id="answers">{display}</ul>
            </div>
        </div>
    );
}
