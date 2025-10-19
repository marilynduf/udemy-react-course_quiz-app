import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import imgQuizCompleted from "../assets/quiz-complete.png";
import ProgressBar from "./progressBar";

const TIMER = 15000;

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizDone = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers((prevState) => [...prevState, answer]);
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizDone) {
        return (
            <section id="summary">
                <img src={imgQuizCompleted} alt="image quiz completed" />
                <h2>Quiz completed</h2>
            </section>
        );
    }

    const currentQuestion = QUESTIONS[activeQuestionIndex].text;
    const answers = [...QUESTIONS[activeQuestionIndex].answers]; // copie profonde du tableau
    const suffledAnswers = answers.sort(() => Math.random() - 0.5); // rendu aleatoire des réponses
    const mappedAnswers = suffledAnswers.map((answer) => (
        <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
        </li>
    ));

    return (
        <>
            <section id="quiz">
                <div id="question">
                    <ProgressBar
                        key={activeQuestionIndex}
                        timer={TIMER}
                        onTimeout={handleSkipAnswer}
                    />
                    <h2>{currentQuestion}</h2>
                    <ul id="answers">{mappedAnswers}</ul>
                </div>
            </section>
        </>
    );
}
