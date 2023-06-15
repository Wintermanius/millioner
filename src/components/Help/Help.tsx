import { FC } from 'react'
import { Half } from './Half'
import { PhoneCall } from './PhoneCall'
import { PeoplesHelp } from './PeoplesHelp'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $showPeopleMessage, $showPhoneMessage } from '../../app/model'

const HelpContainer = styled.div`
  display: flex;
`

const StyledPeoplesHelp = styled(PeoplesHelp)`
  margin-left: 10px;
`
const PhoneCallStyled = styled(PhoneCall)`
  margin-left: 10px;
`
const PhoneMessageScreen = styled.div`
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
  font-size: 25px;
  font-weight: bold;
`
const MessageScreen = styled(PhoneMessageScreen)`
  flex-direction: column;
  align-items: normal;
  justify-content: normal;
  width: 500px;
  height: 200px;
  left: 300px;
`

interface HelpProps {
  className?: string
  correctAnswer: string | null
  answers: (string | number)[][]
  questionNumber: number
}

export const Help: FC<HelpProps> = ({ className, correctAnswer, answers, questionNumber }) => {

  const showPhoneMessage = useUnit($showPhoneMessage)
  const showPeopleMessage = useUnit($showPeopleMessage)

  const peoplesRating = answers?.map((item, index) => <div key={index}>{item[0]} --- {item[1]}%</div>)

  return (
    <HelpContainer className={className}>
      <Half />
      <PhoneCallStyled />
      {showPhoneMessage && <PhoneMessageScreen>{correctAnswer}</PhoneMessageScreen>}
      <StyledPeoplesHelp />
      {showPeopleMessage && <MessageScreen>{peoplesRating}</MessageScreen>}
    </HelpContainer>
  )
    
}
