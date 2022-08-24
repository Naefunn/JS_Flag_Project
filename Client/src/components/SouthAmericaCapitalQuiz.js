import { useState, useEffect } from "react";
import './Quiz.css'


const SouthAmericaCapitalQuiz = () => {

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
            questionText: "What is the capital of Colombia?",
            answerOptions: [
                {answerText: "Buenos Aires", isCorrect: false},
                {answerText: "Lima", isCorrect: false},
                {answerText: "Bogotá", isCorrect: true},
                {answerText: "Brasília", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Peru?",
            answerOptions: [
                {answerText: "Lima", isCorrect: true},
                {answerText: "Santiago", isCorrect: false},
                {answerText: "Brasilia", isCorrect: false},
                {answerText: "Bogotá", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Argentina?",
            answerOptions: [
                {answerText: "Lima", isCorrect: false},
                {answerText: "Buenos Aires", isCorrect: true},
                {answerText: "Santiago", isCorrect: false},
                {answerText: "Caracas", isCorrect: false}
            ]
        },
        {
            questionText: "What is the capital of Venezuela?",
            answerOptions: [
                {answerText: "Quito", isCorrect: false},
                {answerText: "La Paz", isCorrect: false},
                {answerText: "Lima", isCorrect: false},
                {answerText: "Caracas", isCorrect: true}
            ]
        },
        {
            questionText: "What is the capital of the Ecuador?",
            answerOptions: [
                {answerText: "Quito", isCorrect: true},
                {answerText: "Montevideo", isCorrect: false},
                {answerText: "Asunción", isCorrect: false},
                {answerText: "Bogotá", isCorrect: false}
            ]
        }
    ];

return (
    <>
    <section>
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
       <a href="/SouthAmerica/capitalquiz"><button className="quiz-button">Play Again!</button></a> 

    </div>
    </section>
    
    
    </>


)
};

export default SouthAmericaCapitalQuiz;