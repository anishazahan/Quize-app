import { current } from "@reduxjs/toolkit";

export function attemps_number (result){
    return result.filter(r=>r!== undefined).length;
}

export function earn_points(result,answer,point){
        return result.map((element,i)=> answer[i]=== element).filter(i=> i).map(i=>point).reduce((prev,current)=> prev + current,0 )
}

// .filter(i => i).map(i=>point).reduce((prev,curr)=>prev + current , 0);

export function flagResult (totalPoints,earn_points){
    return (totalPoints * 50/100 < earn_points );
}