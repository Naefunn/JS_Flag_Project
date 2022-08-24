import { useState, useEffect } from "react";
import './Quiz.css'


const SouthAmericaQuiz = () => {

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
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/br.svg",
            answerOptions: [
                {answerText: "Brazil", isCorrect: true},
                {answerText: "Argentina", isCorrect: false},
                {answerText: "Colombia", isCorrect: false},
                {answerText: "Chile", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ve.svg",
            answerOptions: [
                {answerText: "Brazil", isCorrect: false},
                {answerText: "Colombia", isCorrect: false},
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
                {answerText: "Colombia", isCorrect: true},
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
        </div>
        <div>
                <div className="message">{message}</div>
                <div class="timer"></div>
        </div>
       <a href="/SouthAmerica/quiz"><button className="quiz-button">Play Again!</button></a> 
    </div>
    
    
    </>
)
};

export default SouthAmericaQuiz;