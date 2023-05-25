import { FC } from 'react'
import styled from 'styled-components'
import { money } from './model'

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
const Step = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
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

interface ProgressProps {
  className?: string
}

export const Progress: FC<ProgressProps> = ({className}) => {
  return (
    <Container className={className} >
      {money.map((index, item) => <Step key={index} className='gameStep'><StepNumber>{item + 1}</StepNumber><span>{index}</span></Step>).reverse()}
    </Container>
  )
}
