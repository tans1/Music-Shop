import React from 'react'
import { BsFacebook , BsInstagram, BsLinkedin} from 'react-icons/bs';


function SocialMedia() {
  return (
    <div className='mt-[150px] text-white pb-[100px]'>
      <div className='text-5xl font-bold flex justify-center'>FOLLOW US ON SOCIAL MEDIA</div>
      <div className='flex justify-center items-center my-12'>
        <div className='flex justify-between items-center  w-[200px] text-3xl text-gray-400'>
        <BsFacebook />
        <BsInstagram />
        <BsLinkedin />
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
