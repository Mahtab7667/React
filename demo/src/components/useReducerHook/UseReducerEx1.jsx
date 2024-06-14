import React, { useReducer } from 'react'

const UseReducerEx1 = () => {
    let initialState={
        count:0,
        count1:10
    }

    let reducerFunc=(state,action)=>{
        // console.log(state);
        // console.log(state.count);
        // console.log(action);

        switch (action.type) { // switch case always tere inside reducerFunction
            case "increment": 
            return {/*...state,*/count: state.count+1}; // creting new object and override initial state object

            // return state.count+1; 
            break;

            case "decrement":
                return {count:state.count-1};
                break;

                // case "prasadsir":
                //     return {count1:state.count1+5,count:state.count+2};
                //     break;
        
            default:
                break;
        }
    }

    let [state,dispatch]=useReducer(reducerFunc,initialState);
   
  return (
      <>
    <div>UseReducerEx1</div>

    <h1>state: {state.count}</h1>
    <button onClick={()=>{dispatch({type:"increment"})}}>increment</button>
    <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>

    {/* <h1>count1:{state.count1}</h1>
    <button onClick={()=>{dispatch({type:"prasadsir"})}}>count1 button</button> */}
      </>
  )
}

export default UseReducerEx1