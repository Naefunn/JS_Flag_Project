import { useState, useEffect } from "react";

const NorthAmericaQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);


    const handleAnswerButtonClick = (answerOption) => {

        if (answerOption){
            setScore(score + 1);
        };

        if (answerOption){
            alert("This is correct");
        } else {
            alert("This is wrong, try again!");
            setCurrentQuestion = currentQuestion
        };
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert('you reached the end of the quiz');
        }
    };


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
        </div>

    </div>
    
    </>
)
};

export default NorthAmericaQuiz;