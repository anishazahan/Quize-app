import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attemps_number (result){
    return result.filter(r=>r!== undefined).length;
}

export function earn_points(result,answer,point){
    console.log(result);
        return  result.map((element,i)=> answer[i]=== element).filter(i=> i).map(i=>point).reduce((prev,current)=> prev + current ,0 )

}

// .filter(i => i).map(i=>point).reduce((prev,curr)=>prev + current , 0);

export function flagResult (totalPoints,earn_points){
    return (totalPoints * 50/100 < earn_points );
}

//-----------check user auth--------

export function CheckUserExist({children}){
    const auth = useSelector(state=>state.result.userId)
    return auth ? children : <Navigate to='/' replace={true}></Navigate>
}

// ///-----get server data---------

export async function getServerData(url,callback){
  const data = await (await axios.get(url,
    {
        headers :{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Method": "GET"
        }
    }
    
    ))?.data;
 return callback ? callback(data) : data;
}

// ///-----post server data---------

export async function postServerData(url,result,callback){
    const data = await (await axios.post(url,result,
    {
        headers :{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin-Method": "POST"
        }
    })
    )?.data;
   return callback ? callback(data) : data;
  }

