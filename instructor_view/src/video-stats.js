import { questionList } from './question-list.js';

function Bar({ questionId, xPos, height, fill }) {
    const listQuestions = questionList.map(question =>
        <div key={question.id}>
            {question.time}
        </div>
    );
    return (
        <rect
            x={xPos}
            y="10"
            width="70"
            height={height}
            fill={fill}
            onClick={() => window.alert("Showing timestamp " + (questionId + 1))}
        />
    );
}

function Histogram() {
    return (
        <svg width={700} height={140}>
            <Bar questionId={0} xPos={10} height={20} fill={"#948CFF"} />
            <Bar questionId={1} xPos={80} height={40} fill={"#948CFF"} />
            <Bar questionId={2} xPos={150} height={80} fill={"#5850EC"} />
            <Bar questionId={3} xPos={220} height={40} fill={"#948CFF"} />
            <Bar questionId={4} xPos={290} height={110} fill={"#5850EC"} />
            <Bar questionId={5} xPos={360} height={60} fill={"#948CFF"} />
            <Bar questionId={6} xPos={420} height={140} fill={"#5850EC"} />
            <Bar questionId={7} xPos={490} height={70} fill={"#5850EC"} />
            <Bar questionId={8} xPos={560} height={30} fill={"#948CFF"} />
            <Bar questionId={9} xPos={630} height={20} fill={"#948CFF"} />
        </svg>
    );
}

export default function Statistics() {
    return (
        <Histogram />
    );
}