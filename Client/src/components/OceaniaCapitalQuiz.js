import { useState, useEffect } from "react";
import './Quiz.css'


const OceaniaCapitalQuiz = () => {

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
            questionText: "What is the capital of Australia?",
            answerOptions: [
                {answerText: "Wellington", isCorrect: false},
                {answerText: "Apia", isCorrect: false},
                {answerText: "Canberra", isCorrect: true},
                {answerText: "Suva", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Fiji?",
            answerOptions: [
                {answerText: "Suva", isCorrect: true},
                {answerText: "Apia", isCorrect: false},
                {answerText: "Honiara", isCorrect: false},
                {answerText: "Port Moresby", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Palau?",
            answerOptions: [
                {answerText: "Honiara", isCorrect: false},
                {answerText: "Ngerulmud", isCorrect: true},
                {answerText: "Yaren", isCorrect: false},
                {answerText: "Canberra", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Samoa?",
            answerOptions: [
                {answerText: "Suva", isCorrect: false},
                {answerText: "Wellington", isCorrect: false},
                {answerText: "Port Moresby", isCorrect: false},
                {answerText: "Apia", isCorrect: true}
            ]
        },
        {
            questionText: "What is the capital of the Tonga?",
            answerOptions: [
                {answerText: "Nukuʻalofa", isCorrect: true},
                {answerText: "Yaren", isCorrect: false},
                {answerText: "Ngerulmud", isCorrect: false},
                {answerText: "Honiara", isCorrect: false}
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
          <div class="timer"></div>
        </div>
       <a href="/Oceania/capitalquiz"><button className="quiz-button">Play Again!</button></a> 

    </div>
    <div className="message">{message}</div>
    
    </>


)
};

export default OceaniaCapitalQuiz;