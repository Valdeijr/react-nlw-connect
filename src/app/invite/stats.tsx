import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export default function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-grey-100 border-grey-200 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <MousePointerClick className="size-5 absolute left-3 top-3 text-orange" />
        <span className="font-heading text-2-xl font-semibold text-gray-100 leading-none">2340</span>
        <span className="text-sm text-center leading-none text-gray-300">Cliques no link.</span>
      </div>
      <div className="bg-grey-100 border-grey-200 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <BadgeCheck className="size-5 absolute left-3 top-3 text-orange" />
        <span className="font-heading text-2-xl font-semibold text-gray-100 leading-none">2340</span>
        <span className="text-sm text-center leading-none text-gray-300">Inscrições feitas.</span>
      </div>
      <div className="bg-grey-100 border-grey-200 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <Medal className="size-5 absolute left-3 top-3 text-orange" />
        <span className="font-heading text-2-xl font-semibold text-gray-100 leading-none">2340</span>
        <span className="text-sm text-center leading-none text-gray-300">Sua posição.</span>
      </div>
    </div>
  )
}
