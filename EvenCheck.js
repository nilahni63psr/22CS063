import React from 'react'
import {useParams} from 'react-router-dom'
export default function EvenCheck() {
const isEven=(num)=>num%2==0;
const EvenCheck=()=>{
  const {number}=useParams();
  const num=parseInt(number);
  const result=isEven(num);
}
  return (
    <div>
      <h1>Even Number Checker</h1>
      <p>{num} is {result?"Even number":"not an even number"}</p>
    </div>
  )
}
