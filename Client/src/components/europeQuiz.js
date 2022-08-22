import { useState, useEffect } from "react";

const EuropeQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);


    const handleAnswerButtonClick = (answerOption) => {

        if (answerOption){
            setScore(score + 1);
        };

        if (answerOption){
            alert("This is correct");
        } else {
            alert("This is wrong, try again!");
            setCurrentQuestion = currentQuestion
        };
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz');
        }
    };


    const questions = [
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/gb.svg",
            answerOptions: [
                {answerText: "France", isCorrect: false},
                {answerText: "Germany", isCorrect: false},
                {answerText: "United Kingdom", isCorrect: true},
                {answerText: "Italy", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/es.svg",
            answerOptions: [
                {answerText: "France", isCorrect: false},
                {answerText: "Germany", isCorrect: false},
                {answerText: "Spain", isCorrect: true},
                {answerText: "Italy", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/de.svg",
            answerOptions: [
                {answerText: "Holland", isCorrect: false},
                {answerText: "Germany", isCorrect: true},
                {answerText: "Portugal", isCorrect: false},
                {answerText: "France", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/fr.svg",
            answerOptions: [
                {answerText: "France", isCorrect: true},
                {answerText: "Germany", isCorrect: false},
                {answerText: "United Kingdom", isCorrect: false},
                {answerText: "Italy", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/nl.svg",
            answerOptions: [
                {answerText: "Holland", isCorrect: true},
                {answerText: "Germany", isCorrect: false},
                {answerText: "United Kingdom", isCorrect: false},
                {answerText: "Italy", isCorrect: false}
            ]
        }
    ]

return (
    <>
    <div className="quiz-section">
        <div className="score">Score: {score}</div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
        <img src={questions[currentQuestion].flagImage} className="question-image"/>
        <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} className="quiz-button">{answerOption.answerText}</button>
        ))}
        </div>

    </div>
    
    </>
)
};

export default EuropeQuiz;