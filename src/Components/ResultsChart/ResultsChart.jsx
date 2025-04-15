import React from 'react';
import { Area, AreaChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

    const resultData = [
        {
          "student_id": 1,
          "name": "Alice",
            "physics": 5,
            "chemistry": 50,
            "math": 78
        },
        {
          "student_id": 2,
          "name": "Bob",
            "physics": 10,
            "chemistry": 48,
            "math": 91
        },
        {
          "student_id": 3,
          "name": "Charlie",
            "physics": 5,
            "chemistry": 10,
            "math": 80
        },
        {
          "student_id": 4,
          "name": "David",
            "physics": 88,
            "chemistry": 86,
            "math": 92
        },
        {
          "student_id": 5,
          "name": "Eva",
            "physics": 95,
            "chemistry": 91,
            "math": 93
        },
        {
          "student_id": 6,
          "name": "Frank",
            "physics": 80,
            "chemistry": 78,
            "math": 85
        },
        {
          "student_id": 7,
          "name": "Grace",
            "physics": 91,
            "chemistry": 94,
            "math": 90
        },
        {
          "student_id": 8,
          "name": "Hank",
            "physics": 70,
            "chemistry": 72,
            "math": 75
        },
        {
          "student_id": 9,
          "name": "Ivy",
            "physics": 77,
            "chemistry": 80,
            "math": 78
        },
        {
          "student_id": 10,
          "name": "Jack",
            "physics": 89,
            "chemistry": 87,
            "math": 90
        }
      ]
      
      const areaChartData = [
        { month: "January", math: 85, physics: 80, chemistry: 33 },
        { month: "February", math: 8, physics: 83, chemistry: 99 },
        { month: "March", math: 40, physics: 55, chemistry: 45 },
        { month: "April", math: 77, physics: 12, chemistry: 56 },
        { month: "May", math: 64, physics: 22, chemistry: 14 }
      ];


      const gradeData = [
        { name: "A+", value: 8 },
        { name: "A", value: 12 },
        { name: "B", value: 7 },
        { name: "C", value: 3 },
        { name: "F", value: 1 }
      ];
      
const ResultsChart = () => {
    return (
        <div>

        <LineChart width={900} height={500} data={resultData}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
                <Line dataKey="math"></Line> 
                <Line dataKey={'chemistry'}></Line>
                <Line dataKey={'physics'}></Line>
                <Tooltip></Tooltip>
        </LineChart>
        
        <AreaChart width={900} height={500} data={areaChartData}>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
            <Area dataKey={'math'} stroke='red'></Area>
            <Area dataKey={'chemistry'} stroke='yellow'></Area>
            <Area dataKey={'physics'} stroke='blue'></Area>
            <Tooltip></Tooltip>
        </AreaChart>

        <PieChart width={900} height={600} >
        <Pie dataKey={'value'} data={gradeData} cx={"50%"} cy={"50%"} outerRadius={60} fill="#8884d8"></Pie>
        <Tooltip></Tooltip>
        </PieChart>
        </div>
    );
};

export default ResultsChart;