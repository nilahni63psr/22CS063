import React from "react";
import { useParams } from "react-router-dom";


export default function PrimeCheck() {
    const isPrime=(num)=>{
        if(num<=1)
        return false;
    for(let i=0;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        {
            return false;
        }
        return true
    }
    const PrimeCheck=()=>{
        const {number}=useParams();
        const num=parseInt(number);
        const result=isPrime(num);

    }
  return (
    <div>
      <h1>Prime Number Checker</h1>
      <p>{num} is {result? "a prime number":"not a prime number"}</p>
    </div>
  )
}

}