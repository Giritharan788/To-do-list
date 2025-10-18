import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  color: violet;
  height: 50px;
  background-color: grey;
  font-size: 20px;
`;

function LoadingComp(){
  return (
   <p>Loding...</p>
  )
}
function SuccessComp(){
  return (
   <p>Success ✌️</p>
  )
}
function ErrorComp(){
  return (
   <p>Error 🤯</p>
  )
}



export const CounterApp = () => {
  function numforState() {
    return 0;
  }

  let [count, setCount] = useState(numforState);
  const [data,setData] = useState("success")

  function increase() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function decrease() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
    console.log(count);
  }
  
  // let message;
  // let remaining = 10 - count;
  
  // if(count < 10)
  // {
  //   message = (
  //     <div>
  //       <h3> You have clicked {count} times </h3>
  //       <p>You still have {remaining} clicks to unlock reward</p>
  //     </div>
  //   );
  // }
  // else if(count === 10){
  //    message = (
  //     <div>
  //       <h3> You have clicked {count} times </h3>
  //       <p>You have unlocked a reward</p>
  //     </div>
  //   );

  // }
  // else if(count < 20){
  //   message = (
  //     <div>
  //       <h3> You have clicked {count} times </h3>
  //       <p>keep going to unlock all rewards</p>
  //     </div>
  //   );


  // }
  // else{
  //   message = (
  //      <div>
  //       <h3> You have clicked {count} times </h3>
  //       <p>You unlocked all rewards and you are a click master now</p>
  //     </div>
      
  //   )
  // }

  function dispComp(){
    switch(data){
      case "loading" : return <LoadingComp/>;
      break;
      case "success" : return <SuccessComp/>;
      break
      case "error" : return <ErrorComp/>;
    }
  }


  




  return (
    <div style={{textAlign: "center"}}>
      <h1>Click to Unlock Rewards 😁 - {count}</h1>
      <Button onClick={increase}>Click me</Button>
      {dispComp()}

      {/* {count < 10 ? (
        <p> Click more to unlock your reward </p>
      ) : (
        <p> You have unlocked a reward 😍</p>
      )}
        
      {
        count >= 20 && <p>You have became a click master</p>
      } */}
    {/* {
      message
    } */}
      

    
    </div>
  );
}
