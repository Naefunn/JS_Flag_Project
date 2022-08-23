import { useState, useEffect } from "react";
import './Quiz.css'


const EuropeQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [nextQuestion, setNextQuestion] = useState(currentQuestion + 1)
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("")

    const [time, setTime] = useState(20) //remaining time
    const [active, setActive] = useState(false)


    const handleAnswerButtonClick = (answerOption) => {

        if (answerOption){
            setScore(score + 1);
            setMessage("Well Done!")
            
        } else {
            setMessage("Not quite! Try again!")
            setCurrentQuestion = currentQuestion
            
        };

        
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setMessage('you reached the end of the quiz');
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
          <div class="timer"></div>
        </div>
       <a href="/Europe/quiz"><button className="quiz-button">Play Again!</button></a> 
    </div>
    <div className="message">{message}</div>
    
    </>
)
};

export default EuropeQuiz;
