import { FC } from 'react'
import { Half } from './Half'
import { PhoneCall } from './PhoneCall'
import { PeoplesHelp } from './PeoplesHelp'

interface HelpProps {
  className?: string
}

export const Help: FC<HelpProps> = ({ className }) => {
  return (
    <>
      <Half />
      <PhoneCall />
      <PeoplesHelp />
    </>
  )
    
}
