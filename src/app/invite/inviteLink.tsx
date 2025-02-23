'use client'
import { IconButton } from '@/components/iconButton'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkProps {
  inviteLink: string
}

export default function InviteLink({ inviteLink }: InviteLinkProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink)
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={handleCopyLink}>
        <Copy />
      </IconButton>
    </InputRoot>
  )
}
