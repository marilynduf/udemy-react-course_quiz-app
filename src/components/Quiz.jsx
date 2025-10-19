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

    const currentQuestion = QUESTIONS[activeQuestionIndex].text;
    const answers = [...QUESTIONS[activeQuestionIndex].answers]; // copie profonde du tableau
    const suffledAnswers = answers.sort(() => Math.random() - 0.5); // rendu aleatoire des réponses
    const mappedAnswers = suffledAnswers.map((answer, index) => (
        <li key={index} className="answer">
            <button onClick={() => handleOnclick(answer)} key={answer}>
                {answer}
            </button>
        </li>
    ));

    return (
        <>
            <section id="quiz">
                <div id="question">
                    <h2>{currentQuestion}</h2>
                    <ul id="answers">{mappedAnswers}</ul>
                </div>
            </section>
        </>
    );
}
