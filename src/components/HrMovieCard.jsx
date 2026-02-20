import React from 'react'

function HrMovieCard() {
  return (
    <div>
      <img src={IMAGE_BASE_URL+movie.poster_path} className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110'/>
    </div>
  )
}

export default HrMovieCard
