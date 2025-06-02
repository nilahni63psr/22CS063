import React, { useState } from 'react';
import PrimeCheck from './PrimeCheck';
import { NavLink } from 'react-router-dom';
export default function TestForm() {
  const [input, setInput] = useState('e');
  const [number, setNumber] = useState('');
  if(input=='p')
  {
       <NavLink to="/primecheck"></NavLink>
  }
  if(input=='e')
    {
         <NavLink to="/evencheck"></NavLink>
    }

  return (
    <div style={{ padding: '20px' }}>
      <form>
        <center>
        <label htmlFor="input">Select type:</label><br />
        <select
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '5px', marginBottom: '10px' }}
        >
          <option value="e">Even</option>
          <option value="p">Prime</option>
          <option value="f">Fibo</option>
          <option value="r">Random</option>

        </select><br />

        <label htmlFor="number">Enter number:</label><br />
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ padding: '5px', marginBottom: '10px', display: 'block' }}
        /><br />

        <button type="submit" style={{ padding: '5px 10px' }}>Submit</button>
        </center>
      </form>
    </div>
  );
}
