import { useState, useEffect } from "react";
import './Quiz.css'


const NorthAmericaCapitalQuiz = () => {

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
            questionText: "What is the capital of the United States?",
            answerOptions: [
                {answerText: "Mexico City", isCorrect: false},
                {answerText: "Ottowa", isCorrect: false},
                {answerText: "Washington, D.C", isCorrect: true},
                {answerText: "San José", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Costa Rica?",
            answerOptions: [
                {answerText: "San José", isCorrect: true},
                {answerText: "Managua", isCorrect: false},
                {answerText: "San Salvador", isCorrect: false},
                {answerText: "Mexico City", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Guatemala?",
            answerOptions: [
                {answerText: "Tegucigalpa", isCorrect: false},
                {answerText: "Guatemala City", isCorrect: true},
                {answerText: "Mexico City", isCorrect: false},
                {answerText: "San José", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Mexico?",
            answerOptions: [
                {answerText: "Belmopan", isCorrect: false},
                {answerText: "Washington, D.C", isCorrect: false},
                {answerText: "Panama City", isCorrect: false},
                {answerText: "Mexico City", isCorrect: true}
            ]
        },
        {
            questionText: "What is the capital of the Belize?",
            answerOptions: [
                {answerText: "Belmopan", isCorrect: true},
                {answerText: "Managua", isCorrect: false},
                {answerText: "San Salvador", isCorrect: false},
                {answerText: "Panama City", isCorrect: false}
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
       <a href="/NorthandCentralAmerica/capitalquiz"><button className="quiz-button">Play Again!</button></a> 

    </div>
    <div className="message">{message}</div>
    
    </>


)
};

export default NorthAmericaCapitalQuiz;