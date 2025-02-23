import {
  getSubscribersSubscriberIdRankingClicks,
  getSubscribersSubscriberIdRankingCount,
  getSubscribersSubscriberIdRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export default async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscribersSubscriberIdRankingCount(subscriberId)
  const { count: inviteCount } = await getSubscribersSubscriberIdRankingClicks(subscriberId)
  const { position: rankingPosition } = await getSubscribersSubscriberIdRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-grey-100 border-grey-200 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <MousePointerClick className="size-5 absolute left-3 top-3 text-orange" />
        <span className="font-heading text-2-xl font-semibold text-gray-100 leading-none">{inviteCount}</span>
        <span className="text-sm text-center leading-none text-gray-300">Cliques no link.</span>
      </div>
      <div className="bg-grey-100 border-grey-200 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <BadgeCheck className="size-5 absolute left-3 top-3 text-orange" />
        <span className="font-heading text-2-xl font-semibold text-gray-100 leading-none">{accessCount}</span>
        <span className="text-sm text-center leading-none text-gray-300">Inscrições feitas.</span>
      </div>
      <div className="bg-grey-100 border-grey-200 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <Medal className="size-5 absolute left-3 top-3 text-orange" />
        <span className="font-heading text-2-xl font-semibold text-gray-100 leading-none">
          {rankingPosition ? `${rankingPosition}°` : '-'}
        </span>
        <span className="text-sm text-center leading-none text-gray-300">Sua posição.</span>
      </div>
    </div>
  )
}
