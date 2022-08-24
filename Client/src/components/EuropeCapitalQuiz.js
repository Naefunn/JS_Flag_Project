import { useState, useEffect } from "react";
import './Quiz.css'


const EuropeCapitalQuiz = () => {

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
            questionText: "What is the capital of Italy?",
            answerOptions: [
                {answerText: "Berlin", isCorrect: false},
                {answerText: "London", isCorrect: false},
                {answerText: "Rome", isCorrect: true},
                {answerText: "Amsterdam", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of France?",
            answerOptions: [
                {answerText: "Paris", isCorrect: true},
                {answerText: "Madrid", isCorrect: false},
                {answerText: "Lisbon", isCorrect: false},
                {answerText: "London", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Germany?",
            answerOptions: [
                {answerText: "Athens", isCorrect: false},
                {answerText: "Berlin", isCorrect: true},
                {answerText: "Amsterdam", isCorrect: false},
                {answerText: "Lisbon", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Holland?",
            answerOptions: [
                {answerText: "Paris", isCorrect: false},
                {answerText: "Berlin", isCorrect: false},
                {answerText: "Athens", isCorrect: false},
                {answerText: "Amsterdam", isCorrect: true}
            ]
        },
        {
            questionText: "What is the capital of the United Kingdom?",
            answerOptions: [
                {answerText: "London", isCorrect: true},
                {answerText: "Rome", isCorrect: false},
                {answerText: "Berlin", isCorrect: false},
                {answerText: "Madrid", isCorrect: false}
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
       <a href="/Europe/capitalquiz"><button className="quiz-button">Play Again!</button></a> 

    </div>
    
    
    </>


)
};

export default EuropeCapitalQuiz;