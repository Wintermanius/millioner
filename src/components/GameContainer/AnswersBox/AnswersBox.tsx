import { FC } from 'react'
import styled from 'styled-components'
import { answers } from './model'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Answer = styled.div`
  background-color: black;
  width: 45%;
  max-width: 690px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  margin: 5px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
    :hover {
      background-color: #00ff15;
    }
`

interface AnswersBoxProps {
  className?: string
}

export const AnswersBox: FC<AnswersBoxProps> = () => {

  return (
    <Container>
      {answers.map((item, index) => <Answer key={index}>{item}</Answer>)}
    </Container>
  )
}
