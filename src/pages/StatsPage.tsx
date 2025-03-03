import React from "react";
import { useParams } from "react-router-dom"
import { Subjects } from "../data/subjects";
import { Subject } from "../models/Subject";

const StatsPage: React.FC =() =>{
    const {englishName} = useParams<{englishName: string}>();

    const subject = Subjects.find((sbj)=> sbj.englishName === englishName)

    if(!subject) {
        return <h2>존재하지 않는 실험체입니다.</h2>;
    }

    return(
        <div style = {{textAlign:"center",padding:"20px"}}>
            <h1> {subject.name}</h1>
            <img src = {`/icons/${subject.icon}`} alt = {subject.name} style = {{width: "100px", height: "100px"}}/>
            <p>{subject.name} 의 통계</p>
        </div>
    );
};

export default StatsPage;