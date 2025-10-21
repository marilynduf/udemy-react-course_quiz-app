import imgQuizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
    console.log(userAnswers);

    return (
        <section id="summary">
            <img src={imgQuizCompleted} alt="image quiz completed" />
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">10%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className="user-answer">
                                {!answer ? "Not answered" : answer}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
