import { useUnit } from 'effector-react'
import { FC } from 'react'
import styled from 'styled-components'
import { $money } from './model'

const Div = styled.div`
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
const Step = styled(Div)`
  border: none;
  height: 35px;
  background-color: none;
`
const P = styled.p`
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
    <Div>
      {money.map((index, item) => <Step className='gameStep'><P>{item + 1}</P><span>{index}</span></Step>).reverse()}
    </Div>
  )
}
