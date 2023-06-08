import { FC } from 'react'
import { Half } from './Half'
import { PhoneCall } from './PhoneCall'
import { PeoplesHelp } from './PeoplesHelp'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $showMessage } from '../../app/model'

const HelpContainer = styled.div`
  display: flex;
`

const StyledPeoplesHelp = styled(PeoplesHelp)`
  margin-left: 10px;
`
const PhoneCallStyled = styled(PhoneCall)`
  margin-left: 10px;
`
const MessageScreen = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 300px;
  height: 100px;
  padding: 10px;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  color: white;
  font-size: 40px;
  font-weight: bold;
`

interface HelpProps {
  className?: string
  correctAnswer: string | null
}

export const Help: FC<HelpProps> = ({ className, correctAnswer }) => {
  const showMessage = useUnit($showMessage)
  return (
    <HelpContainer className={className}>
      <Half />
      <PhoneCallStyled />
      <StyledPeoplesHelp />
      {showMessage && <MessageScreen>{correctAnswer}</MessageScreen>}
    </HelpContainer>
  )
    
}
