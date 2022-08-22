import { useState, useEffect } from "react";
import './Quiz.css';

const SouthAmericaQuiz = () => {

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
            flagImage: "https://flagcdn.com/br.svg",
            answerOptions: [
                {answerText: "Brazil", isCorrect: true},
                {answerText: "Argentina", isCorrect: false},
                {answerText: "Columbia", isCorrect: false},
                {answerText: "Chile", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ve.svg",
            answerOptions: [
                {answerText: "Brazil", isCorrect: false},
                {answerText: "Columbia", isCorrect: false},
                {answerText: "Venezuela", isCorrect: true},
                {answerText: "Chile", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/pe.svg",
            answerOptions: [
                {answerText: "Brazil", isCorrect: false},
                {answerText: "Argentina", isCorrect: false},
                {answerText: "Peru", isCorrect: true},
                {answerText: "Venezuela", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/co.svg",
            answerOptions: [
                {answerText: "Columbia", isCorrect: true},
                {answerText: "Argentina", isCorrect: false},
                {answerText: "Ecuador", isCorrect: false},
                {answerText: "Chile", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ar.svg",
            answerOptions: [
                {answerText: "Paraguay", isCorrect: false},
                {answerText: "Argentina", isCorrect: true},
                {answerText: "Ecuador", isCorrect: false},
                {answerText: "Chile", isCorrect: false}
            ]
        }
    ]

return (
    <>
    <div>{score}</div>
    <div className="quiz-section">
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
        <img src={questions[currentQuestion].flagImage} className="question-image"/>
        <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
        </div>

    </div>
    
    </>
)
};

export default SouthAmericaQuiz;