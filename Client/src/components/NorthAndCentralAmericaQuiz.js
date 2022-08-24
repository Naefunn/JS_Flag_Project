import { useState, useEffect } from "react";
import './Quiz.css'


const NorthAndCentralAmericaQuiz = () => {

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
            flagImage: "https://flagcdn.com/us.svg",
            answerOptions: [
                {answerText: "USA", isCorrect: true},
                {answerText: "Canada", isCorrect: false},
                {answerText: "Mexico", isCorrect: false},
                {answerText: "Jamaica", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/mx.svg",
            answerOptions: [
                {answerText: "USA", isCorrect: false},
                {answerText: "Canada", isCorrect: false},
                {answerText: "Mexico", isCorrect: true},
                {answerText: "Jamaica", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ca.svg",
            answerOptions: [
                {answerText: "USA", isCorrect: false},
                {answerText: "Canada", isCorrect: true},
                {answerText: "Mexico", isCorrect: false},
                {answerText: "Jamaica", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/bz.svg",
            answerOptions: [
                {answerText: "USA", isCorrect: false},
                {answerText: "Canada", isCorrect: false},
                {answerText: "Belize", isCorrect: true},
                {answerText: "Jamaica", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/sv.svg",
            answerOptions: [
                {answerText: "El Salvador", isCorrect: true},
                {answerText: "Canada", isCorrect: false},
                {answerText: "Mexico", isCorrect: false},
                {answerText: "Jamaica", isCorrect: false}
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
       <a href="/NorthandCentralAmerica/quiz"><button className="quiz-button">Play Again!</button></a> 
    </div>
    <div className="message">{message}</div>
    
    </>
)
};

export default NorthAndCentralAmericaQuiz;