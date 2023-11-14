import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../constants/counterType"

export const incrementCount = ()=>{
    return{
        type:INCREMENT_COUNT,
        // payload:increment
    }
}
export const decrementCount = (decrement)=>{
    return{
        type:DECREMENT_COUNT,
        payload:decrement
    }
}
export const resetCount = (reset)=>{
    return{
        type:RESET_COUNT,
        payload:reset
    }
}