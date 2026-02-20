import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
function MovieList({ genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    useEffect(()=>{
        if (genreId) getMovieByGenreId();
    },[genreId])
    const getMovieByGenreId = ()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        }).catch(err=>console.error(err))
    }
  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5 transition-smooth'>
        {movieList.map((item,index)=>(
           <MovieCard movie={item}/> 
        ))}
    </div>
  )
}

export default MovieList