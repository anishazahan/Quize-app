import * as Action from '../Redux/resultReducer'

export const PushAnswer = (result)=>async(dispatch)=>{
    try {
        await dispatch(Action.pushUserAction(result));
    } catch (error) {
        console.log(error);
    }
}