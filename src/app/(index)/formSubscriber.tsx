'use client'
import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { postSubscribers } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(3, 'Digite seu nome completo'),
  email: z.string().email('Digite um email válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export default function FormSubscriber() {
  const { push } = useRouter()
  const seachParams = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })
  const handleSubscribe = async ({ name, email }: SubscriptionSchema) => {
    const referrer = seachParams.get('referrer')
    console.log(referrer)
    const { subscriberId } = await postSubscribers({ name, email, referrer })
    push(`/invite/${subscriberId}`)
  }
  return (
    <form
      onSubmit={handleSubmit(handleSubscribe)}
      className=" bg-grey-100 border-grey-200 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-300 text-xl">Inscreva-se</h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField type="text" placeholder="Digite seu nome." {...register('name')} />
          </InputRoot>
          {errors.name && <p className="text-danger text-xs font-semibold">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField type="email" placeholder="Digite seu emai." {...register('email')} />
          </InputRoot>
          {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
        </div>
      </div>
      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
