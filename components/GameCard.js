import Link from 'next/link'
import { motion } from 'framer-motion'

export default function GameCard({ game }) {
  return (
    <Link href={game.href}>
      <motion.a
        whileHover={{ scale: 1.03 }}
        className={`neon-card p-4 rounded-2xl block`}
      >
        <div className="relative w-full h-40 rounded-md overflow-hidden mb-3 bg-gray-800 flex items-center justify-center text-gray-400">
          <img src={game.image} alt={game.title} className="object-cover w-full h-full" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">{game.title}</h3>
            <p className="text-sm opacity-80">{game.subtitle}</p>
          </div>
          {game.tag && <span className="text-sm font-bold px-3 py-1 rounded-full" style={{background:'rgba(255,255,255,0.04)'}}>{game.tag}</span>}
        </div>
      </motion.a>
    </Link>
  )
}
