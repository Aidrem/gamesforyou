import GameCard from '../components/GameCard'
const games = [
  { id:'rps', title:'Rock Paper Scissors', subtitle:'Classic quick game', tag:'Hot', image:'/games/rps.png', href:'/games/rps' },
  { id:'lucky', title:'Lucky Spin', subtitle:'Spin for prizes', tag:'New', image:'/games/lucky.png', href:'/games/lucky' }
]
export default function Home() {
  return (
    <main className="min-h-screen p-8 container mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neonBlue to-neonPink flex items-center justify-center text-black font-bold">GFY</div>
          <div>
            <h1 className="text-3xl font-extrabold">Games For You</h1>
            <p className="text-sm opacity-70">Neon mini arcade</p>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(g => <GameCard key={g.id} game={g} />)}
      </section>
    </main>
  )
}
