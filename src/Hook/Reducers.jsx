import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useReducer } from "react";

// function handleCartReducer(state, action) {
//   if (action.type === "add") {
//     console.log("add is running");
//     return {
//       cartItem: state.cartItem + 1,
//       age: state.age,
//     };
//   }
//   if (action.type === "remove") {
//     console.log("remove is running");
//     return {
//       cartItem: state.cartItem - 1,
//       age: state.age,
//     };
//   }
// }
function handleCartReducer(state) {
  switch (action.type) {
    case "add": {
      console.log("add is running");
      return {
        cartItem: state.cartItem + 1,
        age: state.age,
      };
    }
    case "remove": {
      console.log("remove is running");
      return {
        cartItem: state.cartItem - 1,
        age: state.age,
      };
    }
   
  }
}

const Reducers = () => {
    const [age,setAge] = useState(null)
  const [state, dispatch] = useReducer(handleCartReducer, {
    age: 42,
    cartItem: 0,
  });
  console.log("initial states", state);
  return (
    <div className="m-10">
      <h1>{state.cartItem}</h1>
      <h1>{state.age}</h1>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
        className="border-2 m-5"
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "remove" });
        }}
        className="border-2 m-5"
      >
        remove
      </button>
      <input type= "text" onChange={(e)=>setAge(e.target.value)}  placeholder="enter age" />
      <button onClick={()=>{dispatch({type:"changeAge",payload:age})}}>change Age</button>
    </div>
  );
};

export default Reducers;
