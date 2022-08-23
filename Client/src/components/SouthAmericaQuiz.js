import { useState, useEffect } from "react";
import './Quiz.css'


const SouthAmericaQuiz = () => {

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
       <a href="/SouthAmerica/quiz"><button className="quiz-button">Play Again!</button></a> 
    </div>
    <div className="message">{message}</div>
    
    </>
)
};

export default SouthAmericaQuiz;