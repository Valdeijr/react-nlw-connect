import cooper from '@/assets/images/medal-cooper.svg'
import gold from '@/assets/images/medal-gold.svg'
import silver from '@/assets/images/medal-silver.svg'
import { getRanking } from '@/http/api'
import Image from 'next/image'

export default async function Ranking() {
  const { ranking } = await getRanking()
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-300 text-xl font-heading font-semibold leading-none">Ranking de Indicações</h2>
      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className="bg-grey-100 border-grey-200 rounded-xl p-6 flex flex-col justify-center gap-3 relative"
            >
              <span className="text-sm leading-none text-gray-300">
                <span className="font-semibold">{rankingPosition}°</span> | {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">{item.score}</span>
              {rankingPosition === 1 && <Image src={gold} alt="FirstPosition" className="absolute top-0 right-8" />}
              {rankingPosition === 2 && <Image src={silver} alt="FirstPosition" className="absolute top-0 right-8" />}
              {rankingPosition === 3 && <Image src={cooper} alt="FirstPosition" className="absolute top-0 right-8" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
