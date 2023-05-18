import { FC } from 'react'
import { Half } from './Half'
import { PhoneCall } from './PhoneCall'
import { PeoplesHelp } from './PeoplesHelp'
import styled from 'styled-components'

const HelpContainer = styled.div`
  display: flex;
`

const StyledPeoplesHelp = styled(PeoplesHelp)`
  margin-left: 10px;
`
const PhoneCallStyled = styled(PhoneCall)`
  margin-left: 10px;
`

interface HelpProps {
  className?: string
}

export const Help: FC<HelpProps> = ({ className }) => {
  return (
    <HelpContainer className={className}>
      <Half />
      <PhoneCallStyled />
      <StyledPeoplesHelp />
    </HelpContainer>
  )
    
}
