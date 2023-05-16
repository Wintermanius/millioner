import { FC } from 'react'
import phoneActive from '../../../assets/images/phone-call.png';
import phoneDisactive from '../../../assets/images/phone-call_dis.png'
import styled, { css } from 'styled-components';
import { useUnit } from 'effector-react';
import { $isUsedPhoneCall, phoneCallEvents } from './model';

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

interface PhoneCallProps {
  className?: string
}

export const PhoneCall: FC<PhoneCallProps> = () => {
  const isUsedPhoneCall = useUnit($isUsedPhoneCall)
  const isUsedPhoneCallCanged = useUnit(phoneCallEvents.isUsedPhoneCallChanged)
  return (
    <Button active={!isUsedPhoneCall} onClick={isUsedPhoneCallCanged}><Image src={!isUsedPhoneCall ? phoneActive : phoneDisactive} alt="" /></Button>
  )
}
