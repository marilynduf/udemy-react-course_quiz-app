import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

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
        return <Summary userAnswers={userAnswers} />;
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
