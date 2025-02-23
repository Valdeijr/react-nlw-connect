import logo from '@/assets/images/logo.png'
import { Radio } from 'lucide-react'
import Image from 'next/image'
import FormSubscriber from './formSubscriber'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8  md:py-0">
      <div className=" min-h-dvh flex  justify-center gap-16 flex-col">
        <div className=" flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <h1 className=" text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-orange">Nome</span> do projeto 2025
          </h1>
        </div>
        <div className=" flex gap-5 items-stretch flex-col md:flex-row">
          <div className=" flex-1 bg-grey-100 border-grey-200 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-300 text-xl leading-nome">Sobre o sistema</h2>
              <span className="text-purple font-semibold text-xs flex items-center gap-2">
                <Radio className="size-5" />
                ONLINE
              </span>
            </div>
            <p className=" text-gray-300 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <FormSubscriber />
        </div>
      </div>
    </main>
  )
}
