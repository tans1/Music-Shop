import React from 'react'

function CreateMusic({url,title,artist}) {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <div className='border-[1px] border-gray-300 p-[50px] h-[50vh] w-[50vw]'>
          <form action={url} method='POST' enctype="multipart/form-data">
              <label className='text-white my-2 text-xl font-bold h-7 block' htmlFor="title">Title</label>
              <input className=' my-3 px-3 py-2 rounded-md outline-none h-7 w-[20vw] block' type="text" placeholder='title' name='title' value = {title !== "" ? title: null} />
              <label className='text-white my-2 text-xl font-bold h-7 block' htmlFor="artist">Artist</label>
              <input className=' my-3 px-3 py-2 rounded-md outline-none h-7 w-[20vw] block' type="text" placeholder='artist' name='artist' value = {artist !== "" ? title: null} />
              <label className='text-white my-2 text-xl font-bold h-7 block' htmlFor="file">File</label>
              <input className='text-white my-3 rounded-md outline-none h-7 w-[20vw] block' type="file" placeholder='file' name='file'/>
              <button type='submit' className='w-[200px] hover:scale-105 border-2 border-green-600 rounded-xl h-[40px] my-3 text-white text-xl'>submit</button>
          </form>
        </div>
      </div>
  )
}

export default CreateMusic
