import imgQuizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
    // Skiped answers
    const skipedAnswers = userAnswers.filter((answer) => answer === null);
    // Correct answers
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );

    // % scrores
    const skipAnswersScore = Math.round(
        (skipedAnswers.length / userAnswers.length) * 100
    );
    const correctAnswersScore = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );
    const wrongAnswersScore = 100 - skipAnswersScore - correctAnswersScore;

    return (
        <section id="summary">
            <img src={imgQuizCompleted} alt="image quiz completed" />
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skipAnswersScore}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersScore}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersScore}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className="user-answer">{answer ?? "Skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
