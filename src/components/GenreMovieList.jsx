import React from 'react'
import MovieList from './MovieList'

const GenresList = {
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
  ]
}

function GenreMovieList() {
  return (
    <div>
      {GenresList.genres.map((item,index) => index<=4&&(
        <div className='p-8 px-8 md:px-16' key={item.id}>
          <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList genreId ={item.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
