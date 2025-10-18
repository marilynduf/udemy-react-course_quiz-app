import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizDone = activeQuestionIndex === QUESTIONS.length;

    if (quizDone) {
        return <section>Reasult</section>;
    }

    function handleOnclick(answer) {
        setUserAnswers((prevState) => [...prevState, answer]);
    }

    const answers = QUESTIONS[activeQuestionIndex].answers.map(
        (answer, index) => (
            <li key={index} className="answer">
                <button onClick={() => handleOnclick(answer)} key={answer}>
                    {answer}
                </button>
            </li>
        )
    );

    const currentQuestion = QUESTIONS[activeQuestionIndex].text;
    const suffledAnswers = [...answers].sort(() => Math.random() - 0.5);

    return (
        <>
            <section id="quiz">
                <div id="question">
                    <h2>{currentQuestion}</h2>
                    <ul id="answers">{suffledAnswers}</ul>
                </div>
            </section>
        </>
    );
}
