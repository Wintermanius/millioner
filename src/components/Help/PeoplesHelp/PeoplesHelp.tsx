import { FC } from 'react'
import styled, { css } from 'styled-components'
import peoplesActive from '../../../assets/images/group.png'
import peoplesDisactive from '../../../assets/images/group_dis.png'
import { useUnit } from 'effector-react'
import { $disabledPeople, $isUsedPeoples, peoplesEvents } from './model'
import { appModel } from '../../../app/model'

const Button = styled.button<{ disabled: boolean }>`
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
  transition: 0.25s background-color;
  cursor: pointer;
  :hover {
      background-color: #00ff15;
    }

  ${(props) => props.disabled && css`
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

export const PeoplesHelp: FC<PeoplesHelpProps> = ({ className }) => {
  const disabledPeople = useUnit($disabledPeople)
  const isUsedPeoples = useUnit($isUsedPeoples)
  const isUsedPeoplesChanged = useUnit(peoplesEvents.isUsedPeoplesChanged)
  const changePeopleMessage = useUnit(appModel.events.changePeopleMessage)

  function isUsedPeoplesHelp() {isUsedPeoplesChanged(); changePeopleMessage(true)}

  return (
    <Button className={className} disabled={disabledPeople} onClick={isUsedPeoplesHelp}><Image src={!disabledPeople ? peoplesActive : peoplesDisactive} alt="" /></Button>
  )
}
