import React from 'react'
import Navbar from '../components/navbar/navbar'
import CreateMusic from '../components/musics/create/createMusic'

function CreatePage() {
  
  return (
    <div className='px-[100px]'>
      <Navbar />
      <CreateMusic url={"https://music-shop-backend-jwdn.onrender.com/create"} title = {""} artist = {""}/>
    </div>

  )
}

export default CreatePage
