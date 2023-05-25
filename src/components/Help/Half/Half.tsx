import { useUnit } from 'effector-react'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { $isUsedHalf, halfEvents } from './model'

const Button = styled.button<{ active: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  border: solid 5px rgb(255, 136, 0);
  transition: 0.25s background-color;
  cursor: pointer;
  :hover {
      background-color: #00ff15;
    }

  ${(props) => !props.active && css`
    background-color: rgb(51, 51, 51);
    border: solid 5px rgb(110, 110, 110);
    color: rgb(139, 139, 139);
    pointer-events: none;
    cursor: none;
  `}
`

interface HalfProps {
  className?: string
}

export const Half: FC<HalfProps> = () => {
  const isUsedHalf = useUnit($isUsedHalf)
  const isUsedHalfChanged = useUnit(halfEvents.isUsedHalfChanged)

  return (
    <Button active={!isUsedHalf} onClick={isUsedHalfChanged}>50/50</Button>
  )
}
