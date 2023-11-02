import { useParams } from 'react-router-dom';
import { Movie } from '../../type';
import axios from 'axios';
import { useState, useEffect } from 'react'


const Page=() => {
    
    const {id } = useParams<{ id:string }>()
    const [viem, setViem] = useState<Movie[] >([])
   
     
 
     useEffect(() => {
         const options = {
             method: 'GET',
             url: 'https://api.themoviedb.org/3/trending/movie/day',
             params: { language: 'en-US' },
             headers: {
                 accept: 'application/json',
                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTM0YmQwNzRkY2NkODc0ZDU1NDEwMGUwMGU2NTI3OCIsInN1YiI6IjYyMGJiZTY0YzE1YjU1MDAxYjg0NDRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M8_sjJjD0xHB4NEhooSn4W8gbnU9IhLXwFYmvNdG5Tw'
             }
         };
 
         axios
             .request(options)
             .then(function (response) {
                // console.log(response.data);
                // setViem(response.data.results)
                const movies = response.data.results;
                const movie = movies.find((item) => item.id === Number(id));
        if (movie) {
          setViem(movie);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
 
           
     }, [id])
    console.log(viem)
   

   
      

  return (
    <div>
      {viem ? (
        <div>
          <h2>{viem.title}</h2>
          <p>{viem.overview}</p>
          <img className="w-full max-h-96" src={
                        `https://image.tmdb.org/t/p/w500${viem.poster_path}` 
                    } alt="Bir örnek resim" />
         
        </div>
      ) : (
        <div>Film bulunamadı</div>
      )}
     
        
    </div>
  )
}

export default Page