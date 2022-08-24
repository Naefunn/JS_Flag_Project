import { useState, useEffect } from "react";
import './Quiz.css'


const AfricaQuiz = () => {

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
            flagImage: "https://flagcdn.com/za.svg",
            answerOptions: [
                {answerText: "Nigeria", isCorrect: false},
                {answerText: "Cameroon", isCorrect: false},
                {answerText: "South Africa", isCorrect: true},
                {answerText: "Senegal", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ng.svg",
            answerOptions: [
                {answerText: "Senegal", isCorrect: false},
                {answerText: "Kenya", isCorrect: false},
                {answerText: "Nigeria", isCorrect: true},
                {answerText: "Ghana", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ma.svg",
            answerOptions: [
                {answerText: "Kenya", isCorrect: false},
                {answerText: "Morocco", isCorrect: true},
                {answerText: "Senegal", isCorrect: false},
                {answerText: "Ghana", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/gh.svg",
            answerOptions: [
                {answerText: "Ghana", isCorrect: true},
                {answerText: "Senegal", isCorrect: false},
                {answerText: "South Africa", isCorrect: false},
                {answerText: "Nigeria", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/sn.svg",
            answerOptions: [
                {answerText: "Ghana", isCorrect: false},
                {answerText: "Kenya", isCorrect: false},
                {answerText: "Cameroon", isCorrect: false},
                {answerText: "Senegal", isCorrect: true}
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
       <a href="/Africa/quiz"><button className="quiz-button">Play Again!</button></a> 

    </div>
    <div className="message">{message}</div>
    
    </>

    // className={(answerOption.isCorrect ? 'quiz-button-right' : 'quiz-button-wrong')}
)
};

export default AfricaQuiz;