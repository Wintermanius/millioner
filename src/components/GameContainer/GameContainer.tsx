import { FC, useEffect } from 'react'
import { QuestionBox } from './QuestionBox'
import { AnswersBox } from './AnswersBox'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $questionsData, events } from './model'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 1400px;
`

interface GameContainerProps {
  className?: string
}

export const GameContainer: FC<GameContainerProps> = ({className}) => {

  const mountedChanged = useUnit(events.mountedChanged)

  const questionsData = useUnit($questionsData)
  const question = questionsData[1]?.question
  console.log(question)
 
  useEffect(() => {
    mountedChanged(true)
  }, [])
  
  return (
    <Container className={className}>
      <QuestionBox />
      <AnswersBox />
    </Container>
  )
}
