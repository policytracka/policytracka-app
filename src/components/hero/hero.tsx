import React from 'react'
import Hand from '../../assets/hand.png'
import Bulb from '../../assets/bulb.png'

type Props = {}

const hero = (props: Props) => {
  return (<div>
 <div className='bg-gradient-to-b from-policypink to-policyorange h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
    <img src={Bulb} className='w-[20vw] relative top-[2%]'/>
    <img src={Hand} className='w-[350px] '/>
    </div>
    <div className='absolute  top-[20%]  w-[100vw] text-center text-[100px] font-bold text-white leading-tight	

drop-shadow-md'>
Creativity<br />
    From<br />
    Policy

    </div>

  </div>
   
    
  )
}

export default hero