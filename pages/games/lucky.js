import { useState } from 'react'
export default function Lucky() {
  const [num,setNum] = useState(null)
  const spin = ()=>{
    const n = Math.floor(Math.random()*10)+1
    setNum(n)
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Lucky Spin</h1>
      <button onClick={spin} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-neonPink to-neonBlue text-black font-bold shadow-[0_0_20px_rgba(58,224,255,0.2)]">Spin!</button>
      {num && <div className="mt-6 text-2xl">You got: <strong>{num}</strong></div>}
    </div>
  )
}
