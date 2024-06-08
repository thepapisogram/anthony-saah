/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from 'react'

import '@/app/styles/projects/calculator.css'
import BackLink from '@/app/components/universal/BackLink';

export default function page() {

  const [screen, setScreen] = useState('');
  const [lastSymbol, setLastSymbol] = useState('');
  const [bracketOpen, setBracketOpen] = useState(false);

  // Backspace & Clear
  const backSpace = () => {
    if (screen.length >= 1) setScreen(screen.slice(0, -1))
  }
  const clear = () => {
    setLastSymbol('')
    setScreen('')
    setBracketOpen(false);
  }

  // 0 - 9
  const insNum = (num) => {
    setScreen(`${screen}${num}`)
  }
  // .
  const insPoint = () => {
    if (screen == '') setScreen('0.');
    else if (screen.endsWith('(')) setScreen(`${screen}0.`)
    else if (lastSymbol == ".") console.log('err: . is last symbol');
    else if (lastSymbol == '.') console.log('err: . is the last symbol');
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

  // ( )
  const bracketHandler = (bracket) => {
    if(bracket == '('){
      if(bracketOpen === true){
        if(screen.endsWith(bracket)) console.log(`err: ending with ${bracket}`)
        else if(screen.endsWith('.')) console.log('err: ending with a .')
        else if (screen.endsWith("+") || screen.endsWith("-") || screen.endsWith("/") || screen.endsWith("*")) console.log('err. ending with operand')
        else console.log('( is still open')
      } else{
        if(screen === '') setScreen('(');
        else if (lastSymbol === '') setScreen(`${screen}*(`)
        else if (screen.endsWith("+") || screen.endsWith("-") || screen.endsWith("/") || screen.endsWith("*")){
          setScreen(`${screen}(`)
        }
        else if (screen.endsWith('.')) console.log('err: ending with .')
        else setScreen(`${screen}*(`);
        setBracketOpen(true);
      }
      setBracketOpen(true)
    } else{
      if (bracketOpen === true) {
        if(screen === '') console.log('err: no open bracket');
        else if (screen.endsWith(bracket)) console.log(`err: ending with ${bracket}`)
        else if (screen.endsWith('(')) setScreen(`${screen}1)`)
        else setScreen(`${screen})`)
        setBracketOpen(false)
      }
    }
  }

  // =
  const insAns = () => {
    let answer = eval(screen).toFixed(1);
    if(answer.endsWith('.0')){
      setScreen(`${answer.slice(0, -2)}`);
      answer = answer.slice(0, -2);
    }
    else setScreen(`${answer}`);

    if (answer.includes('.')) setLastSymbol('.');
    else setLastSymbol('');

    setBracketOpen(false);
  }

  return (
    <div className="p-2 my-3">
      <BackLink link="/projects" text="Projects" />
      <div className="calculator">
        <h1 className="calc-text head-text">Simple Calculator</h1>
        <input type="text" className="calc-input" placeholder="0" value={screen} readOnly />
        <div className="grid grid-cols-4 gap-2">
          <button className="edge-btn" onClick={clear}>CLS</button>
          <button className="edge-btn" onClick={(e) => bracketHandler(e.target.innerText)}>(</button>
          <button className="edge-btn" onClick={(e) => bracketHandler(e.target.innerText)}>)</button>
          {/* <button className="edge-btn" onClick={backSpace}>&#x232B;</button> */}
          <button className="edge-btn" onClick={() => insOp('/')}>&divide;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>7</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>8</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>9</button>
          <button className="edge-btn" onClick={() => insOp('*')}>&times;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>4</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>5</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>6</button>
          <button className="edge-btn" onClick={ (e) => insOp('-')}>&minus;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>1</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>2</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>3</button>
          <button className="edge-btn" onClick={ (e) => insOp(e.target.innerText)}>+</button>
          <button className="reg-btn" onClick={() => insPoint()}>&#46;</button>
          <button className="reg-btn" onClick={(e) => insNum(e.target.innerText)}>0</button>
          <button className="reg-btn">ANS</button>
          <button className="edge-btn" onClick={insAns}>&#61;</button>
        </div>
      </div>
    </div>
  )
}
