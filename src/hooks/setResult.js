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