import { useUnit } from 'effector-react'
import { FC } from 'react'
import styled from 'styled-components'
import { $money } from './model'

const Container = styled.div`
  color: white;
  background-color: black;
  width: 200px;
  display: block;
  border-radius: 20px;
  border: solid 5px rgb(30, 135, 255);
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  flex-wrap: wrap;
  align-content: center;
`
const Step = styled(Container)`
  border: none;
  height: 35px;
  background-color: none;
`
const StepNumber = styled.p`
  margin-left: 5px;
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

export const Progress: FC<ProgressProps> = () => {
  const money = useUnit($money)
  return (
    <Container>
      {money.map((index, item) => <Step className='gameStep'><StepNumber>{item + 1}</StepNumber><span>{index}</span></Step>).reverse()}
    </Container>
  )
}
