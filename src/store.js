import { createStore } from "redux";

let initialState = {
    counter : 0
}


let reducer = (state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT" :
            return { ...state, counter: state.counter + 1}

        case "DECREMENT" :
            return { ...state, counter: state.counter - 1}
        
        case "RESET" :
            return {...state, counter: state.counter = 0}

        default :
            return state
    }
}


let store = createStore(reducer)

export default store;

// console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})