
import { addCounter, reduceCounter, addValue,subtractValue,multiplyValue,divideValue } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import style from "./Counter.module.css";
import { useState } from "react";

const Counter = () => {
  const counter = useSelector((state)=>state.counter);
  const dispatch= useDispatch(); 
  const [value,setValue]=useState(null);

  const handleAdd = () => {
    dispatch(addCounter(1));
  };

  const handleReduce = () => {
    dispatch(reduceCounter(1));
  };

  const handleAddValue=()=>{
    dispatch(addValue(Number(value)));
  }
  const handleSubValue=()=>{
    dispatch(subtractValue(value));
  }
  const handleMulValue=()=>{
    dispatch(multiplyValue(value));
  }
  const handleDivideValue=()=>{
    dispatch(divideValue(value));
  }
  return (
    <>
      <h1> React Redux - calculator </h1>
      <div className={style.box1}>
        <h1>{counter}</h1>
      </div>
      <div>
      <button onClick={handleAdd}>increment</button>
      </div>
      <div>
        <button onClick={handleReduce}>decrement</button>
      </div>
      <div className={style.box2}>
        <div>
          <input value={value} type="number" placeholder="VALUE" onChange={(e)=>setValue(e.target.value)}/>
        </div>
        <div>
        <div>
          <button onClick={handleAddValue}>add</button>
          <button onClick={handleMulValue}>multiply</button>
        </div>
        <div>
          <button onClick={handleSubValue}>subtract</button>
          <button onClick={handleDivideValue}>divide</button>
        </div>
        </div>
      </div>
    </>
  );
};

export { Counter };
