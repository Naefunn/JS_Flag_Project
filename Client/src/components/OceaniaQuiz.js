import { useState, useEffect } from "react";

const OceaniaQuiz = () => {

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
            flagImage: "https://flagcdn.com/fj.svg",
            answerOptions: [
                {answerText: "Australia", isCorrect: false},
                {answerText: "New Zealand", isCorrect: false},
                {answerText: "Samoa", isCorrect: false},
                {answerText: "Fiji", isCorrect: true}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/ws.svg",
            answerOptions: [
                {answerText: "Australia", isCorrect: false},
                {answerText: "Tonga", isCorrect: false},
                {answerText: "Samoa", isCorrect: true},
                {answerText: "Fiji", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/mh.svg",
            answerOptions: [
                {answerText: "Australia", isCorrect: false},
                {answerText: "Marshall Islands", isCorrect: true},
                {answerText: "Samoa", isCorrect: false},
                {answerText: "Fiji", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/nz.svg",
            answerOptions: [
                {answerText: "Palau", isCorrect: false},
                {answerText: "New Zealand", isCorrect: true},
                {answerText: "Samoa", isCorrect: false},
                {answerText: "Fiji", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/au.svg",
            answerOptions: [
                {answerText: "Australia", isCorrect: true},
                {answerText: "New Zealand", isCorrect: false},
                {answerText: "Solomon Islands", isCorrect: false},
                {answerText: "Fiji", isCorrect: false}
            ]
        },
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

export default OceaniaQuiz;