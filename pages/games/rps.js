import { useState } from 'react'

export default function RPS() {
  const choices = ['Rock','Paper','Scissors']
  const glowColors = {
    Rock: 'glow-orange',
    Paper: 'glow-blue',
    Scissors: 'glow-pink'
  }
  const [mode,setMode] = useState(null)
  const [userChoice,setUserChoice] = useState(null)
  const [computerChoice,setComputerChoice] = useState(null)
  const [p1,setP1] = useState(null)
  const [p2,setP2] = useState(null)
  const [result,setResult] = useState('')
  const [resultClass,setResultClass] = useState('')

  const checkWinner = (a,b)=>{
    if(a===b){ setResultClass('animate-pulseBlue text-cyan-300'); return 'Draw!' }
    if((a==='Rock'&&b==='Scissors')||(a==='Paper'&&b==='Rock')||(a==='Scissors'&&b==='Paper')){ setResultClass('animate-pulseGold text-yellow-300'); return 'Player 1 Wins!' }
    setResultClass('animate-pulseRed text-red-400'); return 'Player 2 Wins!'
  }

  const playAI = (choice)=>{
    const comp = choices[Math.floor(Math.random()*choices.length)]
    setUserChoice(choice); setComputerChoice(comp)
    if(choice===comp){ setResultClass('animate-pulseBlue text-cyan-300'); setResult('Draw!') }
    else if((choice==='Rock'&&comp==='Scissors')||(choice==='Paper'&&comp==='Rock')||(choice==='Scissors'&&comp==='Paper')){ setResultClass('animate-pulseGold text-yellow-300'); setResult('You Win!') }
    else { setResultClass('animate-pulseRed text-red-400'); setResult('You Lose!') }
  }

  const chooseP1 = (c)=>{ setP1(c); setResult('') }
  const chooseP2 = (c)=>{ setP2(c); setResult(checkWinner(p1,c)) }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Rock Paper Scissors</h1>
      {!mode && <div className="flex gap-4">
        <button onClick={()=>setMode(1)} className="px-6 py-3 rounded-2xl bg-purple-700 shadow-[0_0_20px_#8a2be2]">Play vs AI</button>
        <button onClick={()=>setMode(2)} className="px-6 py-3 rounded-2xl bg-blue-700 shadow-[0_0_20px_#00ffff]">2 Players</button>
      </div>}
      {mode===1 && <>
        <p>Choose your move:</p>
        <div className="flex gap-4 mt-4">
          {choices.map(c=>(
            <button key={c} onClick={()=>playAI(c)} className={`px-6 py-3 rounded-2xl bg-gray-800 ${glowColors[c]}`}>{c}</button>
          ))}
        </div>
        {userChoice && <div className="mt-6 text-center">
          You chose: <strong>{userChoice}</strong><br/>
          AI chose: <strong>{computerChoice}</strong><br/>
          <div className={`text-2xl font-bold mt-2 ${resultClass}`}>{result}</div>
        </div>}
        <button onClick={()=>{ setMode(null); setUserChoice(null); setComputerChoice(null); setResult('') }} className="mt-4 underline">Back</button>
      </>}
      {mode===2 && <>
        {!p1 ? <>
          <p>Player 1 choose:</p>
          <div className="flex gap-4 mt-4">{choices.map(c=>(
            <button key={c} onClick={()=>chooseP1(c)} className={`px-6 py-3 rounded-2xl bg-gray-800 ${glowColors[c]}`}>{c}</button>
          ))}</div>
        </> : !p2 ? <>
          <p>Player 2 choose:</p>
          <div className="flex gap-4 mt-4">{choices.map(c=>(
            <button key={c} onClick={()=>chooseP2(c)} className={`px-6 py-3 rounded-2xl bg-gray-800 ${glowColors[c]}`}>{c}</button>
          ))}</div>
        </> : <div className="mt-6 text-center">
          Player 1: <strong>{p1}</strong><br/>
          Player 2: <strong>{p2}</strong><br/>
          <div className={`text-2xl font-bold mt-2 ${resultClass}`}>{result}</div>
        </div>}
        {(p1 && p2) && <button onClick={()=>{ setP1(null); setP2(null); setResult('') }} className="mt-4 px-4 py-2 rounded-2xl bg-green-700">Play Again</button>}
        <button onClick={()=>{ setMode(null); setP1(null); setP2(null); setResult('') }} className="mt-4 underline">Back</button>
      </>}
    </div>
  )
}
