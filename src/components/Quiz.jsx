import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import imgQuizCompleted from "../assets/quiz-complete.png";
import Question from "./Question";

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

    return (
        <>
            <section id="quiz">
                <Question
                    key={activeQuestionIndex}
                    questionIndex={activeQuestionIndex}
                    onSelectAnswers={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                ></Question>
            </section>
        </>
    );
}
