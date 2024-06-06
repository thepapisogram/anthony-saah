/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from 'react'

import '@/app/styles/projects/calculator.css'
import BackLink from '@/app/components/universal/BackLink';

export default function page() {

  const [screen, setScreen] = useState('');
  const [lastSymbol, setLastSymbol] = useState('');

  // Backspace & Clear
  const backSpace = () => {
    if (screen.length >= 1) setScreen(screen.slice(0, -1))
  }
  const clear = () => {
    setLastSymbol('')
    setScreen('')
  }

  // 0 - 9
  const insNum = (num) => {
    setScreen(`${screen}${num}`)
  }
  // .
  const insPoint = () => {
    if (screen == '') setScreen('0.');
    else if (lastSymbol == "." && screen.endsWith('.')) console.log('err: . is last symbol');
    else if (lastSymbol == "+" || lastSymbol == "-" || lastSymbol == "/" || lastSymbol == "*"){
      if (!screen.endsWith('.')) setScreen(`${screen}.`);
      else setScreen(`${screen}0.`)
    }
    else if (lastSymbol == '') setScreen(`${screen}.`);
    else setScreen(`${screen}0.`)

    setLastSymbol('.')
  }

  // +, - , *, /
  const insOp = (op) => {
    if (screen == '') setScreen(`0${op}`);
    else if (screen.endsWith("+")) console.log('err: ending with operand')
    else if (screen.endsWith("-")) console.log('err: ending with operand')
    else if (screen.endsWith("*")) console.log('err: ending with operand')
    else if (screen.endsWith("/")) console.log('err: ending with operand')
    else if (screen.endsWith(op)) console.log(`err: ${op} is the last symbol`)
    else setScreen(`${screen}${op}`)

    setLastSymbol(op)
  }

  // =
  const insAns = () => {
    const answer = eval(screen).toFixed(1);
    if(answer.endsWith('.0')) setScreen(`${answer.slice(0, -2)}`)
    else setScreen(`${answer}`);
    setLastSymbol('');
  }

  return (
    <div className="p-2">
      <BackLink link="/projects" text="Projects" />
      <div className="bg-stone-800 w-full md:w-80 mx-auto rounded-lg p-3">
        <h1 className="text-center head-text tracking-wide font-thin text-xl">Simple Calculator</h1>
        <input type="text" className="calc-input" placeholder="0" value={screen} readOnly />
        <div className="grid grid-cols-4 gap-2">
          <button className="edge-btn">(</button>
          <button className="edge-btn">)</button>
          <button className="edge-btn" onClick={backSpace}>&#x232B;</button>
          <button className="edge-btn" onClick={() => insOp('/')}>&divide;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>7</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>8</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>9</button>
          <button className="edge-btn" onClick={() => insOp('*')}>&times;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>4</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>5</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>6</button>
          <button className="edge-btn" onClick={ (e) => insOp(e.target.innerText)}>&minus;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>1</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>2</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>3</button>
          <button className="edge-btn" onClick={ (e) => insOp(e.target.innerText)}>+</button>
          <button className="reg-btn" onClick={() => insPoint()}>&#46;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>0</button>
          <button className="reg-btn" onClick={clear}>C</button>
          <button className="edge-btn" onClick={insAns}>&#61;</button>
        </div>
      </div>
    </div>
  )
}
