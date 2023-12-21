import { lectureList } from './lecture-list.js';

function Circle({ size }) {
    return (
        <circle cx="300" cy="180" r={size} stroke="grey"
            stroke-width="1" fillOpacity={0} />
    );
}

export default function Radar() {
    return (
        <svg width={600} height={360}>
            <text x="215" y="15" fontWeight={"bold"}>Content Richness</text>
            <text x="250" y="355" fontWeight={"bold"}>Discussion</text>
            <text x="15" y="170" fontWeight={"bold"}>Quiz</text>
            <text x="15" y="200" fontWeight={"bold"}>Performance</text>
            <text x="460" y="170" fontWeight={"bold"}>Assignment</text>
            <text x="460" y="200" fontWeight={"bold"}>Performance</text>
            <Circle size={30} />
            <Circle size={60} />
            <Circle size={90} />
            <Circle size={120} />
            <Circle size={150} />
            <polygon points="180,180 300,90 390,180 300,240"
                style={{ fill: "#5850EC" }} />
        </svg>
    );
}