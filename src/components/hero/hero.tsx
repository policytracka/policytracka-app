import React from 'react'
import Hand from '../../assets/hand.png'
import Bulb from '../../assets/bulb.png'

type Props = {}

const hero = (props: Props) => {
  return (<div>
 <div className='bg-gradient-to-b from-policypink to-policyorange h-[80vh] w-[100vw] flex flex-col justify-end items-center'>
    <img src={Bulb} className='w-[207px] relative top-16'/>
    <img src={Hand} className='w-[390px]  '/>
    </div>
    <div>
Creativity
    From
    Policy

    </div>

  </div>
   
    
  )
}

export default hero