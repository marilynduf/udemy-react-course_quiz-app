import { useRef } from "react";
export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    onSelect,
}) {
    const suffledAnswers = useRef();
    if (!suffledAnswers.current) {
        suffledAnswers.current = [...answers]; // copie profonde du tableau
        suffledAnswers.current.sort(() => Math.random() - 0.5); // rendu aleatoire des réponses
    }

    const mappedAnswers = suffledAnswers.current.map((answer) => {
        const isSelected = answer === selectedAnswer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
            cssClass = "selected";
        }
        if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
        ) {
            cssClass = answerState;
        }

        return (
            <li key={answer} className="answer">
                <button
                    className={cssClass}
                    onClick={() => onSelect(answer)}
                    disabled={answerState !== ""}
                >
                    {answer}
                </button>
            </li>
        );
    });
    return <ul id="answers">{mappedAnswers}</ul>;
}
