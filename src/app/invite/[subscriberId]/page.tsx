import logo from '@/assets/images/logo.png'

import Image from 'next/image'
import InviteLink from './inviteLink'
import Ranking from './ranking'
import Stats from './stats'

interface InvitePageProps {
  params: Promise<{
    subscriberId: string
  }>
}

export default async function Invite(props: InvitePageProps) {
  const { subscriberId } = await props.params
  const inviteLink = `http://localhost:3330/invites/${subscriberId}`
  return (
    <main className=" max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
        <div className="flex flex-col gap-10 w-full max-w-[500px]">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <div className="spcace-y-2">
            <h1 className="text-4xl font-heading font-semibold leading-nome text-gray-100">Inscrição confirmada!</h1>
            <p>Para blábla é só blá</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-gray-300 text-xl font-heading font-semibold leading-none">teste</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Para blábla é só blá</p>
            </div>
            <InviteLink inviteLink={inviteLink} />
          </div>
          <Stats subscriberId={subscriberId} />
        </div>
        <Ranking />
      </div>
    </main>
  )
}
