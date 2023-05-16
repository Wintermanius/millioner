import { FC } from 'react'
import styled, { css } from 'styled-components'
import peoplesActive from '../../../assets/images/group.png'
import peoplesDisactive from '../../../assets/images/group_dis.png'
import { useUnit } from 'effector-react'
import { $isUsedPeoples, peoplesEvents } from './model'

const Button = styled.button<{ active: boolean }>`
  margin-left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  font-size: 30px;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  border: solid 5px rgb(255, 136, 0);
  align-items: start;
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

const Image = styled.img`
  max-width: 70px;
  max-height: 70px;
`

interface PeoplesHelpProps {
  className?: string
}

export const PeoplesHelp: FC<PeoplesHelpProps> = () => {
  const isUsedPeoples = useUnit($isUsedPeoples)
  const isUsedPeoplesChanged = useUnit(peoplesEvents.isUsedPeoplesChanged)
  return (
    <Button active={!isUsedPeoples} onClick={isUsedPeoplesChanged}><Image src={!isUsedPeoples ? peoplesActive : peoplesDisactive} alt="" /></Button>
  )
}
