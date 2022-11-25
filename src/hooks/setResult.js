import { postServerData } from '../helper/Helper';
import * as Action from '../Redux/resultReducer'

export const PushAnswer = (result)=>async(dispatch)=>{
    try {
        await dispatch(Action.pushUserAction(result));
    } catch (error) {
        console.log(error);
    }
}

export const updateResult = (index)=> async(dispatch)=>{

    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error);
    }
}

//---------insert user data----

export const usePublishedResult = (resultData)=>{
    const {result ,username} = resultData;
    (async ()=>{
    try {
        if(result !== [] && !username) throw new Error("Cound't get result")
        await postServerData (`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,resultData,data=>data)
     } catch (error) {
        console.log(error); 
    }
    })();
}


