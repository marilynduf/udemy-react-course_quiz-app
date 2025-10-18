import imgLogo from "../assets/quiz-logo.png";

export default function Header() {
    return (
        <header>
            <img src={imgLogo} alt="quiz logo" />
            <h1>React quiz</h1>
        </header>
    );
}
