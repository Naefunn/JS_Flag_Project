import { useState } from "react";

const AsiaQuiz = () => {

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
            flagImage: "https://flagcdn.com/jp.svg",
            answerOptions: [
                {answerText: "China", isCorrect: false},
                {answerText: "India", isCorrect: false},
                {answerText: "Japan", isCorrect: true},
                {answerText: "Thailand", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/in.svg",
            answerOptions: [
                {answerText: "China", isCorrect: false},
                {answerText: "South Korea", isCorrect: false},
                {answerText: "India", isCorrect: true},
                {answerText: "Vietnam", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/th.svg",
            answerOptions: [
                {answerText: "India", isCorrect: false},
                {answerText: "Thailand", isCorrect: true},
                {answerText: "Qatar", isCorrect: false},
                {answerText: "Iran", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/qa.svg",
            answerOptions: [
                {answerText: "Qatar", isCorrect: true},
                {answerText: "India", isCorrect: false},
                {answerText: "Pakistand", isCorrect: false},
                {answerText: "Iran", isCorrect: false}
            ]
        },
        {
            questionText: "What country does this flag belong to?",
            flagImage: "https://flagcdn.com/cn.svg",
            answerOptions: [
                {answerText: "India", isCorrect: false},
                {answerText: "South Korea", isCorrect: false},
                {answerText: "Vietnam", isCorrect: false},
                {answerText: "China", isCorrect: true}
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

export default AsiaQuiz;