import React, { useState } from "react";
// import styled from "styled-components";
// import { CounterApp } from "./CounterApp";
// import { Data } from "./Data";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function Content() {
  const [vals, setVals] = useState([
    { id: 1, label: "Write something .....", checked: true },
  ]);
  const [item, setItem] = useState("");

  const [isEdit,setisEdit] = useState(false);

  const [currentEleId,setcurrentEleId] = useState(null) 

  // let checkHandle = (id) => {
  //   let newChecked = vals.map((EachVal) => {
  //     if (EachVal.id === id) {
  //       return { ...EachVal, checked: !EachVal.checked };
  //     } else {
  //       return EachVal;
  //     }
  //   });
  //   setVals(newChecked);
  // };

  let deleteHandle = (id) => {
    let filterEle = vals.filter((val) => val.id !== id).map((val,index) => {return {...val,id : index+1}});
    setVals(filterEle);
  };

  let updateHandle = (id)=>{
    setisEdit(true)
    setcurrentEleId(id)
    let labelVal = vals.find((val)=>{
      return val.id === id
    })
    setItem(labelVal.label)

  }

  let addOrUpdate = ()=>{
  if(isEdit){
    let updateVal = vals.map((val)=>{
      return val.id === currentEleId ? {...val,label : item} : val
    })
      setVals(updateVal)
      setcurrentEleId(null)
      setisEdit(false)
      setItem("")
  }
  else{

    let newEle = [...vals,{id : vals.length+1,label : item,checked : false}]
     setVals(newEle)
     setItem("")
  }
  }

  return (
    <main>
      <h1>What's there for today..?</h1>
      <div>
        <input
          type="text"
          name="texts"
          id=""
          placeholder="Enter texts"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button onClick={()=>{addOrUpdate()}}>{isEdit ? "Save" : "Add"}</button>
      </div>
      <ul>
        {vals.map((val) => {
          return (
            <li key={val.id}>
              {/* <input
                type="checkbox"
                checked={val.checked}
                onChange={() => {
                  checkHandle(val.id);
                }}
              /> */}
             <div className ="icons"> <FaEdit id="edit" role="button" tabIndex={0} onClick={()=>{updateHandle(val.id)}}/>
              <RiDeleteBinLine
                role="button"
                tabIndex={0}
                onClick={() => {
                  deleteHandle(val.id);
                }}
                id="bin"
              /></div>
              <hr/>
              
             <div className="label"> <label>{val.label} </label></div>
              
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Content;
