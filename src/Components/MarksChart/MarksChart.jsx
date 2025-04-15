import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
const MarksChart = ({MarksPromise}) => {

    const MarksDataRes = use(MarksPromise)
    
    const MarksData = MarksDataRes.data

    const marksChartData = MarksData.map(studentData => {
        const student = {
            id:studentData.student_id,
            name:studentData.name,
            physics:studentData.marks.physics,
            chemistry:studentData.marks.chemistry,
            math:studentData.marks.math

        }

        const avg = (student.physics+student.math + student.chemistry) /3
        student.avg = avg;
        return student
    })

    console.log(marksChartData);
    
    return (
        <div>
            <BarChart width={900} height={500} data={marksChartData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"avg"} fill='green' stroke='crimson'></Bar>
                <Bar dataKey={"physics"} fill='yellow' stroke='crimson'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarksChart;