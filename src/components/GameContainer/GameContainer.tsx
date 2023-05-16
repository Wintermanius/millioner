import { FC } from 'react'
import { QuestionBox } from './QuestionBox'
import { AnswersBox } from './AnswersBox'
import styled from 'styled-components'

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

export const GameContainer: FC<GameContainerProps> = () => {
  return (
    <Container>
      <QuestionBox />
      <AnswersBox />
    </Container>
  )
}
