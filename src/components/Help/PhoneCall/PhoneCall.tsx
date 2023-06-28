import { FC } from 'react'
import phoneActive from '../../../assets/images/phone-call.png';
import phoneDisactive from '../../../assets/images/phone-call_dis.png'
import styled, { css } from 'styled-components';
import { useUnit } from 'effector-react';
import { $disabledPhone, $isUsedPhoneCall, phoneCallEvents } from './model';
import { appModel } from '../../../app/model';

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

interface PhoneCallProps {
  className?: string
}

export const PhoneCall: FC<PhoneCallProps> = ({className}) => {
  const disabledPhone = useUnit($disabledPhone)
  const isUsedPhoneCall = useUnit($isUsedPhoneCall)
  const isUsedPhoneCallCanged = useUnit(phoneCallEvents.isUsedPhoneCallChanged)
  const changePhoneMessage = useUnit(appModel.events.changePhoneMessage)
  
  function isUsedPhone() {isUsedPhoneCallCanged(); changePhoneMessage(true)}

  return (
    <Button className={className} disabled={disabledPhone} onClick={isUsedPhone}><Image src={!disabledPhone ? phoneActive : phoneDisactive} alt="" /></Button>
  )
}
