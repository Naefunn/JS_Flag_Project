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
    <div>{score}</div>
    <div className='question-text'>{questions[currentQuestion].questionText}</div>
    <img src={questions[currentQuestion].flagImage} className="question-image"/>
    <div className='answer-section'>
	{questions[currentQuestion].answerOptions.map((answerOption, index) => (
		<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	))}
</div>
    
    </>
)
};

export default AsiaQuiz;