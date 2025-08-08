import React from 'react'

const Meeting = ({params}: {params: {id: string}}) => {
  return (
    <div className='bg-red-500'>Meeting Room : #{params.id}</div>
  )
}

export default Meeting;