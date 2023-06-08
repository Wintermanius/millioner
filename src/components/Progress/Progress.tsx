import { FC } from 'react'
import styled, { css } from 'styled-components'
import { money } from './model'
import { useUnit } from 'effector-react'
import { $questionNumber } from '../../app/model'

const Container = styled.div`
  color: white;
  background-color: black;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  display: flex;
  font-size: 20px;
  font-weight: bold;
  flex-direction: column;
  padding: 5px;
`

const StepNumber = styled.p`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgb(255, 136, 0);
  width: 30px;
  height: 30px;
`

const ActiveStep = styled.div<{ active: boolean }>`
 height: 34px;
 display: flex;
 align-items: center;
 width: 160px;
 transition: 0.25s background-color;
 border-radius: 15px;
  ${(props) => props.active && css`
    background-color: #00ff15;
    height: 30px;
    margin-top: 2px;
    margin-bottom: 2px;
  `};
`

interface ProgressProps {
  className?: string
}

export const Progress: FC<ProgressProps> = ({className}) => {
  const activeStep = useUnit($questionNumber)
  return (
    <Container className={className} >
      {money.map((index, item) => <ActiveStep active={activeStep === item} key={index} className='gameStep'><StepNumber>{item + 1}</StepNumber><span>{index}</span></ActiveStep>).reverse()}
    </Container>
  )
}
