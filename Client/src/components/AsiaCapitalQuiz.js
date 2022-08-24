import { useState, useEffect } from "react";
import './Quiz.css'


const AsiaCapitalQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [nextQuestion, setNextQuestion] = useState(currentQuestion + 1)
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("")

    const [time, setTime] = useState(15) //remaining time
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
            setMessage('You reached the end of the quiz!');
            setCurrentQuestion(4)
        }
    };

    const timer = useEffect(() => {
        if (time === 0 ) {
            setMessage(`Time out! You scored ${score}`)

        }
        if (time > 0) setTimeout(() => setTime(time - 1), 1000)
      }, [time]);

    const questions = [
        {
            questionText: "What is the capital of China?",
            answerOptions: [
                {answerText: "Tokyo", isCorrect: false},
                {answerText: "Tehran", isCorrect: false},
                {answerText: "Beijing", isCorrect: true},
                {answerText: "Hanoi", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Japan?",
            answerOptions: [
                {answerText: "Tokyo", isCorrect: true},
                {answerText: "Seoul", isCorrect: false},
                {answerText: "Islamabad", isCorrect: false},
                {answerText: "Bangkok", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Pakistan?",
            answerOptions: [
                {answerText: "Tehran", isCorrect: false},
                {answerText: "Islamabad", isCorrect: true},
                {answerText: "Amman", isCorrect: false},
                {answerText: "Doha", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of South Korea?",
            answerOptions: [
                {answerText: "Tokyo", isCorrect: false},
                {answerText: "Beijing", isCorrect: false},
                {answerText: "Bangkok", isCorrect: false},
                {answerText: "Seoul", isCorrect: true}
            ]
        },
        {
            questionText: "What is the capital of Iran?",
            answerOptions: [
                {answerText: "Tehran", isCorrect: true},
                {answerText: "Islamabad", isCorrect: false},
                {answerText: "Doha", isCorrect: false},
                {answerText: "Tokyo", isCorrect: false}
            ]
        }
    ];

return (
    <>
    <div className="quiz-section">
        <div className="score">Score: {score}</div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
        <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} className="quiz-button">{answerOption.answerText}</button>
        ))}
        </div>
        <div>
                <div className="message">{message}</div>
                <div class="timer"></div>
        </div>
       <a href="/Asia/capitalquiz"><button className="quiz-button">Play Again!</button></a> 

    </div>
    
    
    </>


)
};

export default AsiaCapitalQuiz;