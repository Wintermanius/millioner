import { FC } from 'react'
import { Half } from './Half'
import { PhoneCall } from './PhoneCall'
import { PeoplesHelp } from './PeoplesHelp'
import styled from 'styled-components'

const HelpContainer = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  left: 20px;
`

interface HelpProps {
  className?: string
}

export const Help: FC<HelpProps> = ({ className }) => {
  return (
    <HelpContainer>
      <Half />
      <PhoneCall />
      <PeoplesHelp />
    </HelpContainer>
  )
    
}
